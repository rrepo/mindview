const viewport = document.querySelector('.wrapper');
const content = document.querySelector('.box');

const sb = new ScrollBooster({
  viewport,
  content,
  scrollMode: 'native',
  emulateScroll: true,
});

content.addEventListener('load', () => {
  // set viewport position to the center of an image
  const offsetX = content.scrollWidth - viewport.offsetWidth;
  const offsetY = content.scrollHeight - viewport.offsetHeight;
  sb.setPosition({
    x: offsetX / 2,
    y: offsetY / 2
  });
});