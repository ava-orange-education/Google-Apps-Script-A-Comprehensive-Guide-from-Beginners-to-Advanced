const PARA =
  'As the sun dipped below the horizon, the city streets began to glow with the soft, amber hue of streetlights. The air carried a gentle breeze, cool and refreshing after the heat of the day. People moved about, lost in their thoughts or conversations, while the sound of distant music mixed with the rhythm of footsteps on the pavement. In the midst of the bustling evening, there was a sense of calm—a moment where time seemed to slow, allowing everyone to savor the peaceful transition from day to night.';

function createDocument() {
  return DocumentApp.create('My Apps Script Document');
}

function appendParagraph(document, p) {
  const tab = document
    .getTabs()[0]
    .asDocumentTab()
    .getBody()
    .appendParagraph(p);
}

function getParagraphText(document, index) {
  return document
    .getTabs()[0]
    .asDocumentTab()
    .getBody()
    .getParagraphs()
    [index].getText();
}

function main() {
  const d = createDocument();
  Logger.log(d.getUrl());
  appendParagraph(d, PARA);
  const appendedParagraph = getParagraphText(d, 1);
  Logger.log(appendedParagraph);
}
