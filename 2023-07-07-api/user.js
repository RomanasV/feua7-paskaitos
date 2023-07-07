function init() {
  const queryParams = location.search;
  const urlParams = new URLSearchParams(queryParams);
  const id = urlParams.get('user_id')
  const contentElement = document.querySelector('#content');

  if (!id) {
    contentElement.innerHTML = `<h1>Error... No User Found...</h1>
                                <a href="./users.html">Go back to users page</a>`;
    return;
  }

  fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(res => res.json())
    .then(user => {
      console.log(user);

      contentElement.innerHTML = `<h1>${user.name} (${user.username})</h1>
                                  <ul>
                                    <li>Email: ${user.email}</li>
                                    <li>Phone: ${user.phone}</li>
                                  </ul>`;
    })
}

init();