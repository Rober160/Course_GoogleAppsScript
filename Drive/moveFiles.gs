function moveFiles() {
  const id = "1nlzkU9Cfe8kxtHFm0bAKio-7TuSuRLRP";
  const source = DriveApp.getFolderById(id);
  const files = source.getFiles();
  
  const destFolder = DriveApp.createFolder("moved");
  
  while(files.hasNext()) {
    const file = files.next();
    destFolder.addFile(file);

  }

}
