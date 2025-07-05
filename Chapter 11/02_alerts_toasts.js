function alert(title, message) {
  const ui = SpreadsheetApp.getUi();
  const buttonSet = ui.ButtonSet.YES_NO_CANCEL;
  const userResponse = ui.alert(title, message, buttonSet);
  return userResponse;
}

function toast(title, message) {
  SpreadsheetApp.getActive().toast(message, title);
}

function onEdit(e) {
  const { range, value, oldValue } = e;
  const ws = range.getSheet();
  const sheetName = ws.getName();
  if ('Task List' !== sheetName || 1 !== range.columnStart) return;
  const newValue = 'TRUE' === value ? new Date().toISOString() : '';
  const userResponse = alert('Are you sure?', `You are about to update a task`);
  const ui = SpreadsheetApp.getUi();
  if (ui.Button.YES === userResponse) {
    toast('Task List', 'The task has been updated');
    return ws.getRange(range.rowStart, 3).setValue(newValue);
  }
  toast('Task List', 'The task has been reverted');
  return ws.getRange(range.rowStart, 1).setValue(oldValue);
}
