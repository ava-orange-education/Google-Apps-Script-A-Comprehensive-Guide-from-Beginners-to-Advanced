function findEmails() {
  const searchQuery = 'in:inbox from:tldr is:unread';
  const threads = GmailApp.search(searchQuery);
  threads.forEach(thread => {
    const subject = thread.getFirstMessageSubject();
    Logger.log(subject);
    // Adds a label
    thread.addLabel(getLabel('TLDR'));
  });
}

// Retrieves a label if it exists, otherwise creates a new one
function getLabel(text) {
  const label = GmailApp.getUserLabelByName(text);
  if (label) return label;
  return GmailApp.createLabel(text);
}

