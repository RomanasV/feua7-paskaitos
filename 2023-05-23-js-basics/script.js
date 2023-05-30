console.groupCollapsed('JavaScript Basics');

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

let originalPassword = 'aasdads#afdsdfsdfsdfsdfds';
let password = originalPassword.trim();
let passwordLength = password.length;

console.log(password);

if (!password.includes('#')) {
  console.log('Grodažymės yra privalomos');
} else if (passwordLength < 16) {
  console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.');
} else {

  if (passwordLength >= 21) {
    console.log('Slaptažodis tinkamas');
  } else {
    console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
  }
  
}

if (!password.includes('#')) {
  console.log('Grodažymės yra privalomos');
} else if (passwordLength < 16) {
  console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.');
} else if (passwordLength < 21) {
  console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
} else {
  console.log('Slaptažodis tinkamas');
}
  

// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.

// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// 7.3. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."

let age = 7;

if (age < 0) {
  console.log('Įvestas amžius yra per mažas. Turi būti teigiamas skaičius.');
} else if (age < 6) {
  console.log('Į mokyklą neina');
} else if (age < 7) {
  console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.');
} else if (age < 10) {
  console.log('Pradinukas');
} else if (age < 11) {
  console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.');
} else if (age < 14) {
  console.log('Pagrindinė');
} else if (age < 15) {
  console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.');
} else if (age < 18) {
  console.log('Gimnazija');
} else if (age < 19) {
  console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.');
} else if (age < 120) {
  console.log('Mokyklą baigė')
} else {
  console.log('Įvestas amžius per didelis');
}

console.groupEnd();

// UŽDUOTIS: sukurti galvosūkį su keletu klausimu
// PIRMAS LYGIS: 
// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

// Kiek bus 123 + 456 = 579
let correctAnswer11 = 579;
// Kaip vadinasi arčiausiai Žemės esanti žvaigždė? sun
let correctAnswer12 = 'sun';

let playerAnswer11 = 464;
let playerAnswer12 = 'sun';

if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
  console.log('Patekai į kitą lygį. Abu atsakymai teisingi.');
} else if (correctAnswer11 === playerAnswer11) {
  console.log('Patekai į kitą lygį. Tačiau antras atsakymas buvo neteisingas.');
} else if (correctAnswer12 === playerAnswer12) {
  console.log('Patekai į kitą lygį. Tačiau pirmas atsakymas buvo neteisingas.');
} else {
  console.log('Nepatekai į kitą lygį. Abu atsakymai buvo neteisingi :(');
}

// ANTRAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.

let correctAnswer21 = 1;
let correctAnswer22 = 1;

let playerAnswer21 = 1;
let playerAnswer22 = 0;

if (correctAnswer21 === playerAnswer21 && correctAnswer22 === playerAnswer22) {
  console.log('Patekai į kitą lygį. Abu atsakymai teisingi.');
} else if (correctAnswer21 === playerAnswer21) {
  console.log('Nepatekai į kitą lygį. Tačiau pirmas atsakymas buvo teisingas.');
} else if (correctAnswer22 === playerAnswer22) {
  console.log('Nepatekai į kitą lygį. Tačiau antras atsakymas buvo teisingas.');
} else {
  console.log('Nepatekai į kitą lygį. Abu atsakymai buvo neteisingi :(');
}

// TREČIAS LYGIS: 
// 1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
// 2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
// 3. Jeigu atsakomi mažiau nei du klausimai, tai turi būti parodoma, kuris klausimas buvo atsakytas.

// let correctAnswer31 = 1;
// let correctAnswer32 = 1;
// let correctAnswer33 = 1;

// let playerAnswer31 = 1;
// let playerAnswer32 = 1;
// let playerAnswer33 = 1;

// if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   console.log('Patekai į kitą lygį. Visi atsakymai teisingi.');
// } else if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32) {
//   console.log('Patekai į kitą lygį. Tačiau trečias atsakymas buvo neteisingas.');
// } else if (correctAnswer31 === playerAnswer31 && correctAnswer33 === playerAnswer33) {
//   console.log('Patekai į kitą lygį. Tačiau antras atsakymas buvo neteisingas.');
// } else if (correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   console.log('Patekai į kitą lygį. Tačiau pirmas atsakymas buvo neteisingas.');
// } else if (correctAnswer31 === playerAnswer31) {
//   console.log('Nepatekai į kitą lygį. Tačiau pirmas atsakymas buvo teisingas.');
// } else if (correctAnswer32 === playerAnswer32) {
//   console.log('Nepatekai į kitą lygį. Tačiau antras atsakymas buvo teisingas.');
// } else if (correctAnswer33 === playerAnswer33) {
//   console.log('Nepatekai į kitą lygį. Tačiau trečias atsakymas buvo teisingas.');
// } else {
//   console.log('Nepatekai į kitą lygį. Visi atsakymai buvo neteisingi.');
// }


// let correctAnswer31 = 1;
// let correctAnswer32 = 1;
// let correctAnswer33 = 1;

// let playerAnswer31 = 1;
// let playerAnswer32 = 1;
// let playerAnswer33 = 1;

// let output = '';

// if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   output = 'Patekai į kitą lygį. Visi atsakymai teisingi.';
// } else if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32) {
//   output = 'Patekai į kitą lygį. Tačiau trečias atsakymas buvo neteisingas.';
// } else if (correctAnswer31 === playerAnswer31 && correctAnswer33 === playerAnswer33) {
//   output = 'Patekai į kitą lygį. Tačiau antras atsakymas buvo neteisingas.';
// } else if (correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   output = 'Patekai į kitą lygį. Tačiau pirmas atsakymas buvo neteisingas.';
// } else if (correctAnswer31 === playerAnswer31) {
//   output = 'Nepatekai į kitą lygį. Tačiau pirmas atsakymas buvo teisingas.';
// } else if (correctAnswer32 === playerAnswer32) {
//   output = 'Nepatekai į kitą lygį. Tačiau antras atsakymas buvo teisingas.';
// } else if (correctAnswer33 === playerAnswer33) {
//   output = 'Nepatekai į kitą lygį. Tačiau trečias atsakymas buvo teisingas.';
// } else {
//   output = 'Nepatekai į kitą lygį. Visi atsakymai buvo neteisingi.';
// }

// console.log(output);



let correctAnswer31 = 1;
let correctAnswer32 = 1;
let correctAnswer33 = 1;

let playerAnswer31 = 1;
let playerAnswer32 = 1;
let playerAnswer33 = 1;

let answer31 = correctAnswer31 === playerAnswer31;
let answer32 = correctAnswer32 === playerAnswer32;
let answer33 = correctAnswer33 === playerAnswer33;

let successMessage = 'Patekai į kitą lygį!';
let failMessage = 'Nepatekai į kitą lygį.';

let output = '';

if (answer31 && answer32 && answer33) {
  output = successMessage + ' Visi atsakymai teisingi.';
} else if (answer31 && answer32) {
  output = successMessage + ' Tačiau trečias atsakymas buvo neteisingas.';
} else if (answer31 && answer33) {
  output = successMessage + ' Tačiau antras atsakymas buvo neteisingas.';
} else if (answer32 && answer33) {
  output = successMessage + ' Tačiau pirmas atsakymas buvo neteisingas.';
} else if (answer31) {
  output = failMessage + ' Tačiau pirmas atsakymas buvo teisingas.';
} else if (answer32) {
  output = failMessage + ' Tačiau antras atsakymas buvo teisingas.';
} else if (answer33) {
  output = failMessage + ' Tačiau trečias atsakymas buvo teisingas.';
} else {
  output = failMessage + ' Visi atsakymai buvo neteisingi.';
}

console.log(output);


// Sukurti vertinimo sistemą, kuri skaitinį vertinimą paverčia į žodžius:
// 1 - Labai blogai
// 2 - Blogai
// 3 - Vidutiniškai
// 4 - Gerai
// 5 - Puikiai
// Vertinimą reikia įvesti per prompt.

// let grade = prompt('Enter your grade:');
let grade = 10;

console.log(grade);
console.log(typeof grade);
console.log(isNaN(grade));

if (isNaN(grade)) {
  console.log('Privaloma įvesti skaičių.');
} else if (grade == 1) {
  console.log('Labai blogai');
} else if (grade == 2) {
  console.log('Blogai');
} else if (grade == 3) {
  console.log('Vidutiniškai');
} else if (grade == 4) {
  console.log('Gerai');
} else if (grade == 5) {
  console.log('Puikiai');
} else {
  console.log('Įvestas skaičius yra neteisingas. Reikia įvesti skaičių nuo 1 iki 5');
}



// SWITCH
let streetLight = 'adasd';

// if (streetLight === 'green') {
//   console.log('Galima eiti!');
// } else if (streetLight === 'yellow') {
//   console.log('Pasiruošk');
// } else if (streetLight === 'red') {
//   console.log('STOP!');
// } else {
//   console.log('Sugedo :(');
// }


switch (streetLight) {
  case 'green':
    console.log('Galima eiti!');
    break;
    
  case 'yellow':
    console.log('Pasiruošk');
    break;
    
  case 'red':
    console.log('STOP');
    break;

  default:
    console.log('Sugedo');
    break;
}

let personGrade = 4;

switch (personGrade) {
  case 1:
  case 2:
  case 3:
    console.log('Labai blogai');
    break;
  case 4:
  case 5:
  case 6:
    console.log('Blogai');
    break;
  case 7:
  case 8:
  case 9:
    console.log('Vidutiniškai');
    break;
  case 10:
  case 11:
  case 12:
    console.log('Gerai');
    break;
  case 13:
  case 14:
  case 15:
    console.log('Puikiai');
    break;
  default:
    console.log('Įvestas skaičius yra neteisingas. Reikia įvesti skaičių nuo 1 iki 5');
    break;
}


// Pasisveikinimas
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning.".
// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 3.4. Jeigu įrašytas blogas laikas, tai turi pasisveikinti "Hello"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"

// PASISVEIKINIMAS

// PIRMAS BŪDAS
// let isLoggedIn = true;
// let personName = 'John';
// let time = 16;
// let isBirthday = true;

// let greetingOutput = '';

// if (time >= 5 && time < 13) {

//   if (isLoggedIn && isBirthday) {
//     greetingOutput ='Good Morning, ' + personName + ' and have a great birthday.';
//   } else if (isLoggedIn) {
//     greetingOutput ='Good Morning, ' + personName;
//   } else {
//     greetingOutput ='Good Morning';
//   }

// } else if (time >= 13 && time < 19) {

//   if (isLoggedIn && isBirthday) {
//     greetingOutput ='Good Afternoon, ' + personName + ' and have a great birthday.';
//   } else if (isLoggedIn) {
//     greetingOutput ='Good Afternoon, ' + personName;
//   } else {
//     greetingOutput ='Good Afternoon';
//   }

// } else if (time >= 19 && time < 24 || time >= 0 && time < 5) {

//   if (isLoggedIn && isBirthday) {
//     greetingOutput ='Good Evening, ' + personName + ' and have a great birthday.';
//   } else if (isLoggedIn) {
//     greetingOutput ='Good Evening, ' + personName;
//   } else {
//     greetingOutput ='Good Evening';
//   }

// } else {

//   if (isLoggedIn && isBirthday) {
//     greetingOutput ='Hello, ' + personName + ' and have a great birthday.';
//   } else if (isLoggedIn) {
//     greetingOutput ='Hello, ' + personName;
//   } else {
//     greetingOutput ='Hello';
//   }

// }

// console.log(greetingOutput);

// ANTRAS BŪDAS
let isLoggedIn = true;
let personName = 'John';
let time = 1;
let isBirthday = false;

let greetingText = '';
let nameText = '';
let birthdayText = '';

if (time >= 5 && time < 13) {
  greetingText = 'Good Morning';
} else if (time >= 13 && time < 19) {
  greetingText = 'Good Afternoon';
} else if (time >= 19 && time < 24 || time >= 0 && time < 5) {
  greetingText = 'Good Evening';
} else {
  greetingText = 'Hello';
}

if (isLoggedIn && personName) {
  nameText = ', ' + personName;
}

if (isLoggedIn && isBirthday) {
  birthdayText = ' and have a great birthday!';
}

console.log(greetingText + nameText + birthdayText);