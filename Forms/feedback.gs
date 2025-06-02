function formMaker() {
  const form = FormApp.create("Tester");
  form.setIsQuiz(true);
  const item1 = form.addListItem();
  item1.setTitle("Te gusta Apps Scripts?")
  item1.setChoices([
    item1.createChoice("Si",true),
    item1.createChoice("No",false),
    item1.createChoice("No estoy seguro",false)
  ]) ;
  item1.setFeedbackForCorrect(FormApp.createFeedback().setText("Si").build());
  item1.setFeedbackForIncorrect(FormApp.createFeedback().setText("Oh no").build());
}
