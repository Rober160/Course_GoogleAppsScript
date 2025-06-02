function onOpen() {
  const ui = SlidesApp.getUi();
  ui.createMenu("adv")
  .addItem("addSlide","addSlide")
  .addToUi();
}

function addSlide() {
  const pres = SlidesApp.getActivePresentation();
  const currentSlide = pres.getSelection();
  const currentPage = currentSlide.getCurrentPage();
  const mySlide = currentPage.asSlide();
  Logger.log(mySlide);

  const newSlide = mySlide.duplicate();
  newSlide.insertTextBox("Duplicated");
  Logger.log(newSlide);

}
