function onGmailHomepage() {
  const introText = CardService.newTextParagraph().setText(
    'Select an email to see translation options or use the toolbar above to start translating.'
  );

  const footerText = CardService.newTextParagraph().setText(
    'Powered by Google Translate API'
  );

  const header = homepageHeader();
  const section = homepageSection(introText, footerText);
  return homepageCard(header, section);
}

function homepageHeader() {
  return CardService.newCardHeader()
    .setTitle('Gmail Translator')
    .setSubtitle('Translate your emails effortlessly');
}

function homepageSection(...widgets) {
  const section = CardService.newCardSection();
  widgets.forEach(widget => section.addWidget(widget));
  return section;
}

function homepageCard(header, section) {
  return CardService.newCardBuilder()
    .setHeader(header)
    .addSection(section)
    .build();
}
