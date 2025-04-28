function getResponses() {
  const form = FormApp.getActiveForm();

  // Loop through all the responses
  form.getResponses().forEach(response => {
    const respondent = response.getRespondentEmail();
    Logger.log(`We have a response from ${respondent}`);

    // Loop through all the response items
    response.getItemResponses().forEach(item => {
      // Extract response data
      const title = item.getItem().getTitle();
      const response = item.getResponse();
      Logger.log(`* They answered ${response} to ${title}`);
    });
  });
}

function submitProgrammaticResponse() {
  const form = FormApp.getActiveForm();

  // Create a form response
  const programmaticFormResponse = form.createResponse();

  // Get an item and create an item response
  const item = form.getItems()[0];
  const programmaticItemResponse = item.asTextItem().createResponse('Sunil');

  // Inject the item response into the form response and submit it
  programmaticFormResponse.withItemResponse(programmaticItemResponse).submit();
}
