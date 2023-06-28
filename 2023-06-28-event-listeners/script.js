let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');
let h5 = document.querySelector('h5');
let button = document.querySelector('button');

h1.addEventListener('click', function(){
  h1.style.color = 'green';
  h1.style.backgroundColor = 'pink';
  h1.textContent = 'Clicked';
});

h2.addEventListener('click', () => {
  h2.style.fontSize = '40px';
});

h3.addEventListener('click', () => {
  h3.style.color = 'purple';
  h1.style.color = 'purple';
})

// h4.addEventListener('click', () => {
//   h3.style.border = '2px solid black';
//   h1.style.border = '2px solid black';
// })

// h5.addEventListener('click', () => {
//   h3.style.border = '2px solid black';
//   h1.style.border = '2px solid black';
// })

// h4.addEventListener('click', () => {
//   changeBorder();
// })

// h5.addEventListener('click', () => {
//   changeBorder();
// })

h4.addEventListener('click', changeBorder)
h5.addEventListener('click', changeBorder)

function changeBorder() {
  h3.style.border = '2px solid black';
  h1.style.border = '2px solid black';
}

button.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
})
