const arr = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

console.log(arr);

// 1.1. Pašalinti pirmą masyvo narį.
arr.shift();
console.log(arr);

// 1.2. Pašalinti paskutinį masyvo narį.
arr.pop();
console.log(arr);

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
arr.splice(Math.floor(arr.length / 2), 1);
console.log(arr);

// 1.4. Pašalinti priešpaskutinį masyvo narį.
arr.splice(-2, 1);
console.log(arr);

// 1.5. Pašalinti antrą masyvo narį.
arr.splice(1, 1);
console.log(arr);

// 1.6. Pašalinti 7 ir 8 masyvo narius.
arr.splice(6, 2);
console.log(arr);

// 1.7. Pašalinti 4 ir 5 masyvo narius skaičiuojant nuo galo.
arr.splice(-6, 3);
console.log(arr);

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
arr.splice(2, 1, 888);
console.log(arr);

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
arr.splice(9, 1, 33, 789, 6543);
console.log(arr);

// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
arr.splice(-1, 1, 321, 654, 987);
console.log(arr);

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
arr.splice(1, 0, 11);
console.log(arr);

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
arr.splice(13, 0, 1);
console.log(arr);

// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
arr.splice(-1, 0, -1);
console.log(arr);

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
arr.splice(0, 0, 1, 2, 3);
console.log(arr);

// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
arr.splice(arr.length, 0, -333, -321, -312);
console.log(arr);

// 1.16. Į masyvo vidurį pridėti skaičių 0.
arr.splice(arr.length / 2, 0, 0);
console.log(arr);

// 1.17. Pašalinti pirmą masyvo narį.
arr.shift();
console.log(arr);

// 1.18. Pašalinti paskutinį masyvo narį.
arr.pop();
console.log(arr);

// 1.19. Į masyvo pradžią pridėti žodį "start"
arr.unshift('start');
console.log(arr);

// 1.20. Į masyvo pabaigą pridėti žodį "end".
arr.push('end');
console.log(arr);



// 2.1. Gauti pirmą masyvo narį.
let task21 = arr.slice(0, 1);
console.log(task21);

// 2.2. Gauti paskutinį masyvo narį.
let task22 = arr.slice(-1);
console.log(task22);

// 2.3. Gauti antrą masyvo narį.
let task23 = arr.slice(1, 2);
console.log(task23);

// 2.4. Gauti priešpaskutinį masyvo narį.
let task24 = arr.slice(-2, -1);
console.log(task24);

// 2.5. Gauti aštuntą masyvo narį.
let task25 = arr.slice(7, 8);
console.log(task25);

// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
let task26 = arr.slice(-9, -8);
console.log(task26);

// 2.7. Gauti vidurinį masyvo narį.
let middle = Math.floor(arr.length / 2);
let task27 = arr.slice(middle, middle + 1);
console.log(task27);

// 2.8. Gauti pirmus tris masyvo narius.
let task28 = arr.slice(0, 3);
console.log(task28);

// 2.9. Gauti paskutinius tris masyvo narius.
let task29 = arr.slice(-3);
console.log(task29);

// 2.10. Gauti pirmus 10 masyvo narius.
let task210 = arr.slice(0, 10);
console.log(task210);

// 2.11. Gauti paskutinius 10 masyvo narius.
let task211 = arr.slice(-10);
console.log(task211);

// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
let task212 = arr.slice(2, 8);
console.log(task212);

// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
let task213 = arr.slice(-9, -4);
console.log(task213);

// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
let task214 = arr.slice(10, 19);
console.log(task214);

// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
let task215 = arr.slice(-20, -8);
console.log(task215);

// 2.16. Gauti visus masyvo narius išskyrus pirmą.
let task216 = arr.slice(1);
console.log(task216);

// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
let task217 = arr.slice(0, -1);
console.log(task217);

// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
let task218 = arr.slice(5);
console.log(task218);

// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
let task219 = arr.slice(0, -5);
console.log(task219);

// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
let task220 = arr.slice(0, Math.floor(arr.length / 2));
console.log(task220);

// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
let task221 = arr.slice(Math.ceil(arr.length / 2));
console.log(task221);

// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
let task222 = arr.slice(1, -1);
console.log(task222);

// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
let task223 = arr.slice(5, -3);
console.log(task223);

// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
let task224 = arr.slice(1, -8);
console.log(task224);

// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
let task225 = arr.slice(7, -1);
console.log(task225);

// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
let task226 = arr.slice(9, -12);
console.log(task226);

// 2.27. Gauti 9 narius skaičiuojant nuo 11.
let task227 = arr.slice(10, 10 + 9);
console.log(task227);

// 2.28. Gauti 12 narių skaičiuojant nuo 8.
let task228 = arr.slice(7, 7 + 12);
console.log(task228);

// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let task229first = arr.slice(0, 5);
let task229last = arr.slice(-6);
// let task229all = task229first.concat(task229last);
// let task229all = [task229first, task229last].flat();
let task229all = [...task229first, ...task229last];
console.log(task229first);
console.log(task229last);
console.log(task229all);

// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let task230first = arr.slice(2, 5);
let task230last = arr.slice(14, 17);
// let task230all = task230first.concat(task230last);
// let task230all = [task230first, task230last].flat();
let task230all = [...task230first, ...task230last];
console.log(task230first);
console.log(task230last);
console.log(task230all);