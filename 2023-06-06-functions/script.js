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

console.log('Perimetras: ' + (10 + 10) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 25) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 30) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 35) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 40) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 45) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 50) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 55) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 60) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 120) * 2 + ' cm.');

// DRY - Don't Repeat Yourself

// FUNKCIJA
// Funkcijos kūrimas:
// 1. Iniciamo žodelis (function)
// 2. Pavadinimas
// 3. Paprasti skliaustai () - funkcijos argumentai
// 4. Riestiniai skliaustai {} - funkcijos apibrėžimas

function hello() {
  console.log('Hello, John!');
}

// Funkcijos iškvietimas:
// 1. Funkcijos pavadinimas
// 2. Paprasti skliasutai ()

hello();



function helloWithName(name, surname) {
  if (surname) {
    console.log(`Hello, ${name} ${surname}`);
  } else {
    console.log(`Hello, ${name}`);
  }
}

helloWithName('John');
helloWithName('Steve', 'Steve');

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

function getPerimeter(width, length, units = 'vnt') {
  if (width > 0 && length > 0) {
    let perimeter = (width + length) * 2;
    
    console.log(`Perimetras: ${perimeter} ${units}.`);
  } else {
    console.log('ERROR: duomenys įvesti neteisingai...');
  }
}


getPerimeter(10, 10, 'cm');
getPerimeter(10, 10, 'm');
getPerimeter(10, 10, 'km');
getPerimeter(10, 10);
getPerimeter(10, -15);
getPerimeter();
getPerimeter(10);