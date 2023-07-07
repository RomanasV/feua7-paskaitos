async function init() {
  const queryParams = location.search;
  const urlParams = new URLSearchParams(queryParams);
  const id = urlParams.get('user_id')
  const contentElement = document.querySelector('#content');

  if (!id) {
    contentElement.innerHTML = `<h1>Error... No User Found...</h1>
                                <a href="./users.html">Go back to users page</a>`;
    return;
  }

  // fetch('https://jsonplaceholder.typicode.com/users/' + id)
  //   .then(res => res.json())
  //   .then(user => {
  //     contentElement.innerHTML = `<h1>${user.name} (${user.username})</h1>
  //                                 <ul>
  //                                   <li>Email: ${user.email}</li>
  //                                   <li>Phone: ${user.phone}</li>
  //                                 </ul>`;
  //   })

  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const user = await res.json();

  contentElement.innerHTML = `<h1>${user.name} (${user.username})</h1>
                              <ul>
                                <li>Email: ${user.email}</li>
                                <li>Phone: ${user.phone}</li>
                              </ul>`;

  const editUserLink = document.createElement('a');
  editUserLink.textContent = 'Edit user';
  editUserLink.href = `./edit-user.html?user_id=${id}`;
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';        

  contentElement.prepend(deleteButton, editUserLink);

  deleteButton.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users/' + id, {
      method: 'DELETE',
    });
  })
}

init();