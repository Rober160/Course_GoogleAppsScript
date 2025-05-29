function addTable() {
  const body = DocumentApp.getActiveDocument().getBody();
  body.clear();
  //const array = [["col1", "col2", "col3"], ["1", "2", "3"], ["4", "5", "6"]];
  const array = getData();
  body.appendTable(array);
}

function getData() {
  const id = "1OPFjIYwEa5MKnsAimWS2cZDcqc82EZ_EcRQZP8IKpP0";
  const ss = SpreadsheetApp.openById(id).getSheets()[0];
  const data = ss.getDataRange().getValues();
  Logger.log(data);
  return data;
}
