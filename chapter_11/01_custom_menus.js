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
        .createMenu('Other')
        .addItem('Randomize colors', 'randomizeCellColors')
    )
    .addToUi();
}

function markAllTasks_(asDone = true) {
  const ws = SpreadsheetApp.getActive().getSheetByName('Task List');
  const lastRow = ws.getLastRow();
  const date = new Date().toISOString();
  const checkboxes = new Array(lastRow - 1).fill(asDone ? ['TRUE'] : ['FALSE']);
  ws.getRange(2, 1, checkboxes.length, checkboxes[0].length).setValues(
    checkboxes
  );
  const datesRange = ws.getRange(2, 3, lastRow - 1, 1);
  const datesValues = asDone
    ? datesRange.getValues().map(row => ('' === row[0] ? [date] : row))
    : new Array(lastRow - 1).fill(['']);

  datesRange.setValues(datesValues);
}

function markAllAsDone() {
  markAllTasks_(true);
}

function markAllAsUndone() {
  markAllTasks_(false);
}

