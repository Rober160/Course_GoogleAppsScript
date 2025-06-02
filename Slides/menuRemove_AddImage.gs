function onOpen() {
  const ui = SlidesApp.getUi();
  ui.createMenu("ADV")
  .addItem("addImage", "addImage")
  .addItem("remove","removeSlide")
  .addToUi();
}

function removeSlide() {
  const slide = SlidesApp.getActivePresentation().getSelection().getCurrentPage().asSlide();
  slide.remove(); 
}

function addImage() {
  const slide = SlidesApp.getActivePresentation().getSelection().getCurrentPage().asSlide();
  Logger.log(slide.getObjectId());
  //https://drive.google.com/file/d/148SGZhXkTYF64ekyXURa9AyMC453E-aP/view?usp=drive_link
  const id = "148SGZhXkTYF64ekyXURa9AyMC453E-aP";
  const image = DriveApp.getFileById(id);
  slide.insertImage(image);
}
