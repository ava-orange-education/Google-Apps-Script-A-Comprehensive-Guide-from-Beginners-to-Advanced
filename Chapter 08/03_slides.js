function listSlides() {
  const p = SlidesApp.getActivePresentation();
  const slides = p.getSlides();
  const list = slides
    .reduce(
      (acc, slide, i) =>
        acc +
        `Index: ${i}, ID: ${slide.getObjectId()}, Page Type: ${slide.getPageType()}\n`,
      ''
    )
    .trim();
  Logger.log(list);
}

function duplicateSlideByIndex() {
  const p = SlidesApp.getActivePresentation();
  p.getSlides()[1].duplicate();
}

function duplicateSlideById() {
  const p = SlidesApp.getActivePresentation();
  p.getSlideById('ge9090756a_1_58').duplicate();
}

function insertSlide() {
  const p = SlidesApp.getActivePresentation();
  p.insertSlide(1);
}

function insertSlideWithLayout() {
  const p = SlidesApp.getActivePresentation();
  p.insertSlide(1, SlidesApp.PredefinedLayout.TITLE_AND_TWO_COLUMNS);
}

function insertSlideWithCustomLayout() {
  const p = SlidesApp.getActivePresentation();
  p.insertSlide(1, p.getLayouts()[12]);
}

function replaceText() {
  const p = SlidesApp.getActivePresentation();
  p.replaceAllText('Powerpoint', 'Google Slides');
}

function listLayouts() {
  const p = SlidesApp.getActivePresentation();
  const layouts = p.getLayouts();
  const list = layouts
    .reduce(
      (acc, layout, i) =>
        acc +
        `Index: ${i}, ID: ${layout.getObjectId()}, Page Type: ${layout.getPageType()}\n`,
      ''
    )
    .trim();
  Logger.log(list);
}
