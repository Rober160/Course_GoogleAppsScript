function makeaSheet() {
  const ss = SpreadsheetApp.create("New Calendars");
  const sheet = ss.insertSheet();
  sheet.setName("cals");
  sheet.appendRow(["Start Time", "End Time","ID","Title","Description"]);

  const cal = CalendarApp.getDefaultCalendar();
  const today = new Date();
  const day = 1000*60*60*24;
  const end = new Date(today.getTime() + (day*30));
  const events = cal.getEvents(today,end);
  Logger.log(events.length);
  events.forEach((event) => {
    const array = [];
    array.push(event.getStartTime());
    array.push(event.getEndTime());
    array.push(event.getId());
    array.push(event.getTitle());
    array.push(event.getDescription());
    sheet.appendRow(array);
  })
}

function addRandomCals() {
  const cal = CalendarApp.getDefaultCalendar();
  
  const today = new Date();
  const day = 1000*60*60*24;
  for (let i=0; i<25; i++) {
    const randomDay = Math.floor(Math.random()*30);
    const start = new Date(today.getTime() + (randomDay*day));
    const title = "Mi Evento#"+i;
    const event = cal.createAllDayEvent(title,start);
  }
}
