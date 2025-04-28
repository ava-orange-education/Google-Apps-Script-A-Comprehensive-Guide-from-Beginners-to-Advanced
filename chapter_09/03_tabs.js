function getTabs() {
  DocumentApp.getActiveDocument()
    .getTabs()
    .forEach(tab => {
      Logger.log(`Tab ID: ${tab.getId()}, tab title: ${tab.getTitle()}`);
    });
}

function getTabById() {
  const tab = DocumentApp.getActiveDocument().getTab('t.mfdo8qp6d7in');
  Logger.log({ tabTitle: tab.getTitle() });
}
