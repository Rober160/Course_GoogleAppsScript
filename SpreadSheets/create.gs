function makeNewOne() {
  const id = "1OPFjIYwEa5MKnsAimWS2cZDcqc82EZ_EcRQZP8IKpP0";
  const ss = SpreadsheetApp.openById(id);
  const sheets = ss.getSheets();
  Logger.log(sheets);

  const newName = "Sheet New";
  let sheet = ss.getSheetByName(newName);
  if(sheet == null) {
    sheet = ss.insertSheet();
    sheet.setName(newName);
  }

  Logger.log(sheet.getIndex());
}
