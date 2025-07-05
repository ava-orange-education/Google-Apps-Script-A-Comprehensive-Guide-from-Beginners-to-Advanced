function updateBudgetSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Budget');
  sheet.getRange('B2:B10').setValues(newExpenses); // Update expenses
  SpreadsheetApp.flush(); // Apply changes immediately

  const totalExpenses = calculateTotalExpenses();
  sheet.getRange('B11').setValue(totalExpenses); // Calculate total after updates
}

function calculateTotalExpenses() {
  // Function to calculate total expenses
  // ...
}
