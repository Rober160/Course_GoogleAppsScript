function onOpen() {
  const ui = SpreadsheetApp.getUi()
  ui.createMenu("advance")
  .addItem("showModal1","modal1")
  .addToUi();
}

function modal1() {
  const ui = SpreadsheetApp.getUi();
  //const html = HtmlService.createHtmlOutput("<h1>Hello World</h1><p>Tested</p>");
  const html = HtmlService.createHtmlOutputFromFile("temp.html");
  html.setHeight(500);
  html.setWidth(800);
  ui.showModalDialog(html,"test1");
}

function logVal(val) {
  const ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  ss.appendRow(val);
}
