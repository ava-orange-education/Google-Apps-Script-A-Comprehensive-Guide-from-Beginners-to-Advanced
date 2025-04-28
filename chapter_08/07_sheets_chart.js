function insertChart() {
  const SS_ID = '16yASPFV6lS9tm14-7M2x_q3r6HvG3xCmoDafgrZjNfM';
  const chart = SpreadsheetApp.openById(SS_ID)
    .getSheetByName('Stats')
    .getCharts()[0];

  const p = SlidesApp.getActivePresentation();
  const newSlide = p.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  newSlide
    .insertSheetsChart(chart)
    .alignOnPage(SlidesApp.AlignmentPosition.CENTER);
}

function getChartFromSlides() {
  const p = SlidesApp.getActivePresentation();
  const slides = p.getSlides();
  const lastSlide = slides[slides.length - 1];
  const chart = lastSlide.getSheetsCharts()[0];
  Logger.log(chart.getSpreadsheetId());
  Logger.log(chart.getChartId());
}

function refreshChart() {
  const p = SlidesApp.getActivePresentation();
  const slides = p.getSlides();
  const lastSlide = slides[slides.length - 1];
  const chart = lastSlide.getSheetsCharts()[0];
  chart.refresh();
}
