function test2() {
  const url = "https://docs.google.com/spreadsheets/d/1CjgXrUmrjrrLdMmjMGLKdCkmQiOaxOK1VmUUTC1JC_Y/edit?gid=1668446245#gid=1668446245";
  const ss = SpreadsheetApp.openByUrl(url);
  //const sheet = ss.getSheets()[1];
  //sheet.setName("Second");
  const sheet = ss.getSheetByName("Second");
  if (sheet != null) {
    Logger.log(sheet.getIndex());
  } else {
    Logger.log(sheet);
  }
}


function test1() {
  const id = "1CjgXrUmrjrrLdMmjMGLKdCkmQiOaxOK1VmUUTC1JC_Y";
  const ss = SpreadsheetApp.openById(id);
  const sheets = ss.getSheets();
  sheets.forEach((sheet,index)=>{
    Logger.log(sheet.getName());
    sheet.setName("Updated " + index);
  })
  Logger.log(sheets);
}

