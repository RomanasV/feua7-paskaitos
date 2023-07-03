const testForm = document.querySelector('#test-form');

testForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.target;

  // console.dir(event.target.elements.name.value);
  // console.dir(event.target.name.value);
  // console.dir(event.target.age.value);

  // console.dir(form.name.value);
  // console.dir(form.age.value);
  // console.dir(form['form-password'].value);

  // const name = document.querySelector('#name').value;
  // const name = document.getElementById('name').value;
  // const name = form.querySelector('#name').value;
  // const name = document.getElementsByName('form-name')[0].value;
  // const name = document.querySelectorAll('[name=form-name]')[0].value;
  // const name = document.querySelector('[name=form-name]').value;
  
  const name = form.name.value;
  const age = form.age.value;
  const password = form.password.value;
  const city = form.city.value;
  const places = form.querySelectorAll('[name="place"]:checked');
  console.log(places);

  const placesList = document.createElement('ul');

  places.forEach((place) => {
    const placeItem = document.createElement('li');
    placeItem.textContent = place.value;

    placesList.append(placeItem);
  })
  
  const formItem = document.createElement('div');
  formItem.classList.add('item');
  
  formItem.innerHTML = `<strong>Name: </strong> ${name}
                        <strong>Age: </strong> ${age}
                        <strong>City: </strong> ${city}`;
  
  formItem.append(placesList);

  const list = document.querySelector('#list');
  list.prepend(formItem);
});