function makeIt() {
  const html = "<h1>Hola mundo</h1>";
  const id = "1oHpn-_5TnbJwk1Pu4C-3xC9zhUKhX-Ye";
  const folder = DriveApp.getFolderById(id);

  const newFolder = folder.createFolder("New Folder");
  const file = newFolder.createFile("New HTML File",html,MimeType.HTML);
}
