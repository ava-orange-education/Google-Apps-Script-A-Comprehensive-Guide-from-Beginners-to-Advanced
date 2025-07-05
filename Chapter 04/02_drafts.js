function listDrafts() {
  const drafts = GmailApp.getDrafts();
  drafts.forEach(draft => Logger.log(draft.getMessage().getSubject()));
  // You could also call getBody() to see the content
}

function draftSendAndStarEmail() {
  const sentMessage = GmailApp.createDraft(recipient, subject, body) // First, it creates a draft
    .send() // Then, it sends the draft, turning it into a message
    .star(); // Finally, it stars the sent message
}

function updateDrafts() {
  const re = /Created with GmailApp/i;
  const newRecipients = ['john@example.com', 'jane@example.com'];

  // ADDED: carbon copy recipients;
  const carbonCopy = ['alex@example.com', 'murphy@example.com']

  GmailApp.getDrafts().forEach(draft => {
    const message = draft.getMessage();
    const body = message.getBody();
    if (!re.test(body)) return;
    const to = message.getTo();
    const subject = message.getSubject();
    const newSubject = `${subject} renamed by Apps Script`;
    const newTo = `${to},${newRecipients.join(',')}`;

    // ADDED: HTML body
    const htmlBody = '<p><span style="color: red;">Created with</span> <b>GmailApp</b></p>';

    // ADDED: the options parameter
    draft.update(newTo, newSubject, body, {
      htmlBody,
      cc: carbonCopy.join(','),
    });
  });
}

