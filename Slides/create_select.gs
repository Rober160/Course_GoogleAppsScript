function makeSlides() {
  const slides = SlidesApp.create("Nueva Presentación Prueba");
  Logger.log(slides);
}

function selectSlide() {
  const id = "10Puh1M3mp4d67xgw9itw-phJO9EHH404vX4CbUJgnCA";
  const slides = SlidesApp.openById(id);
  Logger.log(slides.getName());
}
