function addGuests() {
  const cal = CalendarApp.getDefaultCalendar();
  const today = new Date();
  const myDay = 1000*60*60*24*3;
  const start = new Date(today.getTime() + myDay + (1000*60*60*24*5));
  const end = new Date(today.getTime() + myDay + (1000*60*60*24*8));
  const event = cal.createEvent("TEST my Event",start,end);
  event.addGuest("robertonegrete421@gmail.com");
}

function myGuests() {
  const cal = CalendarApp.getDefaultCalendar();
  const today = new Date();
  const myDay = 1000*60*60*24*3;
  const start = new Date(today.getTime() + myDay + (1000*60*60*24*5));
  const events = cal.getEventsForDay(start);

  events.forEach((event) => {
    let guests = event.getGuestList();
    Logger.log(guests);

    guests.forEach((guest) => {
      let person = {
        email : guest.getEmail(),
        status : guest.getStatus(),
        gstatus : guest.getGuestStatus(),
        name : guest.getName()
      }
      Logger.log(person);
    })

  })

}
