function addStyles(){
  const id = '1vDbsHNOVaGijXZqCvoZ3T6C8zfKMEj-OghwSLGADfRY';
  const doc = DocumentApp.openById(id);
  const body = doc.getBody();
  const paras = body.getParagraphs();
  //Logger.log(paras.length);
  const style1 = {};
  style1[DocumentApp.Attribute.FONT_SIZE] = 22;
  style1[DocumentApp.Attribute.FOREGROUND_COLOR] = '#ffffff';
  style1[DocumentApp.Attribute.BACKGROUND_COLOR] = '#ff0000';
  const style2 = {};
  style2[DocumentApp.Attribute.FONT_SIZE] = 12;
  style2[DocumentApp.Attribute.FOREGROUND_COLOR] = '#000000';
  style2[DocumentApp.Attribute.BACKGROUND_COLOR] = '#ffffff';

  paras.forEach((el,index)=>{
    if(el.getText().length > 0 ){
      Logger.log(el.getText().length);
      Logger.log(el.getNumChildren());
      Logger.log(el.getAttributes());
      let val = el.appendText('NEW');
      val.setAttributes(style1);

      if(index==2){
        el.setAttributes(style2);
      }
    }
  })
}
 
/*
{HORIZONTAL_ALIGNMENT=null, LINE_SPACING=null, HEADING=Normal, BOLD=null, LEFT_TO_RIGHT=true, BACKGROUND_COLOR=null, INDENT_END=null, INDENT_FIRST_LINE=null, STRIKETHROUGH=null, LINK_URL=null, FONT_FAMILY=null, INDENT_START=null, UNDERLINE=null, ITALIC=null, SPACING_AFTER=null, FONT_SIZE=12.0, SPACING_BEFORE=null, FOREGROUND_COLOR=null}
*/
