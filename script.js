const container = document.getElementById('container');
const clear = document.getElementById('clear');

const createBox = (num) => {
  if (num > 100 || num <= 0) {
    alert('Please choose a number between 1 to 100');
    num = 0;
  } else {
    const numByNum = num * num;
    for (let i = 1; i <= numByNum; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style['flex-basis'] = `${100 / num - 0.2}%`;
      box.textContent = i;
      container.appendChild(box);
    }
  }
}

const clearBoxes = () => {
  container.textContent = '';
  setTimeout(() => {
    createBox(prompt('Please enter another number (less than 100)'));
  }, 100);
};

// Event Listener / Event Delegation
document.addEventListener('mouseover', (event) => {
  if (event.target && event.target.matches('div')) {
    event.target.style['background-color'] = '#e84393'
  }
});

clear.addEventListener('click', clearBoxes);

createBox(prompt('Please enter any number (less than 100)'));
