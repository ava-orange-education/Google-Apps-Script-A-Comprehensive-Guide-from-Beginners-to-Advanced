function createGroup() {
  const p = SlidesApp.getActivePresentation();
  const slide = p.getSlides()[3];
  const images = slide.getImages();
  slide.group(images);
}

function ungroup() {
  const p = SlidesApp.getActivePresentation();
  const slide = p.getSlides()[3];
  slide.getGroups().forEach(g => g.ungroup());
}

function groupImageAndShape() {
  const p = SlidesApp.getActivePresentation();
  const slide = p.getSlides()[3];
  const elements = [];

  slide.getPageElements().forEach(e => {
    const type = e.getPageElementType().toString();
    let text = '';
    if ('SHAPE' === type) text = e.asShape().getText().asString().trim();
    if ('IMAGE' === type) text = e.asImage().getDescription().trim();
    if (!!text && !text.startsWith('Lorem')) elements.push({ el: e, text });
  });

  const uniqueText = [...new Set(elements.map(e => e.text))];
  uniqueText.forEach(text => {
    const els = elements.filter(e => e.text === text).map(e => e.el);
    if (els.length > 1) {
      try {
        console.log(`Grouping ${els.length} elements belonging to ${text}`);
        slide.group(els);
      } catch (err) {
        console.error(`Could not group elements: ${err}`);
      }
    }
  });
}
