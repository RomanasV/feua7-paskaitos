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
    return `${days} days - ${minutes} minutes`;
  } 
  
  if (format === 'hours') {
    let hours = days * 24;
    return `${days} days - ${hours} hours`;
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