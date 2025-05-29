function selectContent() {
  const id = "1vDbsHNOVaGijXZqCvoZ3T6C8zfKMEj-OghwSLGADfRY";
  const doc = DocumentApp.openById(id);
  const body = doc.getBody();
  const data = body.getText();

  const eng = LanguageApp.translate(data, "es", "en");
  body.appendHorizontalRule();
  body.appendParagraph("En Inglés");
  body.appendHorizontalRule();
  body.appendParagraph(eng);

  Logger.log(data);

}

function updateContent() {
  const id = "1vDbsHNOVaGijXZqCvoZ3T6C8zfKMEj-OghwSLGADfRY";
  const doc = DocumentApp.openById(id);
  const body = doc.getBody();

  for (let i=0; i<10; i++) {
    let temp = `${i} Hola Mundo`;
    body.appendParagraph(temp);
  }
}
