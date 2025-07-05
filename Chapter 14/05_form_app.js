function createBasicFeedbackForm() {
  const formTitle = 'Feedback Form';
  const form = FormApp.create(formTitle);
  form.addTextItem().setTitle('Your Name');
  Logger.log(`Form '${formTitle}' created with URL: ${form.getPublishedUrl()}`);
}

function logFormResponses() {
  const form = FormApp.getActiveForm();
  const responses = form.getResponses();
  Logger.log(`Number of responses: ${responses.length}`);
  responses.forEach(response => {
    const respondentEmail = response.getRespondentEmail();
    Logger.log(`Respondent Email: ${respondentEmail}`);
    const itemResponses = response.getItemResponses();
    if (itemResponses.length > 0) {
      Logger.log(`Answer to first question: ${itemResponses.getResponse()}`);
    }
  });
}
