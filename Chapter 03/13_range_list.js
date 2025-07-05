function highlightSpecificTasks() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const ranges = ['A2:F2', 'A5:F5', 'A8:F8', 'A11:F11']; // Non-contiguous rows

  const rangeList = sheet.getRangeList(ranges);
  rangeList.setBackground('yellow'); // Highlights specified tasks
}
