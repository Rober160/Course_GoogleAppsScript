function addtoDoc() {
  const id = "1iakbSk162xirIPIjtE51_wYU8uYNv4_ILKzeA8fjE_0";
  const doc = DocumentApp.openById(id);
  const body = doc.getBody();
  body.appendParagraph("Hello world");
  body.appendHorizontalRule();
  body.appendPageBreak();
  Logger.log(doc);
}


function createDoc() {
  const myName = "TEST Create";
  const doc = DocumentApp.create(myName)
  const body = doc.getBody();
  Logger.log(doc.getId());
  Logger.log(doc.getUrl());
  Logger.log(doc.getEditors());

  body.appendParagraph("Hello World in " + myName);
  body.appendHorizontalRule();
  body.appendPageBreak();
}
