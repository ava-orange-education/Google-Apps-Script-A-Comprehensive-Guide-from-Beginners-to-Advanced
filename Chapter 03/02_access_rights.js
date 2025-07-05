function manageAccessRights() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const owner = sheet.getOwner(); // returns the User class
  Logger.log('This spreadsheet is owned by ' + owner.getEmail());

  sheet.addViewer('john.doe@company.com').addEditor('jane.doe@company.com');
}
