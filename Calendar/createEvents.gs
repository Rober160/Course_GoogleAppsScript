function makeEvents() {
  const cal = CalendarApp.getDefaultCalendar();
  const today = new Date();
  const futureDate = new Date(today.getTime() + (1000*60*60*24*7));
  const event1 = cal.createAllDayEvent("Test Apps Script", futureDate);
  event1.setColor("6");
}
