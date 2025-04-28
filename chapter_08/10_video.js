function insertVideo() {
  const p = SlidesApp.getActivePresentation();
  const slide = p.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  const videoUrl = 'https://www.youtube.com/watch?v=7vSnesQDLBE';
  const video = slide.insertVideo(videoUrl, 100, 100, 400, 300);
  return video;
}
