const id = "1lmLrs4QjwV4LtA3R9CEoLCyTXS0EinJvnSjmRwxrSuY";
const fID = "1bxxq0tlVZ7mlAWj-oK5VH5-3Vq0p2iM6";
const URL = "https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/color-fondo-imagen-r.png";


function adder() {
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheets()[0];
  //sheet.appendRow([1,2,3,4,5]);

  const img = UrlFetchApp.fetch(URL);
  const data = img.getContent();
  const blob = Utilities.newBlob(data, "image/png", "Imagen");
  sheet.insertImage(blob,1,2);

  Logger.log(sheet.getName());
  Logger.log(data);
}

function mover() {
  const destino = DriveApp.getFolderById(fID);
  DriveApp.getFileById(id).moveTo(destino);
}

function makerSheets() {
  const ss = SpreadsheetApp.create("New Sheet 1");
  Logger.log(ss.getId());
}

function makerFolder() {
  const dir = DriveApp.createFolder("New Folder 1");
  Logger.log(dir.getId());
}
