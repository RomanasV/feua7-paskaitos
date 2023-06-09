// Įprasta funkcija
function func1() {
  return 2 + 2;
}
console.log(func1());

// Įprasta funkcija su parametru
function func2(num) {
  return num + num;
}
console.log(func2(3));

// Įprasta funkcija su parametrais
function func3(num1, num2) {
  return num1 + num2;
}
console.log(func3(3, 4));


// Sukuriamas kintamasis ir jam, kaip reikšmė priskiriama anoniminė funkcija
let func4 = function(num1, num2) {
  return num1 + num2;
}
console.log(func4(4, 5));



// ARROW FUNCTION
// 1. Sukurti kintamąjį
// 2. Priskirti reikšmę
// 2.1. Paprasti skliaustai ()
// 2.2. Rodyklė =>
// 2.3. Riestiniai skliaustai {}


let arrowFunc1 = () => {
  return 2 * 2;
}
console.log(arrowFunc1());

let arrowFunc3 = (num1, num2) => {
  return num1 * num2;
}
console.log(arrowFunc3(4, 5));

let arrowFunc2 = (num) => {
  return num * num;
}
console.log(arrowFunc2(5));

// Jeigu arrow funkcija turi vieną parametrą, tai galima nerašyti paprastų skliaustų. Jeigu neturi nei vieno parametro arba jų turi daugiau nei vieną, tai paprasti skliaustai yra būtini.
let arrowFunc4 = num => {
  return num * num;
}
console.log(arrowFunc4(6));

// Jeigu funkcijos veiksmas aprašomas vienoje eilutėje (arba funkciją grąžina reikšmę), tai galima nerašyti žodelio return ir riestinių skliaustų.
let arrowFunc5 = num => num * num;
console.log(arrowFunc5(7));

let arrowFunc6 = (num1, num2) => num1 * num2;
console.log(arrowFunc6(5, 7));