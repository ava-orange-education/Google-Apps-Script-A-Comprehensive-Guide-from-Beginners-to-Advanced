function onChange(e) {
  Logger.log(e);
  Logger.log(JSON.stringify(e));
}

function installOnChangeTrigger() {
  ScriptApp.newTrigger('onChange')
    .forSpreadsheet(SpreadsheetApp.getActive())
    .onChange()
    .create();
}
