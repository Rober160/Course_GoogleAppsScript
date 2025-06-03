function doGet(){
  const myOutput = 'Hola Mundo 2';
  //return ContentService.createTextOutput(myOutput);
  return ContentService.createTextOutput(myOutput).downloadAsFile('test.txt');
 
}
