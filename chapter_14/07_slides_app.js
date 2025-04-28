function createProjectUpdatePresentation() {
  const presentationTitle = 'Project Update';
  const presentation = SlidesApp.create(presentationTitle);
  Logger.log(
    `Presentation '${presentationTitle}' created with ID: ${presentation.getId()}`
  );
}

function addSlideWithTitleAndText() {
  const presentation = SlidesApp.getActivePresentation();
  const slide = presentation.insertSlide(1); // Insert at the second position (index 1)
  const titleShape = slide.insertTextBox('Introduction');
  titleShape.setLeft(100).setTop(50).setWidth(600).setHeight(50); // Example positioning

  const bodyShape = slide.insertTextBox(
    'This presentation provides an update on the project.'
  );
  bodyShape.setLeft(100).setTop(150).setWidth(600).setHeight(100); // Example positioning
}
