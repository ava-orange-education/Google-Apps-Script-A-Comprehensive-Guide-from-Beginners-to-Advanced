function main() {
  const form = resetAsEesForm(true);
  addSections([SatisfactionSection, EngagementSection], form, {
    addPageBreaks: true,
  });
}

function addSections(callbacks, form = FormApp.getActiveForm(), options = {}) {
  if (!Array.isArray(callbacks)) throw 'Array of callbacks was not provided';
  callbacks.forEach((cb, i) => {
    cb instanceof Function && cb(form);
    if (options.addPageBreaks && i < callbacks.length - 1)
      form.addPageBreakItem().setTitle(`Page ${i + 2} of ${callbacks.length}`);
  });
}

function resetAsEesForm(hardReset = false) {
  // This is a bound script, so we can get the active form
  const form = FormApp.getActiveForm();

  // Conditionally delete all existing responses
  if (hardReset) form.deleteAllResponses();

  // Set form's metadata
  form
    .setTitle('Employee Engagement Survey')
    .setDescription('This form is managed by Apps Script')
    .setCollectEmail(false); // The form is anonymous, so we will not be collecting email data

  // Remove all current items
  form.getItems().forEach(item => form.deleteItem(item.getIndex()));

  return form;
}

function SatisfactionSection(form = FormApp.getActiveForm()) {
  form
    .addSectionHeaderItem()
    .setTitle('Overall Satisfaction and Work Environment')
    .setHelpText(
      'This section aims to understand your overall satisfaction with the company and gather feedback on your work environment.'
    );

  form
    .addScaleItem()
    .setTitle(
      'On a scale of 1 to 5, how satisfied are you with your overall experience working at our company?'
    )
    .setHelpText('Scale: 1 - Very Dissatisfied to 5 - Very Satisfied')
    .setBounds(1, 5)
    .setRequired(true);

  const env = form
    .addMultipleChoiceItem()
    .setTitle('How would you rate your work environment?')
    .setHelpText('Include physical workspace, tools, and resources')
    .setRequired(true);

  env.setChoices(
    ['Excellent', 'Good', 'Average', 'Poor', 'Very Poor'].map(choice =>
      env.createChoice(choice)
    )
  );

  form
    .addTextItem()
    .setTitle(
      'What improvements, if any, would you suggest for your work environment?'
    )
    .setHelpText('Free text')
    .setRequired(false);
}

function EngagementSection(form = FormApp.getActiveForm()) {
  form
    .addSectionHeaderItem()
    .setTitle('Engagement and Company Culture')
    .setHelpText(
      'This section evaluates your engagement with the company and your perspective on the overall company culture.'
    );

  form
    .addScaleItem()
    .setBounds(1, 5)
    .setTitle('How engaged do you feel with your work and the company?')
    .setHelpText('Scale: 1 - Not Engaged at All to 5 - Highly Engaged')
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle('Would you recommend our company as a great place to work?')
    .setChoiceValues(['Yes', 'No'])
    .setRequired(true);

  form
    .addTextItem()
    .setTitle('How engaged do you feel with your work and the company?')
    .setHelpText('Minimum length: 100 characters')
    .setValidation(
      FormApp.createTextValidation()
        .requireTextLengthGreaterThanOrEqualTo(100)
        .build()
    )
    .setRequired(true);
}

function getScores() {
  const form = FormApp.getActiveForm();

  // Loop through the form responses
  const responses = form.getResponses().map(response => {
    // For every form response extract the item responses
    const irs = response.getItemResponses();

    // For every item response only extract satisfaction and engagement scores
    return irs.reduce((acc, ir) => {
      // Exit quickly if item is not of type Scale
      if (ir.getItem().getType() !== FormApp.ItemType.SCALE) return acc;

      // Extract item's title and answer
      const title = ir.getItem().getTitle();
      const answer = ir.getResponse();

      // Add the corresponding values to the accumulator object and return it
      if (/satisfied/.test(title)) acc.satisfaction = answer;
      if (/engaged/.test(title)) acc.engagement = answer;
      return acc;
    }, {});
  });

  // Calculate the averages by first calculating the sums of both indicators
  // Then dividing the sums by the number of responses
  const averages = responses.reduce(
    (sum, resp) => {
      sum.satisfaction += +resp.satisfaction;
      sum.engagement += +resp.engagement;
      return sum;
    },
    { satisfaction: 0, engagement: 0 }
  );
  averages.satisfaction /= responses.length;
  averages.engagement /= responses.length;

  console.log(averages);
  return averages;
}
