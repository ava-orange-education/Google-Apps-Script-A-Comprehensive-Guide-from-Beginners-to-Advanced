function getPresentation() {
  const p1 = SlidesApp.getActivePresentation();
  // TODO insert your presentation ID
  const p2 = SlidesApp.openById('{{YOUR_PRESENTATION_ID}}');
  Logger.log(p1.getName());
  Logger.log(p2.getName());
}
