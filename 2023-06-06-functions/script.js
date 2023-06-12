console.groupCollapsed('Function basics');

// UŽDUOTIS:
// Į konsole išvesti apskaičiuotus keturkampio perimetrus pagal šias kraštines:
// 1. 10 ilgis ir 10 plotis.
// 2. 10 ilgis ir 25 plotis.
// 3. 10 ilgis ir 30 plotis.
// 4. 10 ilgis ir 35 plotis.
// 5. 10 ilgis ir 40 plotis.
// 6. 10 ilgis ir 45 plotis.
// 7. 10 ilgis ir 50 plotis.
// 8. 10 ilgis ir 55 plotis.
// 9. 10 ilgis ir 60 plotis.
// 10. 10 ilgis ir 120 plotis.

// console.log('Perimetras: ' + (10 + 10) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 25) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 30) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 35) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 40) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 45) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 50) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 55) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 60) * 2 + ' cm.');
// console.log('Perimetras: ' + (10 + 120) * 2 + ' cm.');

// Globalus ir lokalus scope
let num = 5;

function func(globalNum) {
  let num = 10;
  console.log(num);
  console.log(globalNum);

  let num2 = 20;
  console.log(num2);
}

func(num);

// DRY - Don't Repeat Yourself

// FUNKCIJA
// Funkcijos kūrimas:
// 1. Iniciamo žodelis (function)
// 2. Pavadinimas
// 3. Paprasti skliaustai () - funkcijos argumentai
// 4. Riestiniai skliaustai {} - funkcijos apibrėžimas

function hello() {
  return 'Hello, John!';
}

// Funkcijos iškvietimas:
// 1. Funkcijos pavadinimas
// 2. Paprasti skliasutai ()

console.log(hello());
document.querySelector('h1').textContent = hello();

let helloText = hello();
console.log('Pasisveikinimas: ' + helloText);
console.log('Pasisveikinimas: ' + hello());

function helloWithName(name, surname) {
  if (surname) {
    return `Hello, ${name} ${surname}`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(helloWithName('John'));
console.log(helloWithName('Steve', 'Steve'));

// function getPerimeter(width, length, units) {
//   if (width > 0 && length > 0) {
//     let perimeter = (width + length) * 2;

//     let unitsText = 'vnt';

//     if (units) {
//       unitsText = units;
//     }
    
//     console.log(`Perimetras: ${perimeter} ${unitsText}.`);
//   } else {
//     console.log('ERROR: duomenys įvesti neteisingai...');
//   }
// }

// function getPerimeter(width, length, units = 'vnt') {
//   if (width > 0 && length > 0) {
//     let perimeter = (width + length) * 2;
    
//     return `Perimetras: ${perimeter} ${units}.`;
//   } else {
//     return 'ERROR: duomenys įvesti neteisingai...';
//   }
// }

function getPerimeter(width, length, units = 'vnt') {
  if (width > 0 && length > 0) {
    let perimeter = (width + length) * 2;
    
    return `Perimetras: ${perimeter} ${units}.`;
  }
  
  return 'ERROR: duomenys įvesti neteisingai...';
}

console.log(getPerimeter(10, 10, 'cm'));
document.querySelector('h1').textContent = getPerimeter(10, 10, 'm');
// getPerimeter(10, 10, 'km');
// getPerimeter(10, 10);
// getPerimeter(10, -15);
// getPerimeter();
// getPerimeter(10);


// Užduotis 1:
// 1. Sukurti funkciją, kuri skaičiuotų stačiakampio plotą.
// 2. Funkcija turi priimti tris argumentus (ilgį, plotį ir matavimo vienetą).
// 3. Funkcija turi grąžinti tekstą: „Stačiakampio plotas yra 10 kv. vnt."
// 4. Į konsolę išvesti šios funkcijos rezultatą.

function getRectangleArea(width = 0, length = 0, units = 'vnt') {
  let output = '';

  if (width > 0 && length > 0) { 
    let area = width * length;
    output = `Stačiakampio plotas yra ${area} kv. ${units}.`;
  } else {
    output = 'Neteisingai įvesti duomenys';
  }

  return output;
}

console.log(getRectangleArea(10, 15, 'cm'));
// getRectangleArea(10, 15);
// getRectangleArea(10);
// getRectangleArea();

// Užduotis 2:
// Atlikti tą patį kaip ir pirmoje užduotyje, tačiau apskaičiuoti stačiojo trikampio plotą.
function getTriangleArea(width = 0, length = 0, units = 'vnt') {
  if (width > 0 && length > 0) { 
    let area = width * length / 2;
    let output = `Stačiojo trikampio plotas yra ${area} kv. ${units}.`;
    return output;
  } else {
    return 'Neteisingai įvesti duomenys';
  }
}

console.log(getTriangleArea(15, 10, 'm'));
// getTriangleArea(15, 10);
// getTriangleArea(15);
// getTriangleArea();
// getTriangleArea(-10, 10);

// Užduotis 3:
// Sukurti naują funkciją, kuri apjungtų šias dvi užduotis ir išvestų abu rezultatus.
function getAllArea(shapeWidth, shapeLength, shapeUnits) {
  // return getRectangleArea(shapeWidth, shapeLength, shapeUnits) + ' ' + getTriangleArea(shapeWidth, shapeLength, shapeUnits);

  let rectangleAreaText = getRectangleArea(shapeWidth, shapeLength, shapeUnits);
  let triangleAreaText = getTriangleArea(shapeWidth, shapeLength, shapeUnits);

  return rectangleAreaText + ' ' + triangleAreaText;
}

console.log('-----------');

console.log(getAllArea(15, 10, 'cm'));
// getAllArea(15, 10);
// getAllArea(15);
// getAllArea();

console.groupEnd();

// Sukurti:
// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

// function humanToDogYears(humanAge) {
//   if (humanAge > 0) {
//     let dogYears = humanAge * 7;
//     let output = `${humanAge} žmogaus metai yra ${dogYears} šuns metai.`;
//     return output;
//   } else {
//     return 'Blogai įvestas amžius';
//   }
// }

function humanToDogYears(humanAge) {
  if (humanAge > 0) {
    let dogYears = humanAge * 7;
    let output = `${humanAge} žmogaus metai yra ${dogYears} šuns metai.`;
    return output;
  } 

  return 'Blogai įvestas amžius';
}

console.log(humanToDogYears(2));

// 2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
// 2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
// 2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.

function bookDays(booksPerYear) {
  if (!booksPerYear || booksPerYear < 0) {
    return 'Blogai įvestas skaičius';
  }

  let daysPerBook = (365 / booksPerYear).toFixed(2);
  let output = `Norint perskaityti ${booksPerYear} knygų per metus, vienai knygai perskaityti turėsi ${daysPerBook} dienas.`
  return output;
}

console.log(bookDays(15));

// 3. Funkciją, kuri konvertuoja dienas į savaites:
// 3.1. Funkcija priima vieną argumentą: dienų skaičių.
// 3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.
function daysToWeeks(days) {
  let weeks = (days / 7).toFixed(1);
  let output = `${days} dienos yra ${weeks} savaitės.`;
  return output;
}

console.log(daysToWeeks(17));

// 4. Funkciją, kuri konvertuoja dienas į metus:
// 4.1. Funkcija priima vieną argumentą: dienų skaičių.
// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.

function daysToYears(days) {
  let years = (days / 365).toFixed(2);
  let output = `${days} dienos yra ${years} metai.`;
  return output;
}

console.log(daysToYears(500));

// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną argumentą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.
function yearsToHours(years) {
  let hours = years * 24 * 365;
  let output = `${years} metai yra ${hours} valandų.`;
  return output;
}

console.log(yearsToHours(1));

// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.
function monthsToHours(months) {
  let hours = Math.round(months * 30.45 * 24);
  let output = `${months} mėnesių yra ${hours} valandų.`;
  return output;
}

console.log(monthsToHours(2));

// 7. Funkciją, kuri konvertuoja mėnesius į minutes:
// 7.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.
function monthsToMinutes(months) {
  let minutes = Math.round(months * 30.45 * 24 * 60);
  let output = `${months} mėnesių yra ${minutes} minučių.`;
  return output;
}

console.log(monthsToMinutes(2));


// 8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):
// 8.1. Funkcija priima du argumentus: 
//   8.1.1. Dienų skaičių.
//   8.1.2. Formatą. Galimos formato reikšmės yra:
//     8.1.2.1. minutes
//     8.1.2.2. hours
//     8.1.2.3. weeks
//     8.1.2.4. months
//     8.1.2.5. years
// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.

function convertDays(days, format) {
  if (days <= 0) {
    return 'Blogai įvestos dienos';
  }

  if (format === 'minutes') { 
    let minutes = days * 24 * 60;
    let output = `${days} days - ${minutes} minutes`
    return output;
  } 
  
  if (format === 'hours') {
    let hours = days * 24;
    let output = `${days} days - ${hours} hours`
    return output;
  }
  
  if (format === 'weeks') {
    let weeks = (days / 7).toFixed(1);
    return `${days} days - ${weeks} weeks`;
  } 
  
  if (format === 'months') {
    let months = (days / 30.45).toFixed(1);
    return `${days} days - ${months} months`;
  } 
  
  if (format === 'years') {
    let years = (days / 365).toFixed(2);
    return `${days} days - ${years} years`;
  } 
  
  return 'Blogai nurodytas formatas';
}

console.log(convertDays(5, 'months'));

// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du argumentus: 
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.

function numberChecker(dividend, divisor) {
  let remainder = dividend % divisor;

  if (remainder === 0) {
    return `${dividend} dalinasi iš ${divisor}.`;
  }

  return `Skaičius ${dividend} nesidalina iš ${divisor}. Liekana yra ${remainder}.`;
}

console.log(numberChecker(10, 4));

// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini simbolių skaičių ar neporinį.
// function textChecker(str) {
//   let strLength = str.length;

//   if (strLength % 2 === 0) {
//     return 'Porinis';
//   }

//   return 'Ne porinis';
// }

function textChecker(str) {
  let strLength = str.length;

  let output = (strLength % 2 === 0) ? 'Porinis' : 'Ne porinis';

  return output;
}

console.log(textChecker('labas vakara'));

// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio. 
// 11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
// 11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".

// 11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.

// 11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.

function getLetter(str, num) {
  let strLength = str.length;

  if (isNaN(num)) {
    return 'Privaloma įvesti skaičių';
  }

  if (num === 0) {
    return 'Skaičius negali būti nulis';
  }

  if (strLength < num) {
    let ouptut = `Tekstas "${str}" turi ${strLength} simbolius, o jūs nurodėte grąžinti ${num}.`;
    return ouptut;
  }

  if (num < 0) {
    let letterFromEnd = str.at(num);
    let letterIndexFromEnd = num * -1;

    let output = `Teksto "${str}" ${letterIndexFromEnd} raidė nuo galo yra "${letterFromEnd}".`;
    return output;
  }

  let letterIndex = num - 1;
  let letter = str[letterIndex];

  let output = `Teksto "${str}" ${num} raidė yra "${letter}".`;
  return output;
}

console.log(getLetter('labas', -50));





function streetLight(originalLight) {
  let light = originalLight.toLowerCase();

  if (light === 'green') {
    return 'Galima eiti';
  }
  
  if (light === 'yellow') {
    return 'Pasiruošk';
  }

  if (light === 'red') {
    return 'STOP';
  }

  return 'Sugedo :(';
}

console.log(streetLight('red'));





// function lotteryTicket(age) {
//   if (age < 0) {
//     return 'Amžius privalo būti teigiamas skaičius';
//   }
  
//   if (age < 16) {
//     return 'Pirkti bilieto negalima';
//   }
  
//   if(age < 18) {
//     return 'Pirkti bilietą galima su tėvų sutikimu';
//   }
  
//   if (age < 110) {
//     return  'Pirkti bilieta galima';
//   }

//   return 'Įvestas amžius yra per didelis';
// }

// let lotteryTicket = function(age) {
//   if (age < 0) {
//     return 'Amžius privalo būti teigiamas skaičius';
//   }
  
//   if (age < 16) {
//     return 'Pirkti bilieto negalima';
//   }
  
//   if(age < 18) {
//     return 'Pirkti bilietą galima su tėvų sutikimu';
//   }
  
//   if (age < 110) {
//     return  'Pirkti bilieta galima';
//   }

//   return 'Įvestas amžius yra per didelis';
// }

let lotteryTicket = age => {
  if (age < 0) {
    return 'Amžius privalo būti teigiamas skaičius';
  }
  
  if (age < 16) {
    return 'Pirkti bilieto negalima';
  }
  
  if(age < 18) {
    return 'Pirkti bilietą galima su tėvų sutikimu';
  }
  
  if (age < 110) {
    return  'Pirkti bilieta galima';
  }

  return 'Įvestas amžius yra per didelis';
}

console.log(lotteryTicket(5))
console.log(lotteryTicket(15))
console.log(lotteryTicket(17))
console.log(lotteryTicket(20))


let checkPassword = originalPassword => {
  if (!originalPassword.includes('#')) {
    return 'Grodažymės yra privalomos';
  }

  let password = originalPassword.trim();
  let passwordLength = password.length;

  if (passwordLength < 16) {
    return 'Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.';
  }
  
  if (passwordLength < 21) {
    return 'Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.';
  } 

  return 'Slaptažodis tinkamas';
}

console.log(checkPassword('asdjashd#kjasdsdf'))

function getGreeting(isLoggedIn, personName, time, isBirthday) {
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
  
  return greetingText + nameText + birthdayText;
}

console.log(getGreeting(true, 'John', 5, false));
console.log(getGreeting(false, 'Steve', 5, false));
console.log(getGreeting(true, 'Steve', 18, true));

function checkAge(age) {
  let ageOutput = '';

  if (age < 0) {
    ageOutput = 'Įvestas amžius yra per mažas. Turi būti teigiamas skaičius.';
  } else if (age < 6) {
    ageOutput = 'Į mokyklą neina';
  } else if (age < 7) {
    ageOutput = 'Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.';
  } else if (age < 10) {
    ageOutput = 'Pradinukas';
  } else if (age < 11) {
    ageOutput = 'Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.';
  } else if (age < 14) {
    ageOutput = 'Pagrindinė';
  } else if (age < 15) {
    ageOutput = 'Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.';
  } else if (age < 18) {
    ageOutput = 'Gimnazija';
  } else if (age < 19) {
    ageOutput = 'Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.';
  } else if (age < 120) {
    ageOutput = 'Mokyklą baigė';
  } else {
    ageOutput = 'Įvestas amžius per didelis';
  }

  return ageOutput;
}

console.log(checkAge(7));
console.log(checkAge(10));
console.log(checkAge(18));
console.log(checkAge(25));

function gameLevel1() {
  // Kiek bus 123 + 456 = 579
  let correctAnswer11 = 579;
  // Kaip vadinasi arčiausiai Žemės esanti žvaigždė? sun
  let correctAnswer12 = 'sun';

  // let playerAnswer11 = 464;
  // let playerAnswer12 = 'sun';
  
  let playerAnswer11 = prompt('Kiek bus 123 + 456?');
  let playerAnswer12 = prompt('Kaip vadinasi arčiausiai Žemės esanti žvaigždė?');

  if (correctAnswer11 == playerAnswer11 && correctAnswer12 == playerAnswer12) {
    alert('Patekai į kitą lygį. Abu atsakymai teisingi.');
    gameLevel2();
  } else if (correctAnswer11 == playerAnswer11) {
    alert('Patekai į kitą lygį. Tačiau antras atsakymas buvo neteisingas.');
    gameLevel2();
  } else if (correctAnswer12 == playerAnswer12) {
    alert('Patekai į kitą lygį. Tačiau pirmas atsakymas buvo neteisingas.');
    gameLevel2();
  } else {
    alert('Nepatekai į kitą lygį. Abu atsakymai buvo neteisingi :(');
  }
}

// gameLevel1();

function gameLevel2() {
  let correctAnswer21 = 1;
  let correctAnswer22 = 1;

  let playerAnswer21 = prompt('Antras lygis. Pirmas klausimas');
  let playerAnswer22 = prompt('Antras lygis. Antras klausimas');

  if (correctAnswer21 == playerAnswer21 && correctAnswer22 == playerAnswer22) {
    alert('Patekai į kitą lygį. Abu atsakymai teisingi.');
    gameLevel3();
  } else if (correctAnswer21 == playerAnswer21) {
    alert('Nepatekai į kitą lygį. Tačiau pirmas atsakymas buvo teisingas.');
  } else if (correctAnswer22 == playerAnswer22) {
    alert('Nepatekai į kitą lygį. Tačiau antras atsakymas buvo teisingas.');
  } else {
    alert('Nepatekai į kitą lygį. Abu atsakymai buvo neteisingi :(');
  }
}

function gameLevel3() {
  let correctAnswer31 = 1;
  let correctAnswer32 = 1;
  let correctAnswer33 = 1;

  let playerAnswer31 = prompt('Trecias lygis: pirmas klausimas');
  let playerAnswer32 = prompt('Trecias lygis: antras klausimas');
  let playerAnswer33 = prompt('Trecias lygis: trecias klausimas');

  let answer31 = correctAnswer31 == playerAnswer31;
  let answer32 = correctAnswer32 == playerAnswer32;
  let answer33 = correctAnswer33 == playerAnswer33;

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

  alert(output);
}

function loopTask1(start, end, nth) {
  let ulElement = document.querySelector('ul');
  
  for (let i = start; i <= end; i = i + nth) {
    let answer = i * 2;
    let output = `${i} * 2 = ${answer}`;

    let liElement = document.createElement('li');
    liElement.textContent = output;
    ulElement.append(liElement);
  }
}

loopTask1(10, 70, 7);

function fizzBuzzTask(start, end) {
  let ulElement = document.querySelector('#fizz-buzz');

  for (let i = start; i <= end; i++) {
    let output = '';
  
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    if (i % 7 === 0) output += 'Biff';
    if (i % 9 === 0) output += 'Fuzz';
    if (i % 11 === 0) output += 'Bizz';
    if (i % 13 === 0) output += 'Buff';
  
    if (!output) output = i;
  
    let liElement = document.createElement('li');
    liElement.textContent = output;
    ulElement.append(liElement);
  
    if (i > 200) {
      liElement.style.color = 'green';
    } else if (i > 100) {
      liElement.style.color = 'orange';
    }
  }
}

fizzBuzzTask(1, 78);