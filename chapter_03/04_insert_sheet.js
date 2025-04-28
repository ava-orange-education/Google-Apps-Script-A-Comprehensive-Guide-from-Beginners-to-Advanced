function createNewSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.insertSheet();
}

function createFromTemplate() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const templateSheet = ss.getSheetByName('Sheet1');
  ss.insertSheet(1, { template: templateSheet });
}
