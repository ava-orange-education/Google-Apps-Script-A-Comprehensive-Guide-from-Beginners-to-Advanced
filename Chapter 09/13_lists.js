function addList(items = [], type = DocumentApp.GlyphType.BULLET) {
  const body = DocumentApp.getActiveDocument()
    .getActiveTab()
    .asDocumentTab()
    .getBody();

  let listId = null;
  items.forEach((listItem, i) => {
    const item = body.appendListItem(listItem).setGlyphType(type);
    if (null !== listId) item.setListId(item);
    if (0 === i) listId = item;
  });
}

const SHOPPING_LIST = [
  'Fruit: bananas, berries, or mangoes',
  'Vegetable to eat raw: avocados, mixed greens, or cucumber',
  'Vegetable to cook: Brussels sprouts, sweet potatoes, or cauliflower',
  'Protein: chicken, fish, tofu, or eggs',
  'Starch: pasta, quinoa, or rice',
  'Legume: chickpeas, black beans, or lentils',
  'Breakfast item: oats, cereal, or granola',
  'Pantry staple: jarred sauce, spices, or herbs',
  'Wildcard: tortillas, bread, or chicken stock',
];

function addBulletedList() {
  addList(SHOPPING_LIST);
}

function addNumberedList() {
  addList(SHOPPING_LIST, DocumentApp.GlyphType.NUMBER);
}
