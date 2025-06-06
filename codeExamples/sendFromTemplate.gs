const sheetID = "1W-jj0E9_ftSaaJ_TI06sugNpum3UPWgLXic6wEMNg8o";
const docID = "11BxjRKQIyL3S2EXNSoMrjZbHszVgAOcM-cTSKkklOgU";
const folderID = "1oa24pItFNMQ_43NY_P0DZ66CsTypLFOY";

function sender() {
  const sheet = SpreadsheetApp.openById(sheetID).getSheetByName("Datos");
  
  const temp = DriveApp.getFileById(docID);
  const folder = DriveApp.getFolderById(folderID);  

  const data = sheet.getDataRange().getValues();
  const rows = data.slice(1);

  rows.forEach((row,index) => {
    const file = temp.makeCopy(folder);
    const doc = DocumentApp. openById(file.getId());
    const body = doc.getBody();

    data[0].forEach((heading,i) => {
      const header1 = heading;
      body.replaceText(`${header1}`,row[i]);
    })
    doc.setName(row[0]+row[1]);
    const blob = doc.getAs(MimeType.PDF);
    doc.saveAndClose();

    const email = row[3];
    const subject = row[0]+row[1]+"nuevo archivo";
    const messagebody = `Hola ${row[0]} te hemos enviado un PDF`;
    MailApp.sendEmail({
      to:email,
      subject:subject,
      htmlBody:messagebody,
      attachments: [blob.getAs(MimeType.PDF)]
    });
    Logger.log(row);
  })
}
