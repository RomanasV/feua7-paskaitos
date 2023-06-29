// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
let numbers = document.querySelector('#numbers');

// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"

let numberDisplay = document.createElement('h3');
let plusButton = document.createElement('button');
let minusButton = document.createElement('button');

let num = 5;

numberDisplay.textContent = num;
plusButton.textContent = '+';
minusButton.textContent = '-';

numbers.append(numberDisplay, minusButton, plusButton);

// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti


plusButton.addEventListener('click', () => {
  // num = num + 1;
  num++;
  numberDisplay.textContent = num;

  if (num > 9) {
    plusButton.setAttribute('disabled', true);
  }

  if (num >= 2) {
    minusButton.removeAttribute('disabled');
  }
})

minusButton.addEventListener('click', () => {
  // num = num - 1;
  num--;
  numberDisplay.textContent = num;

  if (num <= 9) {
    plusButton.removeAttribute('disabled');
  }

  if (num < 2) {
    minusButton.setAttribute('disabled', true);
  }
})