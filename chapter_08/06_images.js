function getShapesAndImages() {
  const p = SlidesApp.getActivePresentation();
  const slide = p.getSlides()[3];
  const els = slide.getPageElements().map(el => {
    const type = el.getPageElementType().toString();
    if ('SHAPE' === type)
      return `${el.getObjectId()} | ${el.getPageElementType()} | ${el.asShape().getText().asString().trim() || '<NO TEXT>'
        }`;
    if ('IMAGE' === type)
      return `${el.getObjectId()} | ${el.getPageElementType()} | ${el.asImage().getDescription() || '<NO URL>'
        }`;
  });
  Logger.log(els.join('\n'));
}

function insertImageFromUrl() {
  const p = SlidesApp.getActivePresentation();
  const newSlide = p.appendSlide(SlidesApp.PredefinedLayout.TITLE_ONLY);
  newSlide
    .insertImage('https://picsum.photos/400/300')
    .alignOnPage(SlidesApp.AlignmentPosition.CENTER)
    .getBorder()
    .setWeight(2)
    .getLineFill()
    .setSolidFill(0, 200, 150);
}

function insertImageFromGoogleDrive() {
  const p = SlidesApp.getActivePresentation();
  const newSlide = p.appendSlide(SlidesApp.PredefinedLayout.TITLE_ONLY);
  const blob = DriveApp.getFileById(
    '1KXSQvFUmruwyiHJbKf00_gfYXNm23WsQ'
  ).getBlob();
  newSlide
    .insertImage(blob)
    .alignOnPage(SlidesApp.AlignmentPosition.CENTER)
    .getBorder()
    .setWeight(2)
    .getLineFill()
    .setSolidFill(0, 200, 150);
}

function listImageUrls() {
  const p = SlidesApp.getActivePresentation();
  const slides = p.getSlides();
  const len = slides.length;
  const images = slides
    .slice(len - 2, len)
    .map((slide, i) =>
      slide.getImages().map(image => ({
        contentUrl: image.getContentUrl() || '<NO CONTENT URL>',
        sourceUrl: image.getSourceUrl() || '<NO SOURCE URL>',
      }))
    )
    .flat();
  console.log(JSON.stringify(images, null, 2));
}

function replaceImage() {
  const p = SlidesApp.getActivePresentation();
  const slides = p.getSlides();
  const lastSlide = slides[slides.length - 1];
  lastSlide
    .getImages()[0]
    .replace(
      DriveApp.getFileById('13R-lxLWqLq0VZ8TEs_5RnAFSIYhRl3Or').getBlob()
    );
}
