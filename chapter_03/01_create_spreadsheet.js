function createNewSpreadsheet() {
  const newSpreadsheet = SpreadsheetApp.create(
    'Created with Google Apps Script'
  );
  const spreadsheetUrl = newSpreadsheet.getUrl();
  Logger.log(spreadsheetUrl);
}
