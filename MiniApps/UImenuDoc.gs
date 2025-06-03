function onOpen(e) {
  const ui = DocumentApp.getUi();
  ui.createAddonMenu()
  .addItem("Fun 1", "fun1")
  .addItem("Fun 2", "fun2")
  .addToUi();
  
  /*
  const doc = DocumentApp.getActiveDocument();
  const newContent = String(new Date());
  const eventDetails = JSON.stringify(e);
  doc.getBody().appendParagraph(eventDetails);
  */
  
}

function fun1() {
  const doc = DocumentApp.getActiveDocument().getBody();
  const txt = doc.editAsText();
  txt.appendText("New Text \n New Line");
}

function fun2() {
  const doc = DocumentApp.getActiveDocument().getBody();
  const parag = doc.appendParagraph("New Paragraph \n");
}
