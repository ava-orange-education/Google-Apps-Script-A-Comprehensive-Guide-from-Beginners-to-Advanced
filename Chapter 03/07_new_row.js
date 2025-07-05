function getSheet(indexOrName) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if ('string' === typeof indexOrName)
    return spreadsheet.getSheetByName(indexOrName);
  if ('number' === typeof indexOrName)
    return spreadsheet.getSheets()[indexOrName];
  return null;
}

function addNewRow() {
  const row = ['Priya', 'Arora', 43, 'Scrum Master', 'IT', '2024-01-08'];
  const sheet = getSheet(0);
  sheet.appendRow(row);
}
