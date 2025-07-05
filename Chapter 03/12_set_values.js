// A helper function that calculates the number of days between two dates
function getDifferenceInDays(date1, date2) {
  date1 = date1 instanceof Date ? date1 : new Date(date1);
  date2 = date2 instanceof Date ? date2 : new Date(date2);

  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}

// Calculates number of days employees worked in the company
// and inserts them into the spreadsheet
function insertEmploymentDays() {
  // Initiate a new array that we will insert into the sheet
  // It will be a 2D array with one column and multiple rows
  const daysEmployed = [['Days Employed']];

  // Extract last row and column and the current values from the sheet
  const sheet = getSheet(0);
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  const range = sheet.getRange(1, 1, lastRow, lastColumn);
  const values = range.getValues();

  // Extract the current date
  const now = new Date();

  // The column index where the employment date is stored
  const employmentDateIndex = 5;

  // Iterate over the values, starting with index 1 as we want to skip the headers
  for (let i = 1; i < values.length; i++) {
    // Extract the employment date for the current row
    const employmentDate = values[i][employmentDateIndex];

    // Calculate the number of days worked in the company using a helper function
    const daysAtWork = getDifferenceInDays(employmentDate, now);

    // Push the calculated value into daysEmployed as an array with a single value
    // Representing a single column
    daysEmployed.push([daysAtWork]);
  }

  // Insert the values into a new column (lastColumn + 1)
  // The length property helps us make sure that the range is the same size
  // as the array we are inserting
  sheet
    .getRange(1, lastColumn + 1, daysEmployed.length, daysEmployed[0].length)
    .setValues(daysEmployed);
}
