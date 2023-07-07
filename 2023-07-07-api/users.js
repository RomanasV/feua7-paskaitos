function init() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      const contentElement = document.querySelector('#content');
      const pageTitle = document.createElement('h1');

      contentElement.append(pageTitle);

      if (users.length > 0) {

        pageTitle.textContent = 'Users:';

        const usersList = document.createElement('ul');
        contentElement.append(usersList);

        users.map(user => {
          const userItem = document.createElement('li');
          const userLink = document.createElement('a');
          userLink.textContent = user.name + ' (user id: ' + user.id + ')';
          userLink.href = `./user.html?user_id=${user.id}`;

          userItem.append(userLink);
          usersList.append(userItem)
        })
      
      } else {
        pageTitle.textContent = 'No users :(';
      }

    })
}

init();