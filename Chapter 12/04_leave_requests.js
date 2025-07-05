const DATABASE_ID = '<SPREADSHEET_ID>';
const FULL_QUOTA = 30;
const WEB_APP_URL = 'https://script.google.com/macros/s/<TEST_URL_ID>/dev';

function doGet(e) {
  // Return default page if no parameters
  if (!e?.parameter?.action || !e?.parameter?.requestId) {
    return HtmlService.createHtmlOutputFromFile('index');
  }

  const { action, requestId } = e.parameter;

  // Return error for invalid action
  if (!['approve', 'reject'].includes(action)) {
    return HtmlService.createHtmlOutput(
      HtmlService.createHtmlOutputFromFile('unrecognized')
        .getContent()
        .replace('{{action}}', action)
    );
  }

  // Process approval or rejection
  const request =
    'approve' === action ? approveRequest(requestId) : rejectRequest(requestId);
  const actionText = 'approve' === action ? 'Approved' : 'Rejected';

  // Notify the employee if the request was processed
  if (null !== request) {
    notifyEmployee(
      actionText,
      request.user_email,
      request.start_date.toISOString().split('T')[0],
      request.end_date.toISOString().split('T')[0],
      request.duration
    );
  }

  // Return confirmation page
  return HtmlService.createHtmlOutput(
    HtmlService.createHtmlOutputFromFile('success')
      .getContent()
      .replace(/\{\{approved_or_rejected\}\}/g, actionText)
  );
}

function getUserEmail() {
  return Session.getActiveUser().getEmail();
}

function getAllRequests() {
  const ws = SpreadsheetApp.openById(DATABASE_ID).getSheets()[0];
  const data = ws.getDataRange().getValues();
  const headers = data.shift(); // Extract column headers
  const objAr = data.map(row =>
    row.reduce((acc, cell, i) => {
      return { ...acc, [headers[i]]: cell };
    }, {})
  );
  return { headers, objAr };
}

function getRequests() {
  const userEmail = getUserEmail();
  const userData = getAllRequests().objAr.filter(
    obj => userEmail === obj.user_email
  );
  console.log(userData);
  return JSON.stringify(userData);
}

function getRemainingQuota() {
  const usedQuota = JSON.parse(getRequests()).reduce((acc, request) => {
    if (['Approved', 'Pending'].includes(request.status))
      return acc + request.duration;
    return acc;
  }, 0);
  return FULL_QUOTA - usedQuota;
}

function saveRequest(start, end, status = 'Pending') {
  const MS_IN_DAY = 1000 * 60 * 60 * 24;
  const durationDays = Math.ceil(
    (new Date(end) - new Date(start)) / MS_IN_DAY + 1
  );
  const uuid = Utilities.getUuid();

  SpreadsheetApp.openById(DATABASE_ID)
    .getSheets()[0]
    .appendRow([uuid, getUserEmail(), start, end, durationDays, status]);

  SpreadsheetApp.flush();
  notifyManager(start, end, durationDays, uuid);
  return true;
}

function updateRequestById(requestId, status) {
  const allRequests = getAllRequests();
  const requestIndex = allRequests.objAr.findIndex(
    request => requestId === request.request_id
  );
  if (requestIndex === -1) return false;

  const request = allRequests.objAr[requestIndex];
  if (request.status === status) return null; // Avoid unnecessary updates

  SpreadsheetApp.openById(DATABASE_ID)
    .getSheets()[0]
    .getRange(requestIndex + 2, 6) // +2 accounts for zero-based index and headers
    .setValue(status);

  SpreadsheetApp.flush();
  return request;
}

function cancelRequest(requestId) {
  return !!updateRequestById(requestId, 'Cancelled');
}

function approveRequest(requestId) {
  console.log('🆗 Approving request');
  return updateRequestById(requestId, 'Approved');
}

function rejectRequest(requestId) {
  console.log('⏏️ Rejecting request');
  return updateRequestById(requestId, 'Rejected');
}

function notifyManager(start, end, duration, uuid) {
  const htmlBody = HtmlService.createHtmlOutputFromFile('email_template')
    .getContent()
    .replace('{{start_date}}', start)
    .replace('{{end_date}}', end)
    .replace('{{duration}}', duration)
    .replace('{{employee_email}}', getUserEmail())
    .replace(
      '{{approve_url}}',
      `${WEB_APP_URL}?action=approve&requestId=${uuid}`
    )
    .replace(
      '{{reject_url}}',
      `${WEB_APP_URL}?action=reject&requestId=${uuid}`
    );

  GmailApp.sendEmail('manager@example.com', 'New leave request', '', {
    htmlBody,
  });
}

function notifyEmployee(approvedOrRejected, userEmail, start, end, duration) {
  const htmlBody = HtmlService.createHtmlOutputFromFile('confirmation_email')
    .getContent()
    .replace(/\{\{approved_or_rejected\}\}/g, approvedOrRejected)
    .replace('{{start_date}}', start)
    .replace('{{end_date}}', end)
    .replace('{{duration}}', duration);

  GmailApp.sendEmail(userEmail, 'Re: your leave request', '', {
    htmlBody,
  });
}
