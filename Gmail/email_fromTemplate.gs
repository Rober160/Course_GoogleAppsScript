function emailTemplateSender() {
  const html = "<h1>Hola mundo</h1>";
  const htmlBody = HtmlService.createHtmlOutputFromFile("email");
  Logger.log(htmlBody.getContent());

  const email = Session.getActiveUser().getEmail();
  const subject = "HTML Template";
  const prop = {
    htmlBody : htmlBody.getContent()
  };

  GmailApp.sendEmail(email,subject,"",prop);
}
