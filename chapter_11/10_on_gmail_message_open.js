function onGmailMessageOpen(e) {
  const { messageId, accessToken } = e.gmail;

  GmailApp.setCurrentMessageAccessToken(accessToken);
  const message = GmailApp.getMessageById(messageId);

  const body = message.getPlainBody();
  const translated = LanguageApp.translate(body, '', 'hi');

  const para = CardService.newTextParagraph().setText(`${translated}`);

  const header = messageHeader();
  const section = messageSection(para);
  return messageCard(header, section);
}

function messageHeader() {
  return CardService.newCardHeader()
    .setTitle('Gmail Translator - Message')
    .setSubtitle("Here's the translated message: ");
}

function messageSection(text) {
  return CardService.newCardSection().addWidget(text);
}

function messageCard(header, section) {
  return CardService.newCardBuilder()
    .setHeader(header)
    .addSection(section)
    .build();
}
