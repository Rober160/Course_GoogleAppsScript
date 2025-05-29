function onOpen() {
  const ui = DocumentApp.getUi();
  ui.createMenu("adv")
  .addItem("html Modal", "Modal1")
  .addItem("file Modal", "Modal2")
  .addItem("file Sidebar", "Side1")
  .addItem("html Sidebar", "Side2")
  .addToUi();
}


function Side1() {
  const html = HtmlService.createHtmlOutputFromFile("popup")
  .setWidth(800)
  .setHeight(400);
  DocumentApp.getUi().showSidebar(html);
}

function side2(){
  const output = "<h1>Hola mundo</h1>"
  const html = HtmlService.createHtmlOutput(output)
  .setWidth(600)
  .setHeight(500);
  DocumentApp.getUi().showSidebar(html);
}

function Modal1() {
  const output = "<h1>Hola Mundo</h1>";
  const html = HtmlService.createHtmlOutput(output)
  .setWidth(600)
  .setHeight(500)
  DocumentApp.getUi().showModalDialog(html, "Title Popup");
}

function Modal2() {
  const html = HtmlService.createHtmlOutputFromFile("popup")
  .setWidth(800)
  .setHeight(400);
  DocumentApp.getUi().showModelessDialog(html, "Title Modal");
}
