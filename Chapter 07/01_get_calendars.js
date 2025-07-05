function getAllCalendars() {
  const cals = CalendarApp.getAllCalendars().map(cal => ({
    ID: cal.getId(),
    NAME: cal.getName(),
    TIME_ZONE: cal.getTimeZone(),
  }));
  Logger.log(JSON.stringify(cals, null, 2));
}
