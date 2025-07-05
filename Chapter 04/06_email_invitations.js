const EMAIL_SETTINGS = {
  subject: '{{Recipient Name}}, you are invited to the {{Event Name}}',
  toField: 'Email Address',
  resultsField: 'Invitation Sent (Y/N)',
};

Object.freeze(EMAIL_SETTINGS);

function merge() {
  const mergeResults = createEmails();
  updateResultsInSheet(mergeResults);
}

function createEmails() {
  // Extracts the contents of our HTML template
  const htmlTemplate =
    HtmlService.createHtmlOutputFromFile('EmailTemplate').getContent();

  // Creates an instance of records in the Invitees sheet
  const rec = new Records('Invitees');

  // Stores the outcome of the email merge
  const results = [];
  
  // Transforms records into emails and stores the result;
  rec.records.forEach(record => {
    let htmlBody = htmlTemplate;
    let subject = EMAIL_SETTINGS.subject;
    const to = record[EMAIL_SETTINGS.toField];

    // Replaces the merge fields with their respective values
    Object.entries(record).forEach(([key, value]) => {
      htmlBody = htmlBody.replace(new RegExp(`{{${key}}}`, 'g'), value);
      subject = subject.replace(new RegExp(`{{${key}}}`, 'g'), value);
    });

    // Tries to create the emails. The try-catch block allows
    // to record any failures without interrupting the whole app
    try {
      GmailApp.createDraft(to, subject, '', { htmlBody });
      results.push('Y');
    } catch (err) {
      Logger.log(`ERROR trying to send to ${to}: ${err}`);
      results.push('N');
    }
  });
  Logger.log(results);
  return { rec, results };
}

// Accepts the object containing a Records instance and the results array
function updateResultsInSheet({ rec, results }) {

  // Finds the index of the column that stores the results in the spreadsheet
  const colIndex = rec.headers.findIndex(
    header => EMAIL_SETTINGS.resultsField === header
  );

  // Throws an error if such column ws not found.
  if (-1 === colIndex)
    throw `Could not find column "${EMAIL_SETTINGS.resultsField}" in sheet ${rec.sheetName}`;

 // Inserts the results into the sheet
  const range = rec.worksheet
    .getRange(2, colIndex + 1, results.length, 1)
    .setValues(results.map(result => [result]));
}

class Records {
  constructor(sheetName) {
    this.spreadsheet = SpreadsheetApp.getActive();
    this.sheetName = sheetName;
    this.worksheet = this.spreadsheet.getSheetByName(this.sheetName);
    if (null === this.worksheet)
      throw `Worksheet ${this.sheetName} does not exist`;
    this.data = this.worksheet.getDataRange().getDisplayValues();
    this.headers = this.data.shift();
    this.records = this.data.map(row =>
      row.reduce(
        (record, value, i) => ({ ...record, [this.headers[i]]: value }),
        {}
      )
    );
  }
}




