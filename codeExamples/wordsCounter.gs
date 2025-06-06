function counter() {
  const doc = DocumentApp.getActiveDocument();
  const data = doc.getBody().getText();
  
  const array = data.replace(/[.,!?¿¡:;"()]/g, "").split(" ");
  
  const palabras = array.length;
  Logger.log("Total palabras: " + palabras);
}
