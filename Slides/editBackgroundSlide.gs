function addaSlide() {
  const presentation = SlidesApp.getActivePresentation();
  Logger.log(presentation);

  presentation.addEditor("robertonegrete421@gmail.com");
  const layouts = presentation.getLayouts();
  layouts.forEach((layout,index) => {
    Logger.log(layout.getLayoutName());
    Logger.log(index);
  })

  const slide = presentation.appendSlide(layouts[6]);
  slide.getBackground().setSolidFill("#ff0000");
  Logger.log(slide);
}
