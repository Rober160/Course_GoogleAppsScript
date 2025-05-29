function movetoTrashFiles() {
  const files = DriveApp.getFilesByName("New");

  while(files.hasNext()) {
    const file = files.next();
    const today = new Date();
    const fileDate = file.getLastUpdated();
       
    const fileInfo = {};
    fileInfo.active = today - fileDate;
    fileInfo.nameFile = file.getName();
    fileInfo.fileType = file.getMimeType();

    if(fileInfo.active > 40000) {
      file.setTrashed(true)
    }
    Logger.log(fileInfo);
  }
}
