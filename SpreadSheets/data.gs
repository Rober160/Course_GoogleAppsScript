function testData1() {
  const id = "1OPFjIYwEa5MKnsAimWS2cZDcqc82EZ_EcRQZP8IKpP0";
  const sheet = SpreadsheetApp.openById(id).getSheets()[0];

  const lastCol = sheet.getLastColumn();
  const lastRow = sheet.getLastRow();
  const rangeData = sheet.getDataRange();

  Logger.log(rangeData.getValues());
  Logger.log(lastCol + " " + lastRow);
}
