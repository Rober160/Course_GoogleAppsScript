function getEvents() {
  const cal = CalendarApp.getDefaultCalendar();
  //Logger.log(cal.getName());
  const start = new Date();
  const end = new Date(start.getTime() + (1000*60*60*24*30)); //Un mes
  //Logger.log(start.getTime());
  const events = cal.getEvents(start,end);

  events.forEach((event) => {
    Logger.log(event.getTitle());
  })

}
