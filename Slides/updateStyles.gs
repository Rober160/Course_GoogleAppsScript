function updateSlides() {
  const pres = SlidesApp.getActivePresentation();
  const slides = pres.getSlides();
  Logger.log(slides);

  slides.forEach((slide,index) => {
    let text = `This is slide#${index + 1}`
    let val = (slide.insertTextBox(text));
    Logger.log(val);
  })
}

function updateSlidesText() {
  const pres = SlidesApp.getActivePresentation();
  const slides = pres.getSlides();
  //Logger.log(slides);

  slides.forEach((slide,index) => {
    const elems = slide.getPageElements();
    //Logger.log(elems);

    elems.forEach((elem) => {
      const val2 = elem.asShape();
      const textRange = val2.getText();
      textRange.setText("UPDATED #" + index);
      const textStyle = textRange.getTextStyle();
      textStyle.setBackgroundColor(ranColor(),ranColor(),ranColor());
      Logger.log(textRange.getTextStyle()); 
    })
  })
}

function ranColor(){
  return Math.floor(Math.random()*255);
}
