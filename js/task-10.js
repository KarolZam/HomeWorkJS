function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = input.value;

  // Sprawdzenie, czy input zawiera poprawną wartość
  if (!amount || amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  // Usunięcie ewentualnych istniejących elementów
  destroyBoxes();

  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(div);

    boxSize += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
