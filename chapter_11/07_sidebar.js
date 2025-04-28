function openSidebar() {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createTemplateFromFile('sidebar').evaluate()
  );
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getUndoneTasks() {
  const ws = SpreadsheetApp.getActive().getSheetByName('Task List');
  const lastRow = ws.getLastRow();
  const tasks = ws.getRange(2, 1, lastRow - 1, 3)
    .getValues()
    .filter(row => !row[0])
    .map(row => row[1]);
  return tasks;
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
    )
    .addSubMenu(
      SpreadsheetApp.getUi()
        .createMenu('Other')
        .addItem('Randomize colors', 'randomizeCellColors')
    )

    .addToUi();
}
