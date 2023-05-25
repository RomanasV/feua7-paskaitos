// Kintamojo sukūrimas:
// 1. Iniciavimo žodelis (var, let arba const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas
// 4. Kintamojo vertė

var vardas = 'John'; // String (tekstas) duomenų tipas
let pavarde = "Doe"; // String (tekstas) duomenų tipas
let miestas = `Kaunas`; // String (tekstas) duomenų tipas
let yraStudentas = false; // Boolean (true/false) duomenų tipas
let amzius = 30; // Number (skaičius) duomenų tipas
const asmensKodas = 34564564645; // Number (skaičius) duomenų tipas

// typeof parodo kokio tipo duomenys tai yra
console.log(vardas, typeof vardas);
console.log(pavarde, typeof pavarde);
console.log(miestas, typeof miestas);
console.log(amzius, typeof amzius);
console.log(yraStudentas, typeof yraStudentas);
console.log(asmensKodas, typeof asmensKodas);

amzius = 35;
console.log(amzius);

console.log('Hello, ' + vardas + ' ' + pavarde + '.');
console.log("Hello, " + vardas + " " + pavarde + ".");

// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.
console.log('John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.');

console.log(vardas + ' ' + pavarde + ' (amžius ' + amzius + ' m.), asmens kodas: ' + asmensKodas + ', gyvenamasis miestas: ' + miestas + '.');
console.log(vardas + " " + pavarde + " (amžius " + amzius + " m.), asmens kodas: " + asmensKodas + ", gyvenamasis miestas: " + miestas + ".");

console.log(`${vardas} ${pavarde} (amžius ${amzius} m.), asmens kodas: ${asmensKodas}, gyvenamasis miestas: ${miestas}.`);

// John said: "Good morning".
console.log('John said: "Good morning".');
console.log(`John said: "Good morning".`);

// That's my car.
console.log("That's my car.");
console.log(`That's my car.`);

// John said: "That's my car".
console.log(`John said: "That's my car".`);

// John `said`: "That's my car".
console.log("John `said`: " + `"That's my car".`);
console.log('John `said`: "That\'s my car".');
console.log("John `said`: \"That's my car\".");
console.log(`John \`said\`: "That's my car".`);

// John `said`: "That's \my\ car".
console.log("John `said`: " + `"That's \\my\\ car".`);

// John \`said\`: "That's my car".
console.log('John \\`said\\`: "That\'s my car".');
console.log("John \\`said\\`: \"That's my car\".");
console.log(`John \\\`said\\\`: "That's my car".`);

// Matematiniai operatoriai
let num1 = 22;
let num2 = 10;
let num3 = '10';

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log(num1 + num2 * num2);
// console.log(22 + 10 * 10);
// console.log(22 + 100);
// console.log(122);
console.log((num1 + num2) * num2);
// console.log((22 + 10) * 10);
// console.log((32) * 10);
// console.log(320);

console.log(num1 + num3);
console.log(num1 - num3);
console.log(num1 * num3);
console.log(num1 / num3);
console.log(num1 % num3);

console.log(num1 + num3 * num3);
// console.log(22 + '10' * '10');
// console.log(22 + 100);
// console.log(122);

console.log((num1 + num3) * num3);
// console.log((22 + '10') * '10');
// console.log(('2210') * '10');
// console.log(22100);

// SĄLYGOS
// Dviguba lygybė (loosely equal ==): tikrina TIK reikšmes ir nekreipia dėmesio į duomenų tipą.
console.log(10 == 10); // true
console.log('desimt' == 'desimt'); // true
console.log('10' == '10'); // true
console.log(10 == '10'); // true

// Triguba lygybė (strictly qual ===): pirmiausiai tikrina ar sutampa duomenų tipai, o tada tikrina reikšmes.
console.log(10 === 10); // true
console.log('desimt' === 'desimt'); // true
console.log('10' === '10'); // true
console.log(10 === '10'); // false

console.log(10 > 10); // false
console.log(10 < 10); // false
console.log(10 >= 10); // true
console.log(10 <= 10); // true

console.log(10 == 10); // true
console.log(10 != 10); // false

console.log(10 === 10); // true
console.log(10 !== 10); // false
console.log(10 !== '10'); // true

console.log(true); // true
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true

// IF, ELSE IF, ELSE
let originalLight = 'GrEeN';
let light = originalLight.toLowerCase();

// console.log(light === 'green');
// console.log('green' === 'green');
// console.log(true);

// console.log(light === 'green');
// console.log('red' === 'green');
// console.log(false);

// console.log(light === 'green' || light === 'Green' || light === 'GREEN');
// console.log('green' === 'green' || 'green' === 'Green' || 'green' === 'GREEN');
// console.log(true || 'green' === 'Green' || 'green' === 'GREEN');
// console.log(true);

// console.log('Green' === 'green' || 'Green' === 'Green' || 'Green' === 'GREEN');
// console.log(false || 'Green' === 'Green' || 'Green' === 'GREEN');
// console.log(false || true || 'Green' === 'GREEN');
// console.log(true);

// console.log('GREEN' === 'green' || 'GREEN' === 'Green' || 'GREEN' === 'GREEN');
// console.log(false || 'GREEN' === 'Green' || 'GREEN' === 'GREEN');
// console.log(false || false || 'GREEN' === 'GREEN');
// console.log(false || false || true);
// console.log(true);

// console.log('blue' === 'green' || 'blue' === 'Green' || 'blue' === 'GREEN');
// console.log(false || 'blue' === 'Green' || 'blue' === 'GREEN');
// console.log(false || false || 'blue' === 'GREEN');
// console.log(false || false || false);
// console.log(false);

// OR (||) - operator - ar operatorius

if (light === 'green' || light === 'Green' || light === 'GREEN') {
  console.log('Galima eiti!');
} else if (light === 'yellow') {
  console.log('Pasiruošk');
} else if (light === 'red') {
  console.log('STOP!');
} else {
  console.log('Sugedo :(');
}


let personAge = 18;

if (personAge >= 18) {
  console.log('Pirkti bilieta galima');
} else {
  console.log('Pirkti bilieto negalima');
}

if (personAge < 18) {
  console.log('Pirkti bilieto negalima');
} else {
  console.log('Pirkti bilieta galima');
}

if (personAge > 17) {
  console.log('Pirkti bilieta galima');
} else {
  console.log('Pirkti bilieto negalima');
}

if (personAge <= 17) {
  console.log('Pirkti bilieto negalima');
} else {
  console.log('Pirkti bilieta galima');
}

// AND (&&) operator = ir operatorius

// console.log(personAge >= 0 && personAge < 18);
// console.log(18 >= 0 && 18 < 18);
// console.log(true && false);
// console.log(false);

// console.log(15 >= 0 && 15 < 18);
// console.log(true && true);
// console.log(true);

// console.log(-5 < 18 && -5 >= 0);
// console.log(true && false);
// console.log(false);

// console.log(-5 >= 0 && -5 < 18);
// console.log(false && -5 < 18);
// console.log(false);

if (personAge >= 0 && personAge < 18) {
  console.log('Pirkti bilieto negalima');
} else {
  console.log('Pirkti bilieta galima');
}

personAge = 20;

if (personAge >= 0 && personAge < 16) {
  console.log('Pirkti bilieto negalima');
} else if (personAge >= 16 && personAge < 18) {
  console.log('Pirkti bilietą galima su tėvų sutikimu');
} else {
  console.log('Pirkti bilieta galima');
}

// Mažiau už 0
// Mažiau už 16
// Mažiau už 18
// Mažiau už 110
// Viskas kas liko (daugiau už 110)

if (personAge < 0) {
  console.log('Amžius privalo būti teigiamas skaičius');
} else if (personAge < 16) {
  console.log('Pirkti bilieto negalima');
} else if (personAge < 18) {
  console.log('Pirkti bilietą galima su tėvų sutikimu');
} else if (personAge < 110) {
  console.log('Pirkti bilieta galima');
} else {
  console.log('Įvestas amžius yra per didelis');
}


// let password = 'supersdfsdfslaps';
// console.log(password.length);

// SLAPTAŽODIS

// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."

let password   = '                lscszczczasdasdasdasdasdasdsadsdfsdfsdfsdfsdfsdfsczczczc'
