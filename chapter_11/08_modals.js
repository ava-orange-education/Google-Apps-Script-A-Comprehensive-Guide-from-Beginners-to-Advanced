function openDialog() {
  SpreadsheetApp.getUi().showModalDialog(
    HtmlService.createTemplateFromFile('sidebar')
      .evaluate()
      .setWidth(350)
      .setHeight(600),
    'My Apps Script Task List'
  );
}

function onOpen() {
  Logger.log('Someone opened our Google Sheet');

  SpreadsheetApp.getUi()
    .createMenu('My Apps Script Menu')
    .addSubMenu(
      SpreadsheetApp.getUi()
        .createMenu('Task List')
        .addItem('Mark all tasks as done', 'markAllAsDone')
        .addItem('Mark all tasks as undone', 'markAllAsUndone')
    )
    .addSubMenu(
      SpreadsheetApp.getUi()
        .createMenu('HTML Service')
        .addItem('Open sidebar', 'openSidebar')
        .addItem('Open dialog', 'openDialog')
    )
    .addSubMenu(
      SpreadsheetApp.getUi()
        .createMenu('Other')
        .addItem('Randomize colors', 'randomizeCellColors')
    )

    .addToUi();
}
