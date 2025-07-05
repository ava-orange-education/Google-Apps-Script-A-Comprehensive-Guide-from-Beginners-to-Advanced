function manageEventAccess() {
  const calendarName = 'My Apps Script Calendar';
  const calendar = CalendarApp.getCalendarsByName(calendarName)?.[0];
  const event = calendar.getEventsForDay(new Date(2024, 8, 1))[0];

  // Add a guest to the event
  event.addGuest('guest1@example.com');

  // Remove a guest from the event
  event.removeGuest('guest2@example.com');

  // Set guest permissions
  event.setAnyoneCanAddSelf(true);
    .setGuestsCanInviteOthers(true);
    .setGuestsCanModify(false);
    .setGuestsCanSeeGuests(true);

  // Set event visibility
  event.setVisibility(CalendarApp.Visibility.PRIVATE);

  Logger.log('Access settings updated for event: ' + event.getTitle());
}

