function createAutomatedBackupsFolder() {
  const folderName = 'Automated Backups';
  const newFolder = DriveApp.createFolder(folderName);
  Logger.log(`Folder '${folderName}' created with ID: ${newFolder.getId()}`);
}

function listSheetsInFolder(folderId) {
  const folder = DriveApp.getFolderById(folderId);
  const files = folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  Logger.log(`Google Sheets files in folder with ID '${folderId}':`);
  while (files.hasNext()) {
    const file = files.next();
    Logger.log(file.getName());
  }
}

function addViewerPermissionToFile(fileId, viewerEmail) {
  const file = DriveApp.getFileById(fileId);
  file.addViewer(viewerEmail);
  Logger.log(`Added ${viewerEmail} as a viewer to file with ID '${fileId}'.`);
}
