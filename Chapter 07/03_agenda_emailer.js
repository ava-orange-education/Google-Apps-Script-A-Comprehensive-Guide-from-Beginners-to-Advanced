function sendAgenda() {
  const date = new Date();
  const day = Utilities.formatDate(new Date(), 'GMT', 'yyyy-MM-dd');
  const calendarName = 'My Apps Script Calendar';

  const agenda = new AgendaExtractor(calendarName)
    .getEvents(date)
    .extractFieldsAsTwoDimArray();

  const html = new TemplateMerger('AgendaTemplate')
    .toHtmlTable(agenda)
    .mergeTemplate('TABLE');

  new Emailer(['name@example.com'])
    .setSubject(`Agenda for ${day}`)
    .setContent(html)
    .send();
}
j;
class AgendaExtractor {
  constructor(calendarName = null) {
    this.calendarName = calendarName;
    this.calendar =
      null === calendarName
        ? CalendarApp.getDefaultCalendar()
        : CalendarApp.getCalendarsByName(calendarName)?.[0];

    if (!this.calendar) throw new Error('Could not access calendar');
  }

  getEvents(startTimeOrDay, endTime = null) {
    this.events =
      null !== endTime
        ? this.calendar.getEvents(startTimeOrDay, endTime)
        : this.calendar.getEventsForDay(startTimeOrDay);
    return this;
  }

  extractFieldsAsTwoDimArray() {
    const twoDimAr = this.events.map(event => [
      Utilities.formatDate(event.getStartTime(), 'GMT', 'HH:mm:ss'),
      event.getTitle(),
      event.getGuestList().length,
    ]);
    return [['Start Time', 'Title', 'Number of Guests'], ...twoDimAr];
  }
}

class TemplateMerger {
  constructor(templateName) {
    this.templateName = templateName;
  }

  toHtmlTable(twoDimAr) {
    const thStyle =
      'style="padding: 10px; text-align: left; border-bottom: 1px solid #dddddd; background-color: #f2f2f2;"';
    const tdStyle =
      'style="padding: 10px; text-align: left; border-bottom: 1px solid #dddddd;"';
    const headers = twoDimAr.shift();
    const th =
      '<tr>' +
      headers.map(header => `<th ${thStyle}>${header}</th>`).join('') +
      '</tr>';
    const td = twoDimAr
      .map(
        row =>
          '<tr>' +
          row.map(cell => `<td ${tdStyle}>${cell}</td>`).join('') +
          '</tr>'
      )
      .join('');
    this.table = `<table style="width: 100%; border-collapse: collapse;"><thead>${th}</thead><tbody>${td}</tbody></table>`;
    return this;
  }

  mergeTemplate(mergeField) {
    return HtmlService.createHtmlOutputFromFile(this.templateName)
      .getContent()
      .replace(new RegExp(`{{${mergeField}}}`), this.table);
  }
}

class Emailer {
  constructor(recipients = []) {
    this.recipients = recipients;
  }
  setSubject(subject) {
    this.subject = subject;
    return this;
  }
  setContent(html) {
    this.content = html;
    return this;
  }
  send() {
    GmailApp.sendEmail(this.recipients.join(','), this.subject, '', {
      htmlBody: this.content,
    });
  }
}
