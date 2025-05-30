function getSomeCals() {
  const cals1 = CalendarApp.getAllOwnedCalendars();
  cals1.forEach((cal) => {
    Logger.log(cal.getName());
  })

  const cals2 = CalendarApp.getAllCalendars();
  cals2.forEach((cal) => {
    Logger.log(cal.getName());
  })

  Logger.log("****NAME****");
  const cals3 = CalendarApp.getCalendarsByName("Test");
  cals3.forEach((cal) => {
    Logger.log(cal.getName());
  })  

  const calID = CalendarApp.getDefaultCalendar().getId();
  Logger.log(calID);

  const id = "r.negretega@vitaly.es";
  const cal = CalendarApp.getCalendarById(id);
  Logger.log(id);
}
