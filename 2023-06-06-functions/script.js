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


// Užduotis 1:
// 1. Sukurti funkciją, kuri skaičiuotų stačiakampio plotą.
// 2. Funkcija turi priimti tris argumentus (ilgį, plotį ir matavimo vienetą).
// 3. Funkcija turi grąžinti tekstą: „Stačiakampio plotas yra 10 kv. vnt."
// 4. Į konsolę išvesti šios funkcijos rezultatą.

function getRectangleArea(width = 0, length = 0, units = 'vnt') {
  if (width > 0 && length > 0) { 
    let area = width * length;
    let output = `Stačiakampio plotas yra ${area} kv. ${units}.`;
    console.log(output);
  } else {
    console.log('Neteisingai įvesti duomenys');
  }
}

getRectangleArea(10, 15, 'cm');
getRectangleArea(10, 15);
getRectangleArea(10);
getRectangleArea();

// Užduotis 2:
// Atlikti tą patį kaip ir pirmoje užduotyje, tačiau apskaičiuoti stačiojo trikampio plotą.
function getTriangleArea(width = 0, length = 0, units = 'vnt') {
  if (width > 0 && length > 0) { 
    let area = width * length / 2;
    let output = `Stačiojo trikampio plotas yra ${area} kv. ${units}.`;
    console.log(output);
  } else {
    console.log('Neteisingai įvesti duomenys');
  }
}

getTriangleArea(15, 10, 'm');
getTriangleArea(15, 10);
getTriangleArea(15);
getTriangleArea();
getTriangleArea(-10, 10);

// Užduotis 3:
// Sukurti naują funkciją, kuri apjungtų šias dvi užduotis ir išvestų abu rezultatus.
function getAllArea(shapeWidth, shapeLength, shapeUnits) {
  getRectangleArea(shapeWidth, shapeLength, shapeUnits);
  getTriangleArea(shapeWidth, shapeLength, shapeUnits);
}

getAllArea(15, 10, 'cm');
getAllArea(15, 10);
getAllArea(15);
getAllArea();