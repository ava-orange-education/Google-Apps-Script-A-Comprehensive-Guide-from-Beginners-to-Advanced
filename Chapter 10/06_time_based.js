function getForm() {
  return FormApp.openById('form-id-here');
}

function isWeekEnd() {
  return [0, 6].includes(new Date().getDay());
}

function openFormIfWeekday() {
  if (!isWeekEnd()) return getForm().setAcceptingResponses(true);
  return getForm().setAcceptingResponses(false);
}

function closeForm() {
  return getForm().setAcceptingResponses(false);
}

function createOpenFormTrigger() {
  ScriptApp.newTrigger('openFormIfWeekday')
    .timeBased()
    .atHour(8)
    .everyDays(1)
    .create();
}

function createCloseFormTrigger() {
  ScriptApp.newTrigger('closeForm')
    .timeBased()
    .atHour(19)
    .everyDays(1)
    .create();
}
