const MSG =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function type(char = 0) {
  const doc = DocumentApp.getActiveDocument();
  const b = doc.getBody();
  const p = b.getParagraphs()[0];
  p.appendText(MSG[char]);
  doc.saveAndClose();
  if (char >= MSG.length - 1) return;
  Utilities.sleep(30);
  type(char + 1);
}
