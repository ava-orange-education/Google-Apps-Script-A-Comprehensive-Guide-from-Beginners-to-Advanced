function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Automation Tools')
    .addItem('Run Script', 'myAutomatedFunction')
    .addToUi();
}

function myAutomatedFunction() {
  const ui = SpreadsheetApp.getUi();
  ui.alert('Your automated function has been executed.');
  Logger.log('myAutomatedFunction executed.');
}

function showInformationDialog() {
  const html = HtmlService.createHtmlOutputFromFile('dialog')
    .setWidth(300)
    .setHeight(150);
  SpreadsheetApp.getUi().showModalDialog(html, 'Information');
}
