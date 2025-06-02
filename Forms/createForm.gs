function createForm() {
  const form = FormApp.create("Myform");
  const item = form.addTextItem();
  Logger.log(item);
}

function updateForm() {
  const id = "17nLQoLk79lRC1WeRL0NIEpGpMmtUgooIWGoRSi79wCQ";
  const form = FormApp.openById(id);

  /*
  const item1 = form.addCheckboxItem();
  item1.setChoices([
    item1.createChoice("Primero"),
    item1.createChoice("Segundo"),
    item1.createChoice("Tercero")
  ]);
  */
  const item2 = form.addMultipleChoiceItem();
  item2.setTitle("Te gusta Google Apps Script?")
    .setChoiceValues(["Yes","No"])
    .showOtherOption(true);
  form.addPageBreakItem().setTitle("Gracias!");
  
  const item3 = form.addGridItem();
  item3.setTitle("Rate your favorite Workspace service")
  .setRows(["Sheets","Docs","Forms"])
  .setColumns(["Top","Average","Bad"]);

  form.addDateItem().setTitle("Cuando empezaste con Apps Script?")
}
