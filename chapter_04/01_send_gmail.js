function sendGmail() {
  const recipient = 'hello@example.com'; // Change this to the email you're sending to
  const subject = 'Hello world!';
  const body = 'Sent with GmailApp.';
  GmailApp.sendEmail(recipient, subject, body);
}
