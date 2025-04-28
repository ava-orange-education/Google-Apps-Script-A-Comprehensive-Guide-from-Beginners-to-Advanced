function listContents() {
  const PARENT_FOLDER_ID = '{{FOLDER_ID}}';
  const folder = DriveApp.getFolderById(PARENT_FOLDER_ID);
  const subfolders = iteratorToArray(folder.getFolders());
  const files = iteratorToArray(folder.getFiles());
  Logger.log(subfolders);
  Logger.log(files);
}

function iteratorToArray(iterator) {
  const array = [];
  while (iterator.hasNext()) {
    const item = iterator.next();
    const data = {
      id: item.getId(),
      name: item.getName(),
    };
    if (item.getMimeType) {
      // Check if getMimeType method exists
      data.mimeType = item.getMimeType();
    }
    array.push(data);
  }
  return array;
}

function createFileInFolder() {
  const PARENT_FOLDER_ID = '{{FOLDER_ID}}';
  const folder = DriveApp.getFolderById(PARENT_FOLDER_ID);
  folder.createFile('MyText.txt', 'Hello world!', MimeType.PLAIN_TEXT);
}

function createSpreadsheetInFolder() {
  const PARENT_FOLDER_ID = '{{FOLDER_ID}}';
  const folder = DriveApp.getFolderById(PARENT_FOLDER_ID);
  const ss = SpreadsheetApp.create('My Spreadsheet');
  const file = DriveApp.getFileById(ss.getId());
  file.moveTo(folder);
}
