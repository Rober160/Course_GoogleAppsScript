function test1() {
  const user = Session.getActiveUser();
  Logger.log(user);
}

function test2() {
  const val1 = "Hola";
  const val2 = "Mundo";
  Logger.log("Este es el mensaje %s %s", val1,val2);
}

function test3(){
  const val1 = 'Hola';
  const val2 = 'Mundo';
  Logger.log('Este es el mensaje %s %s',val1,val2);
  const val = Logger.getLog();
  const doc = DocumentApp.create('my Log');
  const body = doc.getBody();
  body.appendParagraph(val);
}
 
function test4(){
  const userEmail = Session.getActiveUser().getEmail();
  Logger.log(userEmail);
  const val1 = 'Hola';
  const val2 = 'Mundo';
  Logger.log('Este es el mensaje %s %s',val1,val2);
  const val = Logger.getLog();
  MailApp.sendEmail(userEmail,'my log',val);
}
