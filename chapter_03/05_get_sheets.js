function getSheetByName(sheetName) {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
}

function getSheetByIndex(sheetIndex) {
  return SpreadsheetApp.getActiveSpreadsheet().getSheets()[sheetIndex];
}

function getSheet(indexOrName) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if ('string' === typeof indexOrName)
    return spreadsheet.getSheetByName(indexOrName);
  if ('number' === typeof indexOrName)
    return spreadsheet.getSheets()[indexOrName];
  return null;
}

function main() {
  // retrieves sheet named 'Sheet1' or null
  const sheetA = getSheetByName('Sheet1');

  // retrieves sheet with index 0
  const sheetB = getSheetByIndex(0);
  // retrieves sheet named 'Sheet1' or null

  const sheetC = getSheet('Sheet1');
  Logger.log(sheet1.getName());

  // retrieves sheet with index 0 or null
  const sheetD = getSheet(0);
  Logger.log(sheet2.getName());
}
