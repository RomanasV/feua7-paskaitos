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