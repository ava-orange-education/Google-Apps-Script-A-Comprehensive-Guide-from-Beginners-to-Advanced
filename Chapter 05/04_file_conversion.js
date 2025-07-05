function convertToPdf() {
  // Get the file and convert it to a PDF blob with getAs()
  const fileId = '{{FILE_ID}}';
  const file = DriveApp.getFileById(fileId); // a Google Doc ID
  const blob = file.getAs('application/pdf');

  // Use the blob to create a file in your target folder
  const folderId = '{{FOLDER_ID}}';
  const folder = DriveApp.getFolderById(folderId);
  const newFile = folder.createFile(blob);

  // Log out the URL for easy reference
  Logger.log(newFile.getUrl());
  return newFile;
}
