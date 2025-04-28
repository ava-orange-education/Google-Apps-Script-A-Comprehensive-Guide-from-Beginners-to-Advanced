function configureRespondentAccess() {
  const form = FormApp.getActiveForm();

  // Set form to accept responses
  form.setAcceptingResponses(true);

  // Allow respondents to edit their responses after submission
  form.setAllowResponseEdits(true);

  // Enable email collection from respondents
  form.setCollectEmail(true);

  // Require respondents to be logged into a Google account
  form.setRequireLogin(true);
}
