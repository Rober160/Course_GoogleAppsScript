function crearDocumento() {
  const doc = DocumentApp.create(VAL);
}

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index.html');
}
