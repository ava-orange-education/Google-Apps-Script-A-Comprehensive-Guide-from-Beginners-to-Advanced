function doGet() {
  const ssid = 'ENTER GOOGLE SHEET ID HERE';
  const a1 = SpreadsheetApp.openById(ssid)
    .getSheets()[0]
    .getRange('a1')
    .getValue();
  return HtmlService.createHtmlOutput('<h1>' + a1 + '</h1>');
}
