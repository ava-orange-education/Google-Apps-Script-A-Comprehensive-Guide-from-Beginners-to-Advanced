function getLastRowAndColumn() {
  const sheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');

  const lastRow = sheet1.getLastRow();
  const lastColumn = sheet1.getLastColumn();

  Logger.log(
    `Sheet "${sheet1.getName()}" contains ${lastRow} rows and ${lastColumn} columns`
  );
}
