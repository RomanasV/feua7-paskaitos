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
