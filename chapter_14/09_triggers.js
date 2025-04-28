function createFormSubmitTrigger() {
  const form = FormApp.getActiveForm();
  ScriptApp.newTrigger('processFormSubmission') // Function to run on submit
    .forForm(form)
    .onFormSubmit()
    .create();
  Logger.log('Form submit trigger created for function processFormSubmission');
}

// You would also need to define the function 'processFormSubmission'
function processFormSubmission(e) {
  // Your code to process the form submission data (in the 'e' event object)
  Logger.log('Form submitted!');
}
