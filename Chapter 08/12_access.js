function sharePresentation() {
  const p = SlidesApp.getActivePresentation();
  p.addEditor('user1@example.com');
  p.removeViewer('user2@example.com');
}
