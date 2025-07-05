function getMetaData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  j;
  Logger.log(sheet.getName()); // prints the old name
  sheet.rename('New Sheet Name');
  Logger.log(sheet.getName()); // prints the new 'New Sheet Name' name

  const numSheets = sheet.getNumSheets();
  Logger.log(`This spreadsheet contains ${numSheets} sheets`);

  const locale = sheet.getSpreadsheetLocale();
  Logger.log(`This document's locale is ${locale}`);
  // prints: "This document's locale is hi_IN"

  const timeZone = sheet.getSpreadsheetTimeZone();
  Logger.log(`This document's time zone is ${timeZone}`);
  // prints: "This document's time zone is Asia/Calcutta"

  const url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  Logger.log(`The spreadsheet URL is: ${url}`);
}
