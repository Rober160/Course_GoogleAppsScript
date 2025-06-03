function makeSheet() {
  const ss = SpreadsheetApp.create("TESTsheet1");
  const sheet = ss.insertSheet("chart");

  sheet.appendRow(["Date","Team A", "Team B"]);
  const today = new Date();
  const day = 1000*60*60*24;

  for(let i=0; i<12; i++) {
    const datePlayed = new Date(today.getTime() + (100*day)+(i*3*day));
    const score1 = Math.floor(Math.random()*20);
    const score2 = Math.floor(Math.random()*20);
    sheet.appendRow([datePlayed,score1,score2]);

  }

  const remover = ss.getSheetByName("Hoja 1");
  ss.deleteSheet(remover);
  Logger.log(ss.getId());
}


function makeChart() {
  const id = "1sABK0YRvlxoG2UowQn08L0_mCLEruDJbcxHoIyztErQ";
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheetByName("chart");

  const range = sheet.getDataRange();
  const hAxis = {
    gridlines : {count:13}
  };
  const temp = sheet.newChart().asLineChart();
  const chart = temp
  .addRange(range)
  .setPosition(3,5,0,0)
  .setOption("hAxis",hAxis)
  .build();

  sheet.insertChart(chart);
  
}
