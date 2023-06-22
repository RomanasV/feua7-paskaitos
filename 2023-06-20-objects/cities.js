// 1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
//  1.1. name - miesto pavadinimas (string)
//  1.2. population - miesto populiacija (number)
//  1.3. location - (object)
//    1.3.1. continent - žemynas (string)
//    1.3.2. country - šalis (string)
//  1.4. touristAttractions - lankytinos vietos (array)
//  1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)

let cities = [
  {
      name: 'Vilnius',
      population: 500000,
      location: {
          continent: 'Europe',
          country: 'Lietuva',
      },
      touristAttractions: ['Gedimino pilies bokstas', 'Vilniaus katedra'],
      isCapital: true,
  },
  {
      name: 'New York',
      population: 8500000,
      location: {
          continent: 'North America',
          country: 'United States',
      },
      touristAttractions: [],
      isCapital: false,
  },
  {
      name: 'Tokyo',
      population: 14000000,
      location: {
          continent: 'Asia',
          country: 'Japan',
      },
      touristAttractions: ['Sensō-ji'],
      isCapital: true,
  },
  {
      name: 'Amsterdam',
      population: 1400000,
      location: {
          continent: 'Europe',
          country: 'Netherlands',
      },
      touristAttractions: ['Van gogh museum', 'Rijksmuseum', 'Anne Frank museum'],
      isCapital: true,
  },
  {
      name: 'Monaco',
      population: 40000,
      location: {
          continent: 'Europe',
          country: 'Monaco',
      },
      touristAttractions: [],
      isCapital: true,
  },
  {
      name: 'Havana',
      population: 2400000,
      location: {
          continent: 'North America',
          country: 'Cuba',
      },
      touristAttractions: ['National Capitol of Cuba', 'Plaza de la Catedral'],
      isCapital: true,
  },
  {
      name: 'Singapore',
      population: 5600000,
      location: {
          continent: 'Asia',
          country: 'Singapore',
      },
      touristAttractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Singapore Zoo'],
      isCapital: true,
  },
  {
      name: 'Melbourne',
      population: 5000000,
      location: {
          continent: 'Australia',
          country: 'Australia',
      },
      touristAttractions: ['Melbourne Skydeck'],
      isCapital: false,
  },
  {
      name: 'Sapporo',
      population: 1900000,
      location: {
          continent: 'Asia',
          country: 'Japan',
      },
      touristAttractions: ['Hokkaido Jingu'],
      isCapital: false,
  },
  {
      name: 'Miami',
      population: 400000,
      location: {
          continent: 'North America',
          country: 'United States',
      },
      touristAttractions: ['Miami Zoo', 'Ocean drive', 'Little Havana', 'Vizcaya Museum & Gardens'],
      isCapital: false,
  },
];

console.log(cities);

let citiesList = document.querySelector('#cities-list');

cities.forEach((city) => {
  // 1.6. Visus miestų masyvų narius išvesti į konsolę.
  console.log(city);
  // 1.6.1. Visų miestų pavadinimis išvesti į konsolę.
  console.log(city.name);
  // 1.6.2. Visų miestų populiaciją išvesti į konsolę.
  console.log(city.population);

  console.log(city.location);
  // 1.6.3. Visų miestų žemyną išvesti į konsolę.
  console.log(city.location.continent);
  // 1.6.4. Visų miestų šalį išvesti į konsolę.
  console.log(city.location.country);
  // 1.6.5. Į konsolę išvesti ar miestas yra sostinė, ar ne.
  console.log(city.isCapital);
  // 1.6.6. Į konsolę išvesti visas miesto lankytinas vietas.
  console.log(city.touristAttractions);

  city.touristAttractions.forEach((singleTouristAttraction) => {
    console.log(singleTouristAttraction);
  });

  let cityItem = document.createElement('div');
  cityItem.classList.add('city-item');
  
  let cityName = document.createElement('h2');
  cityName.textContent = city.name

  let cityDescription = document.createElement('p');
  cityDescription.textContent = `${city.name} city is located in ${city.location.continent}, ${city.location.country} and has population of ${city.population} people.`;
  
  cityItem.append(cityName, cityDescription);

  citiesList.append(cityItem);
});


// cities.map((city) => {
//   console.log(city);
//   console.log(city.name);
//   console.log(city.population);

//   console.log(city.location);
//   console.log(city.location.continent);
//   console.log(city.location.country);
//   console.log(city.isCapital);
//   console.log(city.touristAttractions);
// });

// for (let i = 0; i < cities.length; i++) {
//   console.log(cities[i]);

//   console.log(cities[i].name);
//   console.log(cities[i].population);

//   console.log(cities[i].location);
//   console.log(cities[i].location.continent);
//   console.log(cities[i].location.country);
//   console.log(cities[i].isCapital);
//   console.log(cities[i].touristAttractions);
// }