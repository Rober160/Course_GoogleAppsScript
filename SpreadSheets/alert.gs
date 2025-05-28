function onOpen() {
  const ui = SpreadsheetApp.getUi()
  ui.createMenu("advance")
  .addItem("alert","popUp")
  .addToUi();
}

function popUp() {
  const ui =  SpreadsheetApp.getUi();
  const resp = ui.alert("Confirm", "Do you agree", ui.ButtonSet.YES_NO);
  if(resp == ui.Button.YES) {
    logVal("Has presionado SI");
  } else {
    logVal("Has presionado NO");
  }
}

function logVal(val) {
  const ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  ss.appendRow(val);
}
