function doGet() {
  const data = {
    status : "success",
    quotes: myData()
  }
  const output = JSON.stringify(data);
  return ContentService.createTextOutput(output)
  .setMimeType(ContentService.MimeType.JSON);
}

function myData() {
  const id = "1Q9neOLnhkeyo3MpNAI1sn9ERGHBq0iFZpjDRhKJezO8";
  const sheet = SpreadsheetApp.openById(id).getSheetByName("posts");
  const rows = sheet.getDataRange().getValues();
  const quotes = rows.slice(1);
  return quotes;
}
