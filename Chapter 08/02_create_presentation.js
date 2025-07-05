function createPresentation() {
  const p = SlidesApp.create('Created with Apps Script');
  const url = p.getUrl();
  Logger.log(url);
}
