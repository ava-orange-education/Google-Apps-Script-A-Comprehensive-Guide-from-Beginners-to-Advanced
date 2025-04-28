function myFunction() {
  const a1 = SpreadsheetApp.getActiveSpreadsheet()
    .getActiveSheet()
    .getRange('a1')
    .getValue();
  Logger.log(a1);
}
