// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
let numbers = document.querySelector('#numbers');

// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"

let numberDisplay = document.createElement('h3');
let plusButton = document.createElement('button');
let minusButton = document.createElement('button');
let resetButton = document.createElement('button');
let input = document.createElement('input');

let initialNum = 5;

let num = initialNum;

numberDisplay.textContent = num;
plusButton.textContent = '+';
minusButton.textContent = '-';
resetButton.textContent = 'Reset';

input.type = 'number';
input.max = 10;
input.min = 1;
input.value = num;

changeColor();

numbers.append(numberDisplay, input, minusButton, plusButton, resetButton);

// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti


plusButton.addEventListener('click', () => {
  // num = num + 1;
  num++;
  numberDisplay.textContent = num;
  input.value = num;

  if (num > 9) {
    plusButton.setAttribute('disabled', true);
  }

  if (num >= 2) {
    minusButton.removeAttribute('disabled');
  }

  changeColor();
})

minusButton.addEventListener('click', () => {
  // num = num - 1;
  num--;
  numberDisplay.textContent = num;
  input.value = num;

  if (num <= 9) {
    plusButton.removeAttribute('disabled');
  }

  if (num < 2) {
    minusButton.setAttribute('disabled', true);
  }

  changeColor();
})

resetButton.addEventListener('click', () => {
  num = initialNum;
  numberDisplay.textContent = num;
  input.value = num;
  plusButton.removeAttribute('disabled');
  minusButton.removeAttribute('disabled');
  changeColor();
})

input.addEventListener('input', () => {
  num = input.value;
  numberDisplay.textContent = num;
  changeColor();

  if (num <= 9) {
    plusButton.removeAttribute('disabled');
  } else {
    plusButton.setAttribute('disabled', true);
  }

  if (num >= 2) {
    minusButton.removeAttribute('disabled');
  } else {
    minusButton.setAttribute('disabled', true);
  }
})

function changeColor() {
  if (num >= 5) {
    numberDisplay.style.color = 'green';
  } else {
    numberDisplay.style.color = 'red';
  }
}