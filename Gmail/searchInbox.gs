function search() {
  const results = GmailApp.search("has:attachment"); 
  //Logger.log(results);
  let counter = 0;
  results.forEach((hilo) => {
    //Logger.log(hilo.getFirstMessageSubject());
    const messages = hilo. getMessages();

    messages.forEach((message) => {
      const attachments = message.getAttachments()
      //Logger.log(attachments);

      attachments.forEach((data) => {
        //Logger.log(data.getName());
        
        if(data.getContentType() == "application/pdf") {
          const pdf = data.getAs("application/pdf");
          Logger.log(data.getName());
          counter++;
          const newFile = DriveApp.createFile(pdf);
          newFile.setName("New PDF" +counter+ ".pdf")
        }
      })
    })
  })
}
