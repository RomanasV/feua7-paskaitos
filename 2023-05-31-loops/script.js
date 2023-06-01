console.groupCollapsed('Pre Loop');

// console.log('- ' + 1 + '!!!');
// console.log('- ' + 2 + '!!!');
// console.log('- ' + 3 + '!!!');
// console.log('- ' + 4 + '!!!');
// console.log('- ' + 5 + '!!!');
// console.log('- ' + 6 + '!!!');
// console.log('- ' + 7 + '!!!');
// console.log('- ' + 8 + '!!!');
// console.log('- ' + 9 + '!!!');
// console.log('- ' + 10 + '!!!');
// console.log('- ' + 11 + '!!!');
// console.log('- ' + 12 + '!!!');
// console.log('- ' + 13 + '!!!');
// console.log('- ' + 14 + '!!!');
// console.log('- ' + 15 + '!!!');
// console.log('- ' + 16 + '!!!');
// console.log('- ' + 17 + '!!!');
// console.log('- ' + 18 + '!!!');
// console.log('- ' + 19 + '!!!');
// console.log('- ' + 20 + '!!!');

let num = 5;
console.log(num);
console.log(num + 1);
console.log(num);

num = 6;
console.log(num);

// Sudėtis
num = num + 1;
console.log(num);

num = num + 2;
console.log(num);

num += 1;
console.log(num);

num += 2;
console.log(num);

num++;
console.log(num);

// Atimtis
num = num - 1;
console.log(num);

num = num - 2;
console.log(num);

num -= 1;
console.log(num);

num -= 2;
console.log(num);

num--;
console.log(num);

// Daugyba
num = num * 2;
console.log(num);

num *= 2;
console.log(num);

// Dalyba
num = num / 2;
console.log(num);

num /= 2;
console.log(num);

// String
let str = 'Labas';
console.log(str);

str = str + ' vakaras';
console.log(str);

str += '.';
console.log(str);

console.groupEnd();

// FOR CIKLAS (LOOP):
// 1. Iniciavimo žodelis - for
// 2. Paprasti skliaustai - ()
// 2.1. Sukuriamas kintamasis (dažniausiai jo pavadinimas yra i)
// 2.2. Sąlyga
// 2.3. Kintamojo vertės pakeitimas
// 3. Riestiniai skliaustai - {}

/* 
  for (kintamasis; sąlyga; kintamojo keitimas) {

  }

*/

// for (let i = 0; i < 20; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   console.log('- ' + i + ' !!!');
// }

// Sukurti ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.

// for (let i = 1; i <= 100; i++) {
//   let answer = i * 2;
//   let output = `${i} * 2 = ${answer}`;
//   console.log(output);
// }

// for (let i = 100; i >= 1; i--) {
//   let answer = i * 2;
//   let output = `${i} * 2 = ${answer}`;
//   console.log(output);
// }

// 2. Padaugina skaičių iš 5.
// for (let i = 1; i <= 100; i++) {
//   let answer = i * 5;
//   let output = `${i} * 5 = ${answer}`;

//   console.log(output);
// }

// for (let i = 100; i >= 1; i--) {
//   let answer = i * 5;
//   let output = `${i} * 5 = ${answer}`;
//   console.log(output);
// }

// 3. Prideda prie skaičiaus 5.
// for (let i = 1; i <= 100; i++) {
//   let answer = i + 5;
//   let output = `${i} + 5 = ${answer}`;
//   console.log(output);
// }

// for (let i = 100; i >= 1; i--) {
//   let answer = i + 5;
//   let output = `${i} + 5 = ${answer}`;
//   console.log(output)
// }

// 4. Atima iš skaičiaus 2.
// for (let i = 1; i <= 100; i++) {
//   let answer = i - 2;
//   let output = `${i} - 2 = ${answer}`;
//   console.log(output);
// }

// for (let i = 100; i >= 1; i--) {
//   let answer = i - 2;
//   let output = `${i} - 2 = ${answer}`;
//   console.log(output);
// }

// 5. Pakelia skaičių kvadratu.
// for (let i = 1; i <= 100; i++) {
//   // let answer = i * i;
//   // let answer = i**2;
//   let answer = Math.pow(i, 2);
//   let output = `${i}**2 = ${answer}`;

//   console.log(output);
// }

// for (let i = 100; i >= 1; i--) {
//   let answer = Math.pow(i, 2);
//   let output = `${i}**2 = ${answer}`;

//   console.log(output);
// }

// 6. Pakelia skaičių kūbu.
// for (let i = 1; i <= 100; i++) {
//   let nth = 3;
//   let answer = Math.pow(i, nth);
//   let output = `${i}**${nth} = ${answer}`;

//   console.log(output);
// }

// for (let i = 100; i >= 1; i--) {
//   let nth = 3;
//   let answer = Math.pow(i, nth);
//   let output = `${i}**${nth} = ${answer}`;

//   console.log(output);
// }


// WHILE CIKLAS

// let n = 0;
// while (n < 0) {
//   console.log(n);
//   n++;
// } 

// do.. while ciklas

// let m = 0;
// do {
//   console.log(m);
//   m++
// } while (m < 0);


for (let i = 1; i <= 100; i++) {
  console.log(i);
}