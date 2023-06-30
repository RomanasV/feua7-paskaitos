let numbers = document.querySelector('#numbers');

let numberDisplay = document.createElement('h3');
let plus5Button = document.createElement('button');
let plus2Button = document.createElement('button');
let plusButton = document.createElement('button');
let minusButton = document.createElement('button');
let minus2Button = document.createElement('button');
let minus5Button = document.createElement('button');
let resetButton = document.createElement('button');
let addGradeButton = document.createElement('button');
let input = document.createElement('input');
let gradesTitle = document.createElement('h4');
let removeAllGradesButton = document.createElement('button');
let gradesList = document.createElement('ul');

let initialNum = 5;
let num = initialNum;

numberDisplay.textContent = num;
plus5Button.textContent = '+5';
plus2Button.textContent = '+2';
plusButton.textContent = '+';
minusButton.textContent = '-';
minus2Button.textContent = '-2';
minus5Button.textContent = '-5';
resetButton.textContent = 'Reset';
addGradeButton.textContent = 'Add Grade';
gradesTitle.textContent = 'Grades:';
removeAllGradesButton.textContent = 'Remove All Grades';

input.type = 'number';
input.max = 10;
input.min = 1;
input.value = num;

numbers.append(numberDisplay, input, minus5Button, minus2Button, minusButton, plusButton, plus2Button, plus5Button, resetButton, addGradeButton, gradesTitle, removeAllGradesButton, gradesList);

checkData();

plusButton.addEventListener('click', () => checkData(1));
plus2Button.addEventListener('click', () => checkData(2));
plus5Button.addEventListener('click', () => checkData(5));
minusButton.addEventListener('click', () => checkData(-1));
minus2Button.addEventListener('click', () => checkData(-2));
minus5Button.addEventListener('click', () => checkData(-5));

resetButton.addEventListener('click', () => {
  num = initialNum;
  checkData();
})

input.addEventListener('input', () => {
  num = Number(input.value);
  checkData();
})

addGradeButton.addEventListener('click', () => {
  let gradeItem = document.createElement('li');
  gradeItem.classList.add('grade-item');
  gradeItem.textContent = num;

  gradeItem.style.color = numberDisplay.style.color;

  let gradeRemoveButton = document.createElement('button');
  gradeRemoveButton.textContent = 'x';

  gradeRemoveButton.addEventListener('click', () => {
    gradeItem.remove();
  })

  gradeItem.append(gradeRemoveButton);

  gradesList.prepend(gradeItem);

  num = initialNum;
  checkData();
})

removeAllGradesButton.addEventListener('click', () => {
  let allGrades = document.querySelectorAll('li.grade-item');

  allGrades.forEach(gradeItem => {
    gradeItem.remove();
  })
})

function changeColor() {
  if (num >= 5) {
    numberDisplay.style.color = 'green';
  } else {
    numberDisplay.style.color = 'red';
  }
}

function checkData(nth = 0) {
  num += nth;
  numberDisplay.textContent = num;
  input.value = num;

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

  changeColor();
}