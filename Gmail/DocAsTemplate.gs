function myFunction() {
  //https://docs.google.com/document/d/1GKD-tDdH0kdFa3cH6ZZRamMlG-LMopEAcHKlRf5llCg/export?format=html
  const id = "1GKD-tDdH0kdFa3cH6ZZRamMlG-LMopEAcHKlRf5llCg";
  const url = 'https://docs.google.com/document/d/'+id+'/export?format=html';

  const param = {
    method : "get",
    headers : {
      "Authorization":"Bearer" + ScriptApp.getOAuthToken()
    },
    muteHttpExceptions : true
  };
  const html = UrlFetchApp.fetch(url,param);
  
  const email = Session.getActiveUser().getEmail();
  const subject = "HTML from Doc" + id;
  const prop = {
    htmlBody : html
  };

  Logger.log(html);
  GmailApp.sendEmail(email,subject,"",prop);
}
