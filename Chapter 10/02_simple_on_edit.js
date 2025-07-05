function onEdit(e) {
  const { range, value } = e;
  const ws = range.getSheet();
  const sheetName = ws.getName();
  if ('Task List' !== sheetName || 1 !== range.columnStart) return;
  const newValue = 'TRUE' === value ? new Date().toISOString() : '';
  ws.getRange(range.rowStart, 3).setValue(newValue);
}
