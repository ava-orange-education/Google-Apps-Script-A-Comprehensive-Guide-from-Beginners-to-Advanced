// Recursively traverses the Drive folder structure and builds a nested JSON object
// representing the complete hierarchy of folders and files.
function run() {
  const PARENT_FOLDER_ID = '{{FOLDER_ID}}';
  const fileTree = tree(PARENT_FOLDER_ID);
  Logger.log(JSON.stringify(fileTree, null, 2));
  drawTree(PARENT_FOLDER_ID);
}

function tree(parentFolderId) {
  const recurse = ({ id, name }) => {
    const folder = DriveApp.getFolderById(id);
    const node = {
      id,
      name: name || folder.getName(),
      folders: iteratorToArray(folder.getFolders()),
      files: iteratorToArray(folder.getFiles()),
    };
    node.folders.forEach((folder, i) => {
      node.folders[i] = recurse(folder);
    });
    return node;
  };
  return recurse({ id: parentFolderId });
}

function drawTree(parentFolderId) {
  let str = '';
  const recurse = (node, depth = 0) => {
    str += `${' '.repeat(depth)}├── 📂 ${node.name}\n`;
    depth += 4;
    node.folders.forEach(folder => recurse(folder, depth));
    node.files.forEach(
      file => (str += `${' '.repeat(depth)}├── 📄 ${file.name}\n`)
    );
  };
  const tree = tree(parentFolderId);
  recurse(tree);
  Logger.log(str);
}
