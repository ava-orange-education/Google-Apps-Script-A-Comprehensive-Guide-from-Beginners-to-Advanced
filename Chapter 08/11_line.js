function insertLine() {
  const p = SlidesApp.getActivePresentation();
  const lastSlide = p.getSlides()[p.getSlides().length - 1];
  const shapes = lastSlide.getShapes();
  lastSlide
    .insertLine(
      SlidesApp.LineCategory.CURVED,
      shapes[0].getConnectionSites()[0],
      shapes[1].getConnectionSites()[1]
    )
    .setEndArrow(SlidesApp.ArrowStyle.FILL_ARROW);
}
