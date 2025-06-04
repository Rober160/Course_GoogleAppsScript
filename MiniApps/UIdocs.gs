function onOpen() {
  const ui = DocumentApp.getUi();
  ui.createMenu("ADV")
  .addItem("Barra lateral","showSidebar")
  .addItem("Dialogo","showDialog")
  .addToUi();
}

function showSidebar() {
  const html = HtmlService.createTemplateFromFile("side").evaluate();
  html.setTitle("Barra Lateral");
  DocumentApp.getUi().showSidebar(html);
}

function showDialog() {
  const html = HtmlService.createTemplateFromFile("dialog").evaluate();
  html.setWidth(600).setHeight(400);
  DocumentApp.getUi().showModelessDialog(html,"Dialogo");
}
