function readEmails() {
  const threads = GmailApp.getInboxThreads();
  let threadsRead = 0;
  const maxThreads = 5;

  for (let i = 0; i < threads.length; i++) {
    // For the sake of this example, we won't dive into more than 5 threads
    if (threadsRead >= maxThreads) break;

    // Gets the thread and message count
    const thread = threads[i];
    const numMessages = thread.getMessageCount();

    // For the sake of this example, let's skip threads that are too small or too big
    if (numMessages < 3 || numMessages > 5) continue;

    // Gets the subject of the first message
    const subject = thread.getFirstMessageSubject();
    Logger.log(`Found thread "${subject}" with ${numMessages} messages`);

    // Loops through the messages of the thread
    // and prints some basic information
    const messages = thread.getMessages();
    messages.forEach((message, i) =>
      Logger.log(`Message ${i + 1} ${message.getFrom()} to ${message.getTo()}`)
    );
    threadsRead++;
  }
}

function findEmails() {
  const searchQuery = 'in:inbox from:tldr is:unread';
  const threads = GmailApp.search(searchQuery);

  threads.forEach(thread => {
    const subject = thread.getFirstMessageSubject();
    Logger.log(subject);
  });
}
