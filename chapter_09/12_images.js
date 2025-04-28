function addPositionedImage() {
  const body = DocumentApp.getActiveDocument()
    .getActiveTab()
    .asDocumentTab()
    .getBody();

  const text =
    "Sometimes it's the first moment of the day that catches you off guard. That's what Wendy was thinking. She opened her window to see fire engines screeching down the street. While this wasn't something completely unheard of, it also wasn't normal. It was a sure sign of what was going to happen that day. She could feel it in her bones and it wasn't the way she wanted the day to begin.";
  const para = body.appendParagraph(text);

  const image = DriveApp.getFileById(
    '1KXSQvFUmruwyiHJbKf00_gfYXNm23WsQ'
  ).getBlob();

  para
    .addPositionedImage(image)
    .setWidth(50)
    .setHeight(75)
    .setLeftOffset(50)
    .setTopOffset(20);
}
