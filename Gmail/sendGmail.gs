function mailService() {
  const quota = MailApp.getRemainingDailyQuota();
  Logger.log(quota);
}

function sendMyEmail1() {
  const email = Session.getActiveUser().getEmail();
  Logger.log(email);
  const subject = "Email Prueba";
  const html = "<h1>Hola mundo</h1>";

  const obj = {
    to:email,
    subject:subject,
    htmlBody:html
  };

  MailApp.sendEmail(obj);
}

function sendMyEmail2() {
  const email = Session.getActiveUser().getEmail();
  Logger.log(email);
  const subject = "Email Prueba Attachment";
  const html = "<h1>Hola mundo</h1>";
  const id = "1iakbSk162xirIPIjtE51_wYU8uYNv4_ILKzeA8fjE_0";
  const file = DriveApp.getFileById(id);

  const opts = {
    name:"Mi archivo",
    attachments:[file.getAs(MimeType.PDF)]
  };

  MailApp.sendEmail(email,subject,html,opts);
}

function enviarGmail() {
  const email = "a.barreropu@vitaly.es";
  const subject = "Prueba";
  const body = "Esto es una prueba";
  GmailApp.sendEmail(email,subject,body);
}
