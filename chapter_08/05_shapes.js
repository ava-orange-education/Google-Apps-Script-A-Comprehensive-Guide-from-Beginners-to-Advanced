function getElementData() {
  const p = SlidesApp.getActivePresentation();
  const els = p
    .getSelection()
    .getPageElementRange()
    .getPageElements()
    .map(el => `${el.getObjectId()} => ${el.getPageElementType()}`);

  Logger.log(els.join('\n'));
}

function insertSlideWithShape() {
  const p = SlidesApp.getActivePresentation();
  const newSlide = p.appendSlide(SlidesApp.PredefinedLayout.TITLE_ONLY);
  const shape = newSlide
    .insertShape(SlidesApp.ShapeType.CHEVRON)
    .setTop(100)
    .setLeft(20)
    .setWidth(300);

  shape.getText().insertText(0, 'Hello World');
  shape.getFill().setSolidFill(SlidesApp.ThemeColorType.LIGHT1);
}

function insertSlideWithShape() {
  const p = SlidesApp.getActivePresentation();
  const newSlide = p.appendSlide(SlidesApp.PredefinedLayout.TITLE_ONLY);
  const shape = newSlide
    .insertShape(SlidesApp.ShapeType.CHEVRON)
    .setTop(100)
    .setLeft(20)
    .setWidth(300);

  shape.getText().insertText(0, 'Hello World');
  shape.getFill().setSolidFill(SlidesApp.ThemeColorType.LIGHT1);
}
