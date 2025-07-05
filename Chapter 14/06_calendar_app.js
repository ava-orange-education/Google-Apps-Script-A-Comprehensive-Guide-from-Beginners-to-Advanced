function createTeamMeetingEvent() {
  const calendar = CalendarApp.getDefaultCalendar();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(10, 0, 0, 0); // Set to 10:00 AM

  const endTime = new Date(tomorrow);
  endTime.setHours(endTime.getHours() + 1); // Set end time to 11:00 AM

  const eventTitle = 'Meeting with Team';
  const event = calendar.createEvent(eventTitle, tomorrow, endTime);
  Logger.log(`Event '${eventTitle}' created with ID: ${event.getId()}`);
}

function createTeamMeetingWithGuest(guestEmail) {
  const calendar = CalendarApp.getDefaultCalendar();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(10, 0, 0, 0);

  const endTime = new Date(tomorrow);
  endTime.setHours(endTime.getHours() + 1);

  const eventTitle = 'Meeting with Team';
  const event = calendar.createEvent(eventTitle, tomorrow, endTime, {
    guests: guestEmail,
  });
  Logger.log(
    `Event '${eventTitle}' created with guest ${guestEmail}, ID: ${event.getId()}`
  );
}
