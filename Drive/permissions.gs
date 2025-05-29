function myFilesPermissions() {
  const id = "1V62Ttx9WoDh0UxEZ5kFIIaekt3487GOK";
  const folder = DriveApp.getFolderById(id);
  const files = folder.getFiles();

  while(files.hasNext()) {
    const file = files.next();
    const editors = file.getEditors();
    Logger.log("*****"+file.getName()+"*****");

    editors.forEach((editor) => {
      outputDriveUser(editor);
      file.removeEditor(editor.getEmail());
    })

    file.setSharing(DriveApp.Access.PRIVATE, DriveApp.Permission.VIEW); //Permisos de acceso - tipo de permiso
    file.addViewer("m.amigoro@vitaly.es"); //Permisos para archivos
  }  
}


function myPermissions() {
  const id = "1V62Ttx9WoDh0UxEZ5kFIIaekt3487GOK";
  const folder = DriveApp.getFolderById(id);
  
  const editors = folder.getEditors();
  editors.forEach((editor) => {
    outputDriveUser(editor)
  })

  const viewers = folder.getViewers();
  viewers.forEach((viewer) => {
    outputDriveUser(viewer);
  })

  const owner = folder.getOwner();
  outputDriveUser(owner);
}


function outputDriveUser(user) {
  Logger.log(user.getEmail());
  Logger.log(user.getName());  
}

