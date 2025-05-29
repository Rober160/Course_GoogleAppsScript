function onOpen() {
  const ui = DocumentApp.getUi();
  ui.createMenu("Fun")
  .addItem("Lorem Ipsum", "adder")
  .addToUi();
}

function adder() {
  const cursor = DocumentApp.getActiveDocument().getCursor();
  const id = "1vDbsHNOVaGijXZqCvoZ3T6C8zfKMEj-OghwSLGADfRY";
  const sourceContent = DocumentApp.openById(id).getBody().getText();

  if(cursor) {
    const val = cursor.insertText(sourceContent);
    if(val) {
      val.setBackgroundColor("#ff0000");
      val.setBold(true);
    }
  }
}

