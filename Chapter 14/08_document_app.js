function createMeetingNotesDocument() {
  const documentTitle = 'Meeting Notes';
  const document = DocumentApp.create(documentTitle);
  Logger.log(
    `Document '${documentTitle}' created with ID: ${document.getId()}`
  );
}

function addAttendeesParagraph() {
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody();
  const attendeesText = 'Attendees: [List of Attendees]';
  const paragraph = body.appendParagraph(attendeesText);
  const start = attendeesText.indexOf('Attendees:');
  const end = start + 'Attendees:'.length;
  paragraph.editAsText().setBold(start, end, true);
}
