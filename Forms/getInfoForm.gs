function getInfoForm() {
  const id = "17nLQoLk79lRC1WeRL0NIEpGpMmtUgooIWGoRSi79wCQ";
  const form = FormApp.openById(id);
  Logger.log(form.getEditUrl());
  Logger.log("Sumario:" + form.getSummaryUrl());

  const items = form.getItems();
  items.forEach((item) => {
    Logger.log(item.getType());
  })
   
}
