let obj = {
  name: 'John',
  test: "Lab\"as",
  age: 28,
  nextAge: 28 + 1,
  children: ['Child 1', 'Child 2'],
  address: {
    street: 'Vilniaus st.',
    city: 'Vilnius',
    country: 'Lithuania',
  },
  married: true,
  getAddressInfo() {
    return `Address is ${this.address.street} ${this.address.city}, ${this.address.country}.`
  },
  test2: undefined,
  test3: null,
}

console.log(obj.name);
console.log(obj.age);
console.log(obj.getAddressInfo());

// Įprastas objektas
console.log(obj);

// Objektas paverstas JSON objektu
const json = JSON.stringify(obj);
console.log(json);

// JSON to OBJ
const jsonToObj = JSON.parse(json);
console.log(jsonToObj);



// Duomenų fetch'inimas
console.log('Prieš fetch');

// fetch('movies.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })



// fetch('movies.json')
//   .then(res => res.json())
//   .then(movies => {

//     console.log(movies);

//     movies.map(movie => {
//       console.log(movie);
//       console.log(movie.title);
//       console.log(movie.description);
//       console.log(movie.directors);
//       console.log(movie.genres);
//       console.log(movie.releaseYear);
//       console.log(movie.stars);
//       console.log(movie.review);
//     })
//   })

console.log('Po fetch');


// fetch('https://api.chucknorris.io/jokes/random')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.value);
//   })

// fetch('https://dog.ceo/api/breeds/image/random')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.message);
//     let dogImage = document.createElement('img');
//     dogImage.src = data.message;

//     document.body.prepend(dogImage);
//   })

fetch('movies.json')
  .then(res => res.json())
  .then(movies => {
    console.log(movies);
  })

async function getMovies() {
  const res = await fetch('movies.json');
  const movies = await res.json();
  console.log(movies);
}

getMovies();