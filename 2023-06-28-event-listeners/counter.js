// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
let numbers = document.querySelector('#numbers');

// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"

let numberDisplay = document.createElement('h3');
let plus5Button = document.createElement('button');
let plus2Button = document.createElement('button');
let plusButton = document.createElement('button');
let minusButton = document.createElement('button');
let minus2Button = document.createElement('button');
let minus5Button = document.createElement('button');
let resetButton = document.createElement('button');
let input = document.createElement('input');

let initialNum = 1;

let num = initialNum;

numberDisplay.textContent = num;
plus5Button.textContent = '+5';
plus2Button.textContent = '+2';
plusButton.textContent = '+';
minusButton.textContent = '-';
minus2Button.textContent = '-2';
minus5Button.textContent = '-5';
resetButton.textContent = 'Reset';

input.type = 'number';
input.max = 10;
input.min = 1;
input.value = num;

checkData();
changeColor();

numbers.append(numberDisplay, input, minus5Button, minus2Button, minusButton, plusButton, plus2Button, plus5Button, resetButton);

// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti


plusButton.addEventListener('click', () => {
  // num = num + 1;
  num++;
  numberDisplay.textContent = num;
  input.value = num;

  checkData();

  changeColor();
})

plus2Button.addEventListener('click', () => {
  num += 2;
  numberDisplay.textContent = num;
  input.value = num;

  checkData();

  changeColor();
})

plus5Button.addEventListener('click', () => {
  num += 5;
  numberDisplay.textContent = num;
  input.value = num;

  checkData();

  changeColor();
})

minusButton.addEventListener('click', () => {
  // num = num - 1;
  num--;
  numberDisplay.textContent = num;
  input.value = num;

  checkData();

  changeColor();
})

minus2Button.addEventListener('click', () => {
  num -= 2;
  numberDisplay.textContent = num;
  input.value = num;

  checkData();

  changeColor();
})

minus5Button.addEventListener('click', () => {
  num -= 5;
  numberDisplay.textContent = num;
  input.value = num;

  checkData();

  changeColor();
})

resetButton.addEventListener('click', () => {
  num = initialNum;
  numberDisplay.textContent = num;
  input.value = num;
  checkData();
  changeColor();
})

input.addEventListener('input', () => {
  num = input.value;
  numberDisplay.textContent = num;
  checkData();

  changeColor();
})

function changeColor() {
  if (num >= 5) {
    numberDisplay.style.color = 'green';
  } else {
    numberDisplay.style.color = 'red';
  }
}

function checkData() {
  if (num > 9) {
    plusButton.setAttribute('disabled', true);
  } else {
    plusButton.removeAttribute('disabled');
  }
  
  if (num > 8) {
    plus2Button.setAttribute('disabled', true);
  } else {
    plus2Button.removeAttribute('disabled');
  }
  
  if (num > 5) {
    plus5Button.setAttribute('disabled', true);
  } else {
    plus5Button.removeAttribute('disabled');
  }
  
  if (num < 2) {
    minusButton.setAttribute('disabled', true);
  } else {
    minusButton.removeAttribute('disabled');
  }

  if (num < 3) {
    minus2Button.setAttribute('disabled', true);
  } else {
    minus2Button.removeAttribute('disabled');
  }

  if (num < 6) {
    minus5Button.setAttribute('disabled', true);
  } else {
    minus5Button.removeAttribute('disabled');
  }
}