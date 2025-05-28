function getMyRange(){
  const id = '1OPFjIYwEa5MKnsAimWS2cZDcqc82EZ_EcRQZP8IKpP0';
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheets()[0];
  const range = sheet.getRange(4,4,2,2);
  const data = range.getValues();
  range.setValues([['test1','test2'],['test3','test4']]);
  range.setBackground('purple');
  Logger.log(data);
 
}


function addColors2() {
  const id = "1OPFjIYwEa5MKnsAimWS2cZDcqc82EZ_EcRQZP8IKpP0";
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheets()[0];

  let color = "red";
  let size = 10;
  for(let rows=1; rows<=5; rows++) {
    for (let cols=1; cols<=10; cols++) {

      let total = cols + rows;
      if((total%2) == 0) {
        color = "red";
      } else {
        color = "blue";
      }

      let range = sheet.getRange(rows,cols)
      range.setFontColor("white");
      range.setFontSize(size+cols);
      range.setBackground(color);
      range.setValue(total);

    }
  }
}


function addColors() {
  const id = "1OPFjIYwEa5MKnsAimWS2cZDcqc82EZ_EcRQZP8IKpP0";
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheets()[0];

  for(let i=1; i<51; i++) {
    let color = "green";
    if((i%2) == 0) {
      color = "red";
    } else {
      color = "purple";
    }
    sheet.getRange('A'+i+':E'+i).setBackground(color);
  }
}
