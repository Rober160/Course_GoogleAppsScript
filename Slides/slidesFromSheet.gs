function slideMaker() {
  const pres = SlidesApp.create("Slides FROM Sheet " + myId());
  const presID = pres.getId();
  const folderID = "1-11cL75OcY_U_ydV6cwM4EBagAHemaEZ";
  const file = DriveApp.getFileById(presID);
  DriveApp.getFolderById(folderID).addFile(file);

  const layouts = pres.getLayouts();
  const data = getDataSheet();

  data.forEach((row) => {
    const newSlide = pres.appendSlide(layouts[0]);
    const ranBackground = randomHexColor();
    newSlide.getBackground().setSolidFill(ranBackground, 0.3);
    const pageElems = newSlide.getPageElements();
    pageElems[0].asShape().getText().setText(row[0]);
    pageElems[1].asShape().getText().setText(row[1]);
  });
  const slides = pres.getSlides();
  slides[0].remove();
}

function randomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

function getDataSheet() {
  const id = "113bA-963wSWG4wKqLUYvLLuX6al7pH4YU9eb2H4r1zg";
  const sheet = SpreadsheetApp.openById(id).getSheetByName("output");
  const data = sheet.getDataRange().getValues().slice(1);
  Logger.log(data);
  return data;
}

function myId() {
  const mydate = new Date().toISOString().slice(0,10);
  return mydate;
}
