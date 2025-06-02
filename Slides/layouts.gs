function myLayouts() {
  const pres = SlidesApp.getActivePresentation();
  const layouts = pres.getLayouts();

  layouts.forEach((layout, index) => {
    //Logger.log(layout.getLayoutName());
    const val = layout.getMaster();
    //const box = val.insertTextBox("Layout #" + index +1);
    //box.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
    //box.sendToBack();
    //box.setTitle("text box");
    const shapes = val.getShapes();
    shapes.forEach((shape) => {
      let shapeText = shape.getText().asString();
      let boolean = shapeText.includes("Layout");
      if(boolean) {
        shape.remove();
      }
    })
    //Logger.log(box);
  })
}
