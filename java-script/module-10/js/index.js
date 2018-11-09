/* eslint-disable no-console */
/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const form = $qs('.form');
  const [id, name, age] = form.elements;
  const buttons = $qs('.buttons');
  const table = $qs('.js-table');
  const url = 'https://test-users-api.herokuapp.com/users/';

  function updateList(obj) {
    table.setAttribute('border', 1);

    const tbody = $qs('tbody');
    const thead = $qs('thead');
    const tHeader = `
    <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>AGE</th>
    </tr>`;

    thead.innerHTML = tHeader;

    // eslint-disable-next-line array-callback-return
    obj.data.map((el) => {
      const item = `<tr>
       <td>${el.id}</td>
       <td>${el.name}</td>
       <td>${el.age}</td>
        </tr>`;
      tbody.innerHTML += item;
    });
  }

  function updateListForOneUser(data) {
    table.setAttribute('border', 1);
    const tbody = $qs('tbody');
    const thead = $qs('thead');
    const tHeader = `<tr>
    <th>ID</th>
    <th>NAME</th>
    <th>AGE</th>
    </tr>`;
    const item = `<tr>
    <td>${data.data.id || data.data._id}</td>
    <td>${data.data.name}</td>
    <td>${data.data.age}</td>
     </tr>`;
    tbody.innerHTML += item;
    thead.innerHTML = tHeader;
  }

  function resetList() {
    table.setAttribute('border', 0);
    table.innerHTML = `
    <thead>
   </thead>
   <tbody></tbody>`;
  }

  function getAllUsers() {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(`Failed while fetched${response.statusText}`);
      })
      .then((data) => {
        console.log(data);
        updateList(data);
      })
      .catch(err => console.log('Error:', err));
  }

  function getUserById() {
    if (id === '') throw new Error('Empty id input!');
    return fetch(url + id.value)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(`Failed while fetched: ${response.statusText}`);
      })
      .then((data) => {
        console.log(data);
        updateListForOneUser(data);
      })
      .catch(err => console.log('Error:', err));
  }

  function addUser() {
    const user = {
      name: name.value,
      age: age.value,
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('Failed while fetched');
      })
      .then((data) => {
        console.log(data);
        resetList();
        updateListForOneUser(data);
      })
      .catch(err => console.log('Error:', err));
  }

  function removeUser() {
    fetch(url + id.value, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) return response.json();

        throw new Error(`Failed while fetched :${response.statusText}`);
      })
      .then((data) => {
        console.log(data);
        resetList();
        updateListForOneUser(data);
      })
      .catch(err => console.log(`Error:${err}`));
  }

  function updateUser() {
    const user = {
      name: name.value,
      age: age.value,
    };

    console.log(user.age);
    fetch(url + id.value, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.ok) return response.json();

        throw new Error(`Failed while update${response.statusText}`);
      })
      .then((data) => {
        console.log(data);
        resetList();
        updateListForOneUser(data);
      })
      .catch(err => console.log(`Error:${err}`));
  }


  function handleClick(evt) {
    evt.preventDefault();
    const target = evt.target;

    if (target.nodeName !== 'BUTTON') return;
    // eslint-disable-next-line default-case
    switch (true) {
      case target.classList.contains('js-get-user'): {
        getUserById(id);
        break;
      }

      case target.classList.contains('js-post-all'): {
        getAllUsers();
        break;
      }

      case target.classList.contains('js-remove-user'): {
        removeUser(id);
        break;
      }

      case target.classList.contains('js-edit-user'): {
        updateUser();
        break;
      }

      case target.classList.contains('js-add-user'): {
        addUser();
        break;
      }
      case target.classList.contains('js-reset-list'): {
        console.log('List reseted!');
        resetList();
      }
    }
  }

  buttons.addEventListener('click', handleClick);
});
