function listFiles() {
  const files = DriveApp.getFiles();
  const fileNames = [];
  const MAX_FILES = 10;
  let fileCount = 0;
  while (files.hasNext() && fileCount < MAX_FILES) {
    fileNames.push(files.next().getName());
    fileCount++;
  }
  Logger.log(fileNames);
}

function listFilesInGSheet() {
  const files = DriveApp.getFiles();
  const fileNamesTypes = [['File Name', 'Mime Type']];
  const MAX_FILES = 10;
  let fileCount = 0;
  while (files.hasNext() && fileCount < MAX_FILES) {
    const file = files.next();
    fileNamesTypes.push([file.getName(), file.getMimeType()]);
    fileCount++;
  }
  SpreadsheetApp.getActiveSheet()
    .getRange(1, 1, fileNamesTypes.length, fileNamesTypes[0].length)
    .setValues(fileNamesTypes);
}

function listFiles() {
  const ws = SpreadsheetApp.getActiveSheet();
  const mimeType = ws.getRange('D2').getValue();
  const files = !!mimeType
    ? DriveApp.getFilesByType(mimeType)
    : DriveApp.getFiles();
  const fileNamesTypes = [['File Name', 'Mime Type']];
  const MAX_FILES = 10;
  let fileCount = 0;
  while (files.hasNext() && fileCount < MAX_FILES) {
    const file = files.next();
    fileNamesTypes.push([file.getName(), file.getMimeType()]);
    fileCount++;
  }
  ws.getRange(1, 1, fileNamesTypes.length, fileNamesTypes[0].length).setValues(
    fileNamesTypes
  );
}
