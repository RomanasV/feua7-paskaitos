// Masyvo kūrimas
let students = ['Steve', 'John', 'Peter'];
console.log(students);

// Masyvo narių pasiekimas
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

// Kaip iteruojame per masyvą (ciklas/loop)

// for ciklas
for (let i = 0; i < students.length; i++) {
  console.log('for ciklas: ' + students[i]);
}

// map ciklas
students.map(student => {
  console.log('map ciklas: ' + student);
})

// forEach ciklas
students.forEach(student => {
  console.log('forEach ciklas: ' + student);
})

// while ciklas
let n = 0;
while (n < students.length) {
  console.log('while ciklas: ' + students[n]);
  n++;
}

// do while
let m = 0;
do {
  console.log('do while ciklas: ' + students[m]);
  m++;
} while (m < students.length);

// for ...of ciklas
for (let student of students) {
  console.log('for ...of ciklas: ' + student);
}

//               Vardas     a.vardas   pavarde   amzius   miestas     grupe
let studentas1 = ['John',   'Steve',   'Doe',    25,     'Vilnius', 'FEUA9'];

console.log(studentas1);
console.log(studentas1[0]); // vardas
console.log(studentas1[1]); // pavardė
console.log(studentas1[2]); // amžius
console.log(studentas1[3]); // miestas
console.log(studentas1[4]); // grupė

/* 

Objekto sintaksė

let object = {
  key: value,
}

Studentas 1:
  - Vardas: John,
  - Antras vardas: Steve,
  - Pavardė: Doe,
  - Amžius: 25,
  - Miestas: Vilnius,
  - Grupė: FEUA9.

*/

let studentObj = {
  vardas: 'John', // property (key: value)
  'antras vardas': 'Steve',
  pavarde: 'Doe',
  amzius: 25,
  miestas: 'Vilnius',
  grupe: 'FEUA9',
  balai: [5, 7, 9, 10],
  getFullName: function() {
    return `Pilnas vardas: ${this.vardas} ${this['antras vardas']} ${this.pavarde}.`;
  },
  setStudentInactive: function() {
    this.yraAktyvus = false;
  },
  setStudentActive() {
    this.yraAktyvus = true;
  },
  removeHobby(hobbyToRemove) {
    let updatedHobbies = this.hobiai.filter((hobby) => {
      return hobby !== hobbyToRemove;
    });

    this.hobiai = updatedHobbies;
  }
};

console.log(studentObj);

// Objekto properties pasiekimas
console.log(studentObj['vardas']);
console.log(studentObj['antras vardas']);
console.log(studentObj['pavarde']);
console.log(studentObj['amzius']);
console.log(studentObj['miestas']);
console.log(studentObj['grupe']);

console.log(studentObj.vardas);
console.log(studentObj.pavarde);
console.log(studentObj.amzius);
console.log(studentObj.miestas);
console.log(studentObj.grupe);

let propertyName = 'vardas';
console.log(studentObj[propertyName]);

// Objekto properties reikšmės pakeitimas
console.log(studentObj.amzius);
studentObj.amzius = 26;
console.log(studentObj.amzius);

console.log(studentObj.miestas);
studentObj['miestas'] = 'Kaunas';
console.log(studentObj.miestas);

// Objekto properties sukūrimas
console.log(studentObj.yraAktyvus);
studentObj.yraAktyvus = true;
console.log(studentObj.yraAktyvus);

console.log(studentObj['gimtasis miestas']);
studentObj['gimtasis miestas'] = 'Klaipėda';
console.log(studentObj['gimtasis miestas']);

// Objekto properties ištrynimas
delete studentObj['gimtasis miestas'];
console.log(studentObj['gimtasis miestas']);

delete studentObj.grupe; 
console.log(studentObj.grupe);



console.log(studentObj);
console.log(studentObj.balai);

console.log(studentObj.balai[0]);
console.log(studentObj.balai[1]);
console.log(studentObj.balai[2]);
console.log(studentObj.balai[3]);

studentObj.balai.map(balas => console.log('ciklas: ' + balas));

// studentObj.hobiai = ['sports', 'reading'];
let studentHobbies = ['sports', 'reading'];
studentObj.hobiai = studentHobbies;

console.log(studentObj.hobiai);
studentObj.hobiai.push('traveling');
console.log(studentObj.hobiai);

studentObj.hobiai.map(hobis => console.log(hobis));

// Pirmas bŪdas - kurti adreso objektą tiesiogiai studento objekte
// studentObj.adresas = {
//   miestas: 'Vilnius',
//   gatve: 'Vilniaus g.',
//   salis: 'Lietuva',
//   namoNumeris: 15, 
// }

// Antras būdas - kurti naują kintamąjį
// let studentAddress = {
//   miestas: 'Vilnius',
//   gatve: 'Vilniaus g.',
//   salis: 'Lietuva',
//   namoNumeris: 15, 
// }
// studentObj.adresas = studentAddress;

// Trečias būdas
// let studentAddress = new Object();
let studentAddress = {};

studentAddress.miestas = 'Vilnius';
studentAddress.gatve = 'Vilniaus g.';
studentAddress.salis = 'Lietuva';
studentAddress.namoNumeris = 15;

studentObj.adresas = studentAddress;

console.log(studentObj.adresas.miestas);
console.log(studentObj.adresas.gatve);
console.log(studentObj.adresas.salis);
console.log(studentObj.adresas.namoNumeris);


// Funkcijos bjektuose (metodai) 
console.log(studentObj.getFullName());

console.log(studentObj.yraAktyvus);
studentObj.setStudentInactive()
console.log(studentObj.yraAktyvus);
studentObj.setStudentActive()
console.log(studentObj.yraAktyvus);

studentObj.switchStudentActivity = function() {
  this.yraAktyvus = !this.yraAktyvus;
}

studentObj.addHobby = function(newHobby) {
  this.hobiai.push(newHobby);
}

console.log(studentObj.hobiai);
studentObj.addHobby('knitting');
console.log(studentObj.hobiai);

studentObj.removeHobby('reading');
console.log(studentObj.hobiai);



// let company1 = new Object();
let company1 = {};
company1.property = 'Labas'

let company2 = {
  property: 'Labas',
};