'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const input = $qs('.user-id');
  const nameInput = $qs('.name');
  const ageInput = $qs('.age');
  const searchForm = $qs('.js-search-form');
  const table = $qs('.js-table');

  searchForm.addEventListener('click', handlerClick);

  function getAllUsers() {
    fetch('https://test-users-api.herokuapp.com/users')
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Failed while fetched');
      })
      .then(data => {
        console.log(data);
        updateList(data);
      })
      .catch(err => console.log('Fetch error:', err));
  }

  function getUserById(id) {
    if (id === '') throw new Error('Empty id input!');
    fetch(`https://test-users-api.herokuapp.com/users/${id}`)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Failed while fetched');
      })
      .then(data => {
        console.log(data);
        updateListForOneUser(data);
      })
      .catch(err => console.log('Fetch error:', err));
  }

  function addUser(userObj) {
    fetch('https://test-users-api.herokuapp.com/users', {
      method: 'POST',
      body: JSON.stringify(userObj),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Failed while fetched');
      })
      .then(data => {
        console.log(data);
        resetList();
        updateListForOneUser(data);
      })
      .catch(err => console.log('Fetch error:', err));
  }

  function removeUser(id) {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) return response.json();

        throw new Error('Failed while fetched :' + response.statusText);
      })
      .then(data => console.log(data))
      .catch(err => console.log('Fetch error:' + err));
  }

  function updateUser(id, user) {
    console.log(typeof ageInput.value);

    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => {
        if (response.ok) return response.json();

        throw new Error('Failed while update' + response.statusText);
      })
      .then(data => {
        console.log(data);
        resetList();
        updateListForOneUser(data);
      })
      .catch(err => console.log('Fetch error:' + err));
  }

  function resetList() {
    table.setAttribute('border', 0);
    table.innerHTML = `
    <thead>
   </thead>
   <tbody></tbody>`;
  }

  function handlerClick(evt) {
    evt.preventDefault();
    const id = input.value;
    let target = evt.target;
    const user = {
      name: nameInput.value,
      age: ageInput.value
    };

    if (target.nodeName !== 'BUTTON') return;
    switch (true) {
      case target.classList.contains('js-get-user'): {
        return getUserById(id);
      }

      case target.classList.contains('js-post-all'): {
        return getAllUsers();
      }

      case target.classList.contains('js-remove-user'): {
        return removeUser(id);
      }

      case target.classList.contains('js-reset-list'): {
        console.log('List reseted!');
        return resetList();
      }

      case target.classList.contains('js-edit-user'): {
        return updateUser(id, user);
      }
      case target.classList.contains('js-add-user'): {
        return addUser(user);
      }
    }
  }
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

    obj.data.map(el => {
      let item = `<tr>
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
    let item = `<tr>
    <td>${data.data.id || data.data._id}</td>
    <td>${data.data.name}</td>
    <td>${data.data.age}</td>
     </tr>`;
    tbody.innerHTML += item;
    thead.innerHTML = tHeader;
  }
});
