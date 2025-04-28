function copyData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sourceRange = ss.getActiveSheet().getRange('A1:B5');
  const values = sourceRange.getValues();
  const destinationRange = ss.getActiveSheet().getRange('D1:E5');
  destinationRange.setValues(values);
}

function copyDataAndFormat() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getActiveSheet();
  const sourceRange = ws.getRange('A1:B5');
  const values = sourceRange.getValues();
  const destinationRange = ws.getRange('D1:E5');
  destinationRange.setValues(values);
  const headerRange = ws.getRange('D1:D5');
  headerRange.setFontWeight('bold');
}

function createAndDeleteSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const newSheet = ss.insertSheet('Summary');
  ss.deleteSheet(newSheet);
  Logger.log("Created and deleted a sheet named 'Summary'.");
}
