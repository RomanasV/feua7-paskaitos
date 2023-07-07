async function init() {
  const queryParams = location.search;
  const urlParams = new URLSearchParams(queryParams);
  const id = urlParams.get('user_id')

  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const user = await res.json();

  const userForm = document.querySelector('#user-form');

  userForm.name.value = user.name;

  userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.name.value

    const newUserData = {
      id: id,
      name: name,
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
        geo: {
        lat: "-37.3159",
        lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    }

    fetch('https://jsonplaceholder.typicode.com/users/' + id, {
      method: 'PUT',
      body: JSON.stringify(newUserData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  })
}

init();