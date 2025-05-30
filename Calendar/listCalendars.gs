function getCalendar() {
  const cals = CalendarApp.getAllCalendars();
  //Logger.log(cals);

  cals.forEach((cal) => {
    const info = {
      nom : cal.getName(),
      id : cal.getId(),
      color : cal.getColor()
    };

    Logger.log(info);
  })
}
