function getWebsite() {
  const url = "http://www.google.com/";
  const resp = UrlFetchApp.fetch(url);
  Logger.log(resp.getContentText());
}

function onOpen() {
  const url = "http://www.google.com/";
  const resp = UrlFetchApp.fetch(url);
  const html = resp.getContentText();
  return HtmlService.createHtmlOutput(html)
}

function doGet(e) {
 return onOpen();
}
