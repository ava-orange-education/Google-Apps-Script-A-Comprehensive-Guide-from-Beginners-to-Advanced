function createConditionalFormatting() {
  // Retrieve the active sheet from the current spreadsheet.
  const sheet = SpreadsheetApp.getActive().getActiveSheet();

  // Define the range within the sheet to apply the conditional formatting.
  const range = sheet.getRange('A1:B3');

  // Create a new conditional format rule using the Builder pattern.
  const rule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberBetween(1, 10) // Set the condition: cell value between 1 and 10.
    .setBackground('#FF0000') // Define the background color to set when the condition is met.
    .setRanges([range]) // Apply the rule to the previously defined range.
    .build(); // Finalize the rule creation.

  // Retrieve existing conditional format rules from the sheet.
  let rules = sheet.getConditionalFormatRules();

  // Add the new rule to the array of existing rules.
  rules.push(rule);

  // Update the sheet with the new set of conditional format rules.
  sheet.setConditionalFormatRules(rules);
}
