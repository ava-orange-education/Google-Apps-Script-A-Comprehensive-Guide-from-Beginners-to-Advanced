function importTheme() {
  const p = SlidesApp.getActivePresentation();
  const templateSlide = SlidesApp.openById('<PRESENTATION_ID>').getSlides()[0];
  const importedSlide = p.appendSlide(templateSlide);
  p.getMasters()[0].remove();
  importedSlide.remove();
}
