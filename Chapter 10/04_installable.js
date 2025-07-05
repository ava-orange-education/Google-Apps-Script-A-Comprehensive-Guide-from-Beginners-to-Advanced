function installNewTrigger() {
  ScriptApp.newTrigger('installableOnEdit')
    .forSpreadsheet(SpreadsheetApp.getActive())
    .onEdit()
    .create();
}

function cleanUpTriggers() {
  ScriptApp.getProjectTriggers()
    .forEach(trigger => ScriptApp.deleteTrigger(trigger));
}
