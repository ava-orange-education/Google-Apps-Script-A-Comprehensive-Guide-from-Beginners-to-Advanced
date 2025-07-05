function setUpForm() {
  // This is a bound script, so we can get the active form
  const form = FormApp.getActiveForm();

  // Set form's metadata
  form
    .setTitle('Test Form')
    .setDescription('This form is managed by Apps Script')
    .setCollectEmail(true);

  // Remove all current items
  form.getItems().forEach(item => form.deleteItem(item.getIndex()));

  // Add a new name item
  form
    .addTextItem()
    .setRequired(true)
    .setTitle('Name')
    .setHelpText('Your first name');

  // The published URL allows submitting responses
  Logger.log(`Published URL: ${form.getPublishedUrl()}`);

  return form;
}
