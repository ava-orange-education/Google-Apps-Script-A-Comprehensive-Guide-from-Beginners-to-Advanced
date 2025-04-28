const GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN';
const REPO_OWNER = '<YOUR_GITHUB_NAME>';
const REPO_NAME = '<YOUR_REPO_NAME>';

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🖱️ GitHub Tracker')
    .addItem('⬇️  Download commits', 'main')
    .addItem('🪝 Create web hook', 'newWebHook')
    .addToUi();
}

function doPost(e) {
  const { contents } = e.postData;
  const { commits } = JSON.parse(contents);
  const data = commits.map(item => ({
    name: item.author.name,
    date: item.timestamp,
    message: item.message,
    sha: item.id,
    url: item.url,
  }));
  const ssData = data.reduce(
    (acc, row) => [
      ...acc,
      [
        '',
        row.name,
        row.date,
        row.message,
        `=hyperlink("${row.url}", "${row.sha}")`,
      ],
    ],
    []
  );
  const ws = SpreadsheetApp.getActive().getSheets()[0];
  ws.insertRows(2, ssData.length);
  ws.getRange(2, 1, ssData.length, ssData[0].length).setValues(ssData);
  SpreadsheetApp.flush();
}

function newWebHook() {
  const ui = SpreadsheetApp.getUi();
  const userResp = ui.prompt(
    'Please paste the web hook URL',
    ui.ButtonSet.OK_CANCEL
  );
  const [button, url] = [
    userResp.getSelectedButton(),
    userResp.getResponseText(),
  ];
  if (button === ui.Button.CANCEL) return;

  const re =
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;
  if (!re.test(url)) throw new Error('Invalid URL syntax');

  const ws = SpreadsheetApp.getActive();
  ws.toast(`Creating a repo webhook at this URL: ${url}`);
  const result = createWebhook_(url, ['push']);
  if (null === result)
    throw new Error(
      'Could not create web hook; see execution log for details.'
    );
  ws.toast(`Repo web hook created at this URL: ${url}`);
}

function createWebhook_(webhookUrl, events = ['push', 'pull_request']) {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    payload: JSON.stringify({
      name: 'web',
      active: true,
      events,
      config: {
        url: webhookUrl,
        content_type: 'json',
        insecure_ssl: '0',
      },
    }),
    muteHttpExceptions: true,
  };

  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/hooks`;
  const response = UrlFetchApp.fetch(url, options);

  if (response.getResponseCode() === 201) {
    const webhook = JSON.parse(response.getContentText());
    console.log('Webhook created successfully:', webhook);
    return webhook;
  } else {
    console.error('Error creating webhook:', response.getContentText());
    return null;
  }
}

function getGitHubCommits() {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
    muteHttpExceptions: true,
  };

  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/commits`;
  const response = UrlFetchApp.fetch(url, options);

  if (response.getResponseCode() === 200) {
    const commits = JSON.parse(response.getContentText());
    PubSub.init().publish('commits-load', commits);
    return commits;
  } else {
    console.error('Error fetching commits:', response.getContentText());
    return null;
  }
}

class PubSub {
  constructor() {
    if (PubSub.instance) return PubSub.instance;
    this.subscriptions = [];
    PubSub.instance = this;
    return PubSub.instance;
  }
  static init() {
    return new PubSub();
  }
  static get instance() {
    return PubSub.__instance;
  }
  static set instance(pubsub) {
    PubSub.__instance = pubsub;
  }
  subscribe(eventName, callback) {
    this.subscriptions.push({ eventName, callback });
  }
  publish(eventName, data) {
    this.subscriptions.forEach(
      subscription =>
        subscription.eventName === eventName && subscription.callback(data)
    );
  }
}

function main() {
  PubSub.init().subscribe('commits-load', printCommits);
  getGitHubCommits();
}

function printCommits(commits) {
  const data = commits.map(item => ({
    avatar: item.committer.avatar_url,
    name: item.commit.author.name,
    date: item.commit.committer.date,
    message: item.commit.message,
    sha: item.sha,
    url: item.url,
  }));
  const ws = SpreadsheetApp.getActive().getSheets()[0];
  ws.clearContents();
  const twoDimAr = [['Avatar', 'Committer', 'Date', 'Message', 'SHA']];
  const ssData = data.reduce(
    (acc, row) => [
      ...acc,
      [
        `=image("${row.avatar}")`,
        row.name,
        row.date,
        row.message,
        `=hyperlink("${row.url}", "${row.sha}")`,
      ],
    ],
    twoDimAr
  );
  ws.getRange(1, 1, ssData.length, ssData[0].length).setValues(ssData);
}
