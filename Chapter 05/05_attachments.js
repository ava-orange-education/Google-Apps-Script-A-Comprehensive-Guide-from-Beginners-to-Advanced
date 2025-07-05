function createGmailDraftWithAttachment() {
  // Get the file and convert it to a PDF blob with getAs()
  const fileId = '1490NJkgdJWkM7Lits2FLztKB24bdxxFqEf5xZs69lQI';
  const file = DriveApp.getFileById(fileId); // a Google Doc ID
  const blob = file.getAs('application/pdf');

  // Create a draft email with the blob as attachment
  const draft = GmailApp.createDraft(
    'john@example.com',
    'An email with attachment',
    'Check the attachment',
    {
      attachments: [blob],
    }
  );
}
