function copyMe() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  const range = sheet.getActiveRange();
  const select = range.getValues();

  // Generar nombre único del nuevo sheet
  let i = 1;
  let sheetName;
  do {
    sheetName = "Sheet " + i;
    i++;
  } while (ss.getSheetByName(sheetName) != null);

  // Crear nueva hoja con nombre único
  const newSheet = ss.insertSheet();
  newSheet.setName(sheetName);

  // Pegar datos
  const newRange = newSheet.getRange(1, 1, range.getNumRows(), range.getNumColumns());
  newRange.setValues(select);

  // Colorear el rango original
  range.setBackground("teal");

  Logger.log(`Datos copiados a ${sheetName}`);
}

