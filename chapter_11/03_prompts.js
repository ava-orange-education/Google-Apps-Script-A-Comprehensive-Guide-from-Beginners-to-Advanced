function prompt(title, message) {
  const ui = SpreadsheetApp.getUi();
  const buttonSet = ui.ButtonSet.YES_NO_CANCEL;
  const userResponse = ui.prompt(title, message, buttonSet);
  if (userResponse.getSelectedButton() === ui.Button.YES)
    return userResponse.getResponseText();
  return null;
}

function addTask() {
  const ws = SpreadsheetApp.getActive().getSheetByName('Task List');
  const lastRow = ws.getLastRow();
  const userResponse = prompt('New task', 'Enter the task name:');
  if (null === userResponse) return;
  ws.appendRow(['', userResponse, '']);
  ws.getRange(lastRow + 1, 1).insertCheckboxes();
}
