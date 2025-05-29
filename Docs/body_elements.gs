function docContents() {
  const id = "1vDbsHNOVaGijXZqCvoZ3T6C8zfKMEj-OghwSLGADfRY";
  const doc = DocumentApp.openById(id);
  const body = doc.getBody();

  const txt = body.editAsText();
  Logger.log(txt.getText().length);
  const val1 = txt.insertText(0,"FIRST").setFontSize(0,3,20).setBackgroundColor(0,4,"#ff00ff");
  const val2 = txt.insertText(20,"SECOND").setBold(20,26,true);
  
  Logger.log(txt);
}
