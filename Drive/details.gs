function driveDetails() {
  const drive1 = DriveApp.getStorageLimit();
  const drive2 = DriveApp.getStorageUsed();
  Logger.log(drive2/drive1*100);
}
