// Pridėti localStorage reikšmę
localStorage.setItem('test', 'sveikas');

// Gauti localStorage reikšmę
console.log(localStorage.getItem('test'));

// Pašalinti localStorage reikšmę
localStorage.removeItem('test');

let num = 5;
console.log(typeof num);

localStorage.setItem('localNum', num);

console.log(localStorage.getItem('localNum'));
console.log(typeof localStorage.getItem('localNum'));

const obj = {
  name: 'John',
  age: 25
}

console.log(obj);
console.log(typeof obj);

localStorage.setItem('localObj', obj);

console.log(localStorage.getItem('localObj'));
console.log(typeof localStorage.getItem('localObj'));

const arr = [1, 5, 'labas', 'sveikas', [0, 1, 5]];

console.log(arr);
console.log(typeof arr);

localStorage.setItem('localArr', arr);

const arrFromLocalStorage = localStorage.getItem('localArr');

console.log(arrFromLocalStorage);
console.log(typeof arrFromLocalStorage);


// Originalus objektas
const initialObj = {
  name: 'John',
  age: 30
}

console.log(initialObj);
console.log(typeof initialObj);

// Objekto keitimas į string (JSON objektą)
const jsonObj = JSON.stringify(initialObj);
console.log(jsonObj);
console.log(typeof jsonObj);

localStorage.setItem('jsonObj', jsonObj);

const jsonObjFromLocalStorage = localStorage.getItem('jsonObj');
console.log(jsonObjFromLocalStorage);
console.log(typeof jsonObjFromLocalStorage);

// String (JSON objekto) atvertimas į objektą
const jsonToObj = JSON.parse(jsonObjFromLocalStorage);
console.log(jsonToObj);
console.log(typeof jsonToObj);
console.log(jsonToObj.name);
console.log(jsonToObj.age);



const nameInputLocalStorage = localStorage.getItem('name-input');

const nameInput = document.querySelector('#name');

if (nameInputLocalStorage) {
  nameInput.value = nameInputLocalStorage;
}

nameInput.addEventListener('input', () => {
  localStorage.setItem('name-input', nameInput.value);
})





const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let localStorageArr = JSON.parse(localStorage.getItem('input-arr'));

  if (!localStorageArr) {
    localStorageArr = [];
  }

  localStorageArr.push(nameInput.value);

  localStorage.setItem('input-arr', JSON.stringify(localStorageArr));
})

const localStorageData = JSON.parse(localStorage.getItem('input-arr'));
console.log(localStorageData);

if (localStorageData) {
  const ulElement = document.querySelector('ul');

  localStorageData.forEach(item => {
    const itemElement = document.createElement('li');
    itemElement.textContent = item;

    ulElement.prepend(itemElement);
  })
}