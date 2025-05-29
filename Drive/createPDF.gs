function createaPDF(){
  const id = '10oc_OFiFyuxF7B_OXyFfOOkjr8z-FEIAkIK0ETvkQ0g';
  const folderSource = DriveApp.getFolderById(id);
  const folderDes = DriveApp.createFolder('PDF');
  const files = folderSource.getFiles();
  while (files.hasNext()){
    const file = files.next();
    const blobFile = file.getAs('application/pdf');
    blobFile.setName('PDF '+file.getName()+'.pdf');
    const newFile = folderDes.createFile(blobFile);
    Logger.log(newFile.getUrl());
  }
}
 
