function sender() {
  const id = "18PHneOY78eBCbxNR0UjB7mMqGZZEa6gucePHNGZODjA";
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheetByName("emails");

  const data = sheet.getDataRange().getValues();
  const personas = data.slice(1);
  //Logger.log(personas);

  personas.forEach((persona) => {
    Logger.log(persona);
    sendMyEmails(persona);
  })
}

function sendMyEmails(persona) {
  const email = persona[5];
  Logger.log(email);

  let htmlBody = HtmlService.createHtmlOutputFromFile("email2").getContent();
  htmlBody = htmlBody.replace(/#TITLE/g, persona[3]);
  htmlBody = htmlBody.replace(/#FIRST/g, persona[1]);
  htmlBody = htmlBody.replace(/#LAST/g, persona[2]);
  htmlBody = htmlBody.replace(/#MESSAGE/g, persona[4]);
  MailApp.sendEmail(email,"Desde la hoja","",{
    htmlBody : htmlBody
  })
}
