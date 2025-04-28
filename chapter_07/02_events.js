function createEventsInNewCalendar() {
  const calendarName = 'My Apps Script Calendar';
  const calendar =
    CalendarApp.getCalendarsByName(calendarName)?.[0] ||
    CalendarApp.createCalendar(calendarName).setColor(
      CalendarApp.Color.RED_ORANGE
    );

  const events = [
    {
      title: 'Event 1',
      startTime: new Date(2024, 8, 1, 11, 0),
      endTime: new Date(2024, 8, 1, 12, 0),
    },
    {
      title: 'Event 2',
      startTime: new Date(2024, 8, 1, 13, 30),
      endTime: new Date(2024, 8, 1, 14, 30),
    },
    {
      title: 'Event 3',
      startTime: new Date(2024, 8, 1, 15, 0),
      endTime: new Date(2024, 8, 1, 17, 15),
    },
  ];

  events.forEach(e => calendar.createEvent(e.title, e.startTime, e.endTime));
}

function getEvents() {
  const calendarName = 'My Apps Script Calendar';
  const calendar = CalendarApp.getCalendarsByName(calendarName)?.[0];
  const date = new Date(2024, 8, 1);
  const events = calendar.getEventsForDay(date);
  Logger.log(
    JSON.stringify(
      events.map(e => ({
        title: e.getTitle(),
        startTime: e.getStartTime(),
        endTime: e.getEndTime(),
      })),
      null,
      2
    )
  );
}

function inviteGuests() {
  const calendarName = 'My Apps Script Calendar';
  const calendar = CalendarApp.getCalendarsByName(calendarName)?.[0];
  const date = new Date(2024, 8, 1);
  const guests = [
    {
      eventName: 'Event 1',
      guestEmails: ['dmitry+test1@...'],
    },
    {
      eventName: 'Event 2',
      guestEmails: ['dmitry+test2@...'],
    },
    {
      eventName: 'Event 3',
      guestEmails: ['dmitry+test3@...'],
    },
  ];
  calendar.getEventsForDay(date).forEach(event => {
    const guestList = guests.find(
      guestList => guestList.eventName === event.getTitle()
    );
    if (undefined === guestList) return;
    guestList.guestEmails.forEach(email => event.addGuest(email));
  });
}
