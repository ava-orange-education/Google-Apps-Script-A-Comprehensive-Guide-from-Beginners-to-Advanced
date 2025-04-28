function appendParagraph() {
  const paragraph = body.appendParagraph('Lorem ipsum');
}

function insertParagraph() {
  body.insertParagraph(0, 'This is the first paragraph.');
}

function insertHeading() {
  body
    .insertParagraph(0, 'Document Title')
    .setHeading(DocumentApp.ParagraphHeading.HEADING1);
}

function appendStyledParagraph() {
  const para = body.appendParagraph('Styled paragraph');
  para.setFontSize(14).setBold(true).setForegroundColor('#0000FF'); // Blue, bold text
}

function editParagraphStyle() {
  const para = body.appendParagraph('Styled Text');
  const text = para.editAsText();
  text.setForegroundColor(0, text.getText().length - 1, '#FF0000'); // Red text
}
