const ITEM_HEIGHT = 30;
const TOTAL_ITEMS = 10000;
const menu = document.getElementById('menu');

const spacer = document.createElement('div');
spacer.style.height = `${TOTAL_ITEMS * ITEM_HEIGHT}px`;
menu.appendChild(spacer);

const renderContainer = document.createElement('div');
renderContainer.style.position = 'absolute';
menu.appendChild(renderContainer);

const visibleCount = Math.ceil(menu.clientHeight / ITEM_HEIGHT) + 2;
let firstItem = 0;

function render() {
  const start = Math.max(0, Math.floor(menu.scrollTop / ITEM_HEIGHT) - 1);
  if (start === firstItem) return;
  firstItem = start;
  renderContainer.style.transform = `translateY(${firstItem * ITEM_HEIGHT}px)`;
  renderContainer.innerHTML = '';
  for (let i = 0; i < visibleCount; i++) {
    const index = firstItem + i;
    if (index >= TOTAL_ITEMS) break;
    const div = document.createElement('div');
    div.className = 'item';
    div.textContent = `Item ${index + 1}`;
    renderContainer.appendChild(div);
  }
}

menu.addEventListener('scroll', () => requestAnimationFrame(render));
render();
