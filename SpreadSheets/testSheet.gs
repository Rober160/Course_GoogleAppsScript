function testSheet1() {
  const ss = SpreadsheetApp.getActiveSpreadsheet(); //En primer lugar, SIEMPRE seleccionamos la hoja
  const sheet = ss.getActiveSheet();
  const data = sheet.getDataRange();
  const values = data.getValues();
  values.forEach((val)=> {
    Logger.log(val);
  })
  Logger.log(values);
  Logger.log(sheet.getName());
}
