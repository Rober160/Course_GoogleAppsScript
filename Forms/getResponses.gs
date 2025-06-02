function responses() {
  const id = "1wKdWvKf0WJKBS4ZDhZHwyBNG2PRmI47lPsvA_mywkFc";
  const form = FormApp.openById(id);
  Logger.log(form.getPublishedUrl());
  
  const respuestas = form.getResponses();
  respuestas.forEach((resp,index) => {
    const itemsRes = resp.getItemResponses();

    itemsRes.forEach((item) => {
      Logger.log(item.getItem().getTitle());
      Logger.log(item.getResponse());
    })
  })
}
