function makeCal() {
  const cal = CalendarApp.createCalendar("Apps Script test");
  Logger.log(cal.getId());
  cal.setColor("#ff0000");
  cal.setDescription("Test de Google Apps Script");
  cal.setName("Updated Apps Script test");
}

function updateCal() {
  const id = "c_b1351e7f7dd9ead3d63a173795cd098ab2d39067d6aee0ffaac2d5c6128388b0@group.calendar.google.com";
  const cal = CalendarApp.getCalendarById(id);
  Logger.log(cal.getDescription());
  Logger.log(cal.getColor());
  cal.setColor("#00ff00");
}

function delCal() {
  const id = "c_b1351e7f7dd9ead3d63a173795cd098ab2d39067d6aee0ffaac2d5c6128388b0@group.calendar.google.com";
  const cal = CalendarApp.getCalendarById(id);
  Logger.log(cal.getColor());
  cal.deleteCalendar();
}
