function makePDF() {
  const id = "10Puh1M3mp4d67xgw9itw-phJO9EHH404vX4CbUJgnCA";
  const oldfile = DriveApp.getFileById(id);
  
  const blob = oldfile.getBlob();
  const file = DriveApp.createFile(blob);
  file.setName(oldfile);
  const pdf = DriveApp.createFile(file);
}
