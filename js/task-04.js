let counterValue = 0; 

const valueEl = document.querySelector('#value');

function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}


function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}


const buttons = document.querySelectorAll('#counter button');
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const action = event.target.dataset.action; 
    if (action === 'increment') {
      increment();
    } else if (action === 'decrement') {
      decrement();
    }
  });
});