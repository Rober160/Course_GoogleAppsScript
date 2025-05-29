function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Adv")
  .addItem("Search","FindDrive")
  .addToUi();
}

function FindDrive() {
  const ui = SpreadsheetApp.getUi();
  const resp = ui.prompt("Search", "Search Drive Files", ui.ButtonSet.OK_CANCEL);
  
  if(resp.getSelectedButton() == ui.Button.OK) {
    const searchTerm = resp.getResponseText();
    Logger.log(searchTerm);
    const results = searchDrive(searchTerm);

    if(results) {
      results.forEach((data) => {
        Logger.log(data);
        addtoSheet(data);
      })
    }

  }
}

function searchDrive(val) {
  const results = DriveApp.searchFiles('title contains "'+val+'"');
  const ret = [];

  while (results.hasNext()) {
    const file = results.next();
    const temp = [file.getName(),file.getOwner(),file.getUrl()];
    ret.push(temp);

  }
  return ret;
}

function addtoSheet(data) {
  const ss = SpreadsheetApp.getActive().getSheetByName("results");
  ss.appendRow(data);
}

