function listFiles(folder) {
  const files = folder.getFiles();

  while (files.hasNext()) {
    const file = files.next();
    Logger.log(file.getName());
  }
}

function filesinFolder() {
  const id = "1oHpn-_5TnbJwk1Pu4C-3xC9zhUKhX-Ye";
  const folder = DriveApp.getFolderById(id);
  listFiles(folder);
}

