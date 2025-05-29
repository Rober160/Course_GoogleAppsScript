function onOpen() {
  const ui = DocumentApp.getUi();
  ui.createMenu("Adv")
  .addItem("AddImage", "addImage")
  .addToUi();
}

function addImage() {
  const doc = DocumentApp.getActiveDocument();
  const cursor = doc.getCursor();
  const urlImage = "https://dummyimage.com/300x200/0fff00/f000ff";
  const myImage = UrlFetchApp.fetch(urlImage).getBlob();

  cursor.insertInlineImage(myImage);
}


function insertImage() {
  const body = DocumentApp.getActiveDocument().getBody();
  const urlImage = "https://dummyimage.com/600x400/000/fff";
  const myImage = UrlFetchApp.fetch(urlImage).getBlob();
  const img = body.insertImage(0,myImage);
  Logger.log(img);
  const img1 = body.appendImage(myImage);
}
