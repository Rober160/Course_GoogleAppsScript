function onOpen() {
  const ui = SpreadsheetApp.getUi()
  ui.createMenu("advance")
  .addItem("showSide1","side1")
  .addItem("showSide2", "side2")
  .addToUi();
}

function side1() {
  const ui = SpreadsheetApp.getUi();
  const html = HtmlService.createHtmlOutput("<h1>Hola Mundo</h1><p>Tested</p>");
  ui.showSidebar(html);
}

function side2() {
  const ui = SpreadsheetApp.getUi();
  const html = HtmlService.createHtmlOutputFromFile("temp.html")
  ui.showSidebar(html);
}

function logVal(val) {
  const ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  ss.appendRow(val);
}

