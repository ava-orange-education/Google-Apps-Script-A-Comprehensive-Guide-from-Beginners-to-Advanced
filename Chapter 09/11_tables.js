function newTable() {
  const indianAnimals = [
    ['Animal', 'Scientific Name', 'Habitat', 'Conservation Status'],
    [
      'Bengal Tiger',
      'Panthera tigris tigris',
      'Tropical forests, Grasslands',
      'Endangered',
    ],
    [
      'Indian Elephant',
      'Elephas maximus indicus',
      'Forests, Grasslands',
      'Endangered',
    ],
    [
      'Indian Peacock',
      'Pavo cristatus',
      'Forest edges, Farmlands',
      'Least Concern',
    ],
    [
      'Indian Cobra',
      'Naja naja',
      'Forests, Wetlands, Urban areas',
      'Least Concern',
    ],
    [
      'Asiatic Lion',
      'Panthera leo persica',
      'Dry forests, Grasslands',
      'Endangered',
    ],
  ];

  const body = DocumentApp.getActiveDocument()
    .getActiveTab()
    .asDocumentTab()
    .getBody();

  const table = body.appendTable(indianAnimals);

  const firstRow = table.getChild(0).asTableRow();
  firstRow.setAttributes({
    [DocumentApp.Attribute.BOLD]: true,
  });
}

function addRowsToTable() {
  const dummyData = [
    ['John', 'Doe', 'Unknown'],
    ['Michael', 'Scott', 'Manager, thinker'],
  ];

  const table = DocumentApp.getActiveDocument()
    .getActiveTab()
    .asDocumentTab()
    .getBody()
    .getTables()[0];

  dummyData.forEach(row => {
    const r = table.appendTableRow();
    row.forEach(value => r.appendTableCell(value));
  });
}
