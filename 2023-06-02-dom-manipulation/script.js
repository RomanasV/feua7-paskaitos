// Paselektinti HTML elementą
let paragraph = document.querySelector('p');
paragraph.textContent = 'Labas vakaras.';
paragraph.innerHTML = 'Labas <span style="color: red;" class="test">vakaras</span>';

// Sukurti HTML elementą
let spanElement = document.createElement('span');
spanElement.textContent = '!';

// Append - prideda su JS sukurtą HTML elementą (node) į kito elemento pabaigą
paragraph.append(spanElement);

// Prepend - prideda su JS sukurtą HTML elementą (node) į kito elemento pradžią
paragraph.prepend(spanElement);

// After - prideda su JS sukurtą HTML elemntą (node) po kitu elementu (šalia kito elemento)
paragraph.after(spanElement);

// Before - prideda su JS sukurtą HTML elementą (node) prieš kitą elementą (šalia kito elemento)
paragraph.before(spanElement);

// Remove - pašalina HTML elementą
spanElement.remove();

console.log(spanElement);

let newParagraph = document.createElement('p');
newParagraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam quae porro soluta eos non, voluptatibus doloremque aperiam sed ex velit ea minima, pariatur voluptas corporis earum, alias dolorum maxime.';

paragraph.after(newParagraph);

// Būdas pakeisti HTML elemento klases
newParagraph.className = 'pirma-klase antra-klase';
newParagraph.className += ' trecia-klase';

// Prideda klasę prie HTML elemento
newParagraph.classList.add('ketvirta-klase');
newParagraph.classList.add('penkta-klase', 'sesta-klase');
newParagraph.classList.add('penkta-klase');

// Pašalina klasę iš HTML elemento
newParagraph.classList.remove('sesta-klase');
newParagraph.classList.remove('penkta-klase', 'antra-klase');
newParagraph.classList.remove('sesta-klase');

// Pakeičia klasę HTML elemente
newParagraph.classList.replace('trecia-klase', 'septinta-klase');

// Prideda klasę prie HTML elemento, jeigu tokios klasės dar neturi ir pašalina jeigu tokią klasę jau turi
newParagraph.classList.toggle('toggle-klase'); // prideda
newParagraph.classList.toggle('toggle-klase'); // pašalina
newParagraph.classList.toggle('toggle-klase'); // prideda

// Patikrina ar HTML elementas turi nurodytą klasę (grąžina true arba false)
console.log(newParagraph.classList.contains('pirma-klase'));
console.log(newParagraph.className);

// Keičia (arba prideda) HTML elemento ID
newParagraph.id = 'paragrafo-id';
paragraph.id = 'pirmas-paragrafas';
paragraph.id = 'naujas-id';

let link = document.createElement('a');
newParagraph.after(link);
link.textContent = 'Nuoroda';
// link.id = 'nuorodos-id';
// link.href = 'https://google.com';
// link.target = '_blank';

link.setAttribute('id', 'nuorodos-id');
link.setAttribute('target', '_blank');
link.setAttribute('class', 'nuorodos-klase');
link.setAttribute('class', 'nauja-klase');
link.setAttribute('title', 'cia yra title');
link.setAttribute('href', 'https://google.com');

console.log(link.getAttribute('title'));
console.log(link.title);

console.log(link.hasAttribute('title'));
link.removeAttribute('title');
console.log(link.hasAttribute('title'));

link.style.color = 'white';
link.style.border = '2px solid black';
link.style.padding = '5px 10px';
link.style.textDecoration = 'none';
link.style.textTransform = 'uppercase';
link.style.backgroundColor = 'green';

link.style = `color: white; 
              background-color: green;
              border: 2px solid black;
              padding: 5px 10px;
              text-decoration: none;
              text-transform: uppercase;`;