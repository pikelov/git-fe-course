'use strict';

import '../css/styles.css';


const buttonSection = document.querySelector('.crud-js');
buttonSection.addEventListener('click', onMenuButtonClick);


const jsFormSection = document.querySelector('.js-form-section');
jsFormSection.addEventListener('click', onSectionButtonClick);


//==Main menu Event listener function

function onMenuButtonClick(e) {
  e.preventDefault();
  const nodeName = e.target.nodeName;

  if (nodeName !== 'BUTTON') return;

  if (e.target.classList.contains('js-button-addB')) {
    createAddForm('Add');
    console.log('Add button work!');
  } 
  
  if (e.target.classList.contains('js-button-removeB')) {
    createSearchForm('Remove book', 'id', 'remove', 'number');
    console.log( 'Remove button work!');
  } 

  if (e.target.classList.contains('js-button-editB')) {
    console.log('Edit button work!');
    createSearchForm('Edit book', 'title', 'search', 'text'); 
  }

  if (e.target.classList.contains('js-button-viewB')) {
    console.log('View button work!');
    getBooks();
  }

  if (e.target.classList.contains('js-button-addG')) {
    console.log('Add genre button work!');
    createSearchForm('Add genre', 'genre', 'add', 'text');  
  }

  if (e.target.classList.contains('js-button-removeG')) {
    console.log('Remove genre button work!');
    createSearchForm('Remove genre', 'id', 'removeG', 'number');  
  }

  if (e.target.classList.contains('js-button-editG')) {
    console.log('View button work!');
    createSearchForm('Edit genre', 'genre', 'search', 'text');  
  }

  if (e.target.classList.contains('js-button-viewG')) {
    console.log('View button work!');
    getGenres();  
  }
}

//Section form eventListener 
function onSectionButtonClick(e) {

  e.preventDefault();
  if(e.target.nodeName !== 'BUTTON') return;

  if(e.target.classList.contains('js-button-title-search')) {
    onSearchClick();
  }
  
  if(e.target.classList.contains('js-button-confirm-add')) {
    onConfirmAddClick();
  }

  if(e.target.classList.contains('js-edit-confirm-button')) {
    onEditConfirm();
  }

  if(e.target.classList.contains('close-btn')) {
    onCloseBtnClick();
  }

  if(e.target.classList.contains('js-button-id-remove')) {
    onRemoveClick();
  }

  if(e.target.classList.contains('js-button-genre-add')) {
    onGenreAddClick();
  }

  if(e.target.classList.contains('js-button-id-removeG')) {
    onGenreRemoveClick();
  }

  if(e.target.classList.contains('js-button-genre-search')) {
    onGenreEditClick();
  }
  
  if(e.target.classList.contains('js-editG-confirm-button')) {
    onGenreEditConfirmClick();
  }
}

//CRUD FUNCTIONES

// This server-emulator dont have backend for fetcing data by title, it has id fetching only.
// Thats why I used GET method and after (in getBookBySelector();) use array-fn.method 
// .filter, to get requested data.

//Add book (create)
/**
 * @param {fn accept object with fields: genreId, author, price, title} bookObj
 */
function addBook(bookObj) {
  fetch('https://my-json-server.typicode.com/pikelov/fake-server/books', {
    method: 'POST',
    body: JSON.stringify(bookObj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR' + error));

}

//Edit book (update)
function editBook(bookObj) {
  fetch(`https://my-json-server.typicode.com/pikelov/fake-server/books/${bookObj.id}`, {
    method: 'PUT',
    body: JSON.stringify(bookObj),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => {
    if(response.ok) 
    alert('Book updated!');
    return response.json()
  })
  .catch(error => console.log('ERROR' + error));

}


//get books array
const getBooks = () =>
fetch(`https://my-json-server.typicode.com/pikelov/fake-server/books`)
.then(response => {
  console.log(response);
  if (response.ok) return response.json();
  throw new Error(response.statusText);
})
.then(data => createBookList(data))
.catch(err => console.log('ERROR:' + err));


//Get books by title
const getBookBySelector = title =>
  fetch(`https://my-json-server.typicode.com/pikelov/fake-server/books`)
    .then(response => {
      console.log(response);
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    })
    .then(data => data.filter(books => books.title === title))
    .then(filteredData => {
      const fetchedData = filteredData;
      createEditForm(fetchedData);
    })
    .catch(err => console.log('ERROR:' + err));


//remove book
const removeBook = id =>
fetch(`https://my-json-server.typicode.com/pikelov/fake-server/books/${id}`, {
  method: 'DELETE'
}).then(() => console.log('request send'))
.catch(error => console.log('ERROR' + error));


// GET genre by genre name ex: 'History'
const getGenreBySelector = genreName =>
fetch('https://my-json-server.typicode.com/pikelov/fake-server/genres')
.then(response => {
  console.log(response);
  if (response.ok) return response.json();
  throw new Error(response.statusText);
})
.then(data => data.filter(genres => genres.name === genreName))
.then(filteredData => {
  const fetchedData = filteredData;
  console.log(fetchedData);
  createEditGenre(fetchedData);
})
.catch(err => console.log('ERROR:' + err));


//Add genre
const addGenre = genre =>
  fetch('https://my-json-server.typicode.com/pikelov/fake-server/genres', {
    method: 'POST',
    body: JSON.stringify(genre),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR' + error));



// Remove genre
const removeGenre = id =>
fetch(`https://my-json-server.typicode.com/pikelov/fake-server/genres/${id}`, {
  method: 'DELETE'
}).then(() => console.log('request send'))
.catch(error => console.log('ERROR' + error));


// EDIT genre
const editGenre = (genreObj) =>
  fetch(`https://my-json-server.typicode.com/pikelov/fake-server/genres/${genreObj.id}`, {
    method: 'PUT',
    body: JSON.stringify(genreObj),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => {
    if(response.ok) 
    return response.json()
  })
  .catch(error => console.log('ERROR' + error));


const getGenres = () =>
fetch(`https://my-json-server.typicode.com/pikelov/fake-server/genres`)
.then(response => {
  console.log(response);
  if (response.ok) return response.json();
  throw new Error(response.statusText);
})
.then(data => createGenreList(data))
.catch(err => console.log('ERROR:' + err));

//=== DOM operations HELPERS


// Create search form for diff type of operation
/**
 *
 *
 * @param {Header text to be displayed of search form. ex: 'Edit book' || 'Add book'} header
 * @param {Form placehlolder text. ex:'Title' || 'Author'} searchBy
 * @param {Text to be displayed on the BUTTON} buttonText
 * @param {Type of input ex: text || number} type
 */
function createSearchForm(header, searchBy, buttonText, type ) {
  resetForm('.js-form-section');

  const searchForm = document.createElement('form');
  searchForm.classList.add('form', 'js-edit-search'); 
  const input = document.createElement('input');
  const button = document.createElement('button');
  const searchHeader = document.createElement('h3');
  const closeButton = document.createElement('button');

  searchHeader.textContent = header
  button.textContent = buttonText;
  button.setAttribute('type', 'submit');
  button.classList.add('button-js', `js-button-${searchBy}-${buttonText}`);
  closeButton.classList.add('close-btn');
  input.classList.add('input-form','js-search-input');
  input.setAttribute('placeholder', `Enter ${searchBy}`);
  input.setAttribute('type', type);

  searchForm.appendChild(searchHeader);
  searchForm.appendChild(closeButton);
  searchForm.appendChild(input);
  searchForm.appendChild(button);

  const root = document.querySelector('.js-form-section');
  root.insertAdjacentElement('afterbegin', searchForm);
}


// Create form for editing a genre
function createEditGenre([{id, name}]) {
  resetForm('.js-form-section');

const editForm = document.createElement('form');
editForm.classList.add('form', 'js-edit-form'); 
const genre = document.createElement('input');
const labelGenre = document.createElement('label');
const editHeader = document.createElement('h3');
const button = document.createElement('button');

editHeader.textContent = `Genre Id: ${id}`;
button.textContent = 'Confirm';
button.setAttribute('type', 'submit');
button.classList.add('button-js', 'js-editG-confirm-button');
labelGenre.textContent = `Genre name: ${name}`;

editHeader.classList.add('js-genre-id');
  genre.classList.add('input-form','js-genre-input');
  genre.setAttribute('placeholder', 'Enter genre name' );
  genre.setAttribute('type', 'text');
  genre.value = name;

  editForm.appendChild(editHeader);
  editForm.appendChild(labelGenre);
  editForm.appendChild(genre);
  editForm.appendChild(button);

  const root = document.querySelector('.js-form-section');
  root.insertAdjacentElement('afterbegin', editForm);
}


//Create form for editing a book
function createEditForm ([{genreId, author, price, title, id}]) {
  resetForm('.js-form-section');

  const editForm = document.createElement('form');
  editForm.classList.add('form', 'js-edit-form'); 
  const genre = document.createElement('input');
  const labelGenre = document.createElement('label');
  const authorIn = document.createElement('input');
  const labelAuthor = document.createElement('label');
  const priceIn = document.createElement('input');
  const labelPrice = document.createElement('label');
  const titleIn = document.createElement('input');
  const labelTitle = document.createElement('label');
  const editHeader = document.createElement('h3');
  const button = document.createElement('button');
  

  editHeader.textContent = `Book Id: ${id}`;
  button.textContent = 'Confirm';
  button.setAttribute('type', 'submit');
  button.classList.add('button-js', 'js-edit-confirm-button');
  labelGenre.textContent = `Genre id: ${genreId}`;
  labelAuthor.textContent = `Author: ${author}`;
  labelPrice.textContent = `Price: ${price}`;
  labelTitle.textContent = `Title: ${title}`;

  editHeader.classList.add('js-book-id');
  genre.classList.add('input-form','js-genre-input');
  genre.setAttribute('placeholder', 'Enter genre ID' );
  genre.setAttribute('type', 'number');
  genre.value = genreId;
  authorIn.classList.add('input-form', 'js-author-input')
  authorIn.setAttribute('placeholder', 'Enter author' );
  authorIn.setAttribute('type', 'text');
  authorIn.value = author;
  priceIn.classList.add('input-form','js-price-input');
  priceIn.setAttribute('placeholder', 'Enter price' );
  priceIn.setAttribute('type', 'number');
  priceIn.value = price
  titleIn.classList.add('input-form', 'js-title-input')
  titleIn.setAttribute('placeholder', 'Enter title' );
  titleIn.setAttribute('type', 'text');
  titleIn.value = title

  editForm.appendChild(editHeader);
  editForm.appendChild(labelGenre);
  editForm.appendChild(genre);
  editForm.appendChild(labelAuthor);
  editForm.appendChild(authorIn);
  editForm.appendChild(labelPrice);
  editForm.appendChild(priceIn);
  editForm.appendChild(labelTitle);
  editForm.appendChild(titleIn);
  editForm.appendChild(button);

  const root = document.querySelector('.js-form-section');
  root.insertAdjacentElement('afterbegin', editForm);
  
}

function createAddForm(buttonText) {
  resetForm('.js-form-section');

  const addForm = document.createElement('form');
  addForm.classList.add('form', 'js-add-form'); 
  const genre = document.createElement('input');
  const labelGenre = document.createElement('label');
  const authorIn = document.createElement('input');
  const labelAuthor = document.createElement('label');
  const priceIn = document.createElement('input');
  const labelPrice = document.createElement('label');
  const titleIn = document.createElement('input');
  const labelTitle = document.createElement('label');
  const addHeader = document.createElement('h3');
  const button = document.createElement('button');
  const closeButton = document.createElement('button');

  addHeader.textContent = 'Add a new book';
  button.textContent = buttonText;
  button.setAttribute('type', 'submit');
  button.classList.add('button-js', 'js-button-confirm-add');
  closeButton.classList.add('close-btn');
  labelGenre.textContent = 'Genre Id';
  labelAuthor.textContent = 'Author';
  labelPrice.textContent = 'Price';
  labelTitle.textContent = 'Title';

  genre.classList.add('input-form','js-genre-input');
  genre.setAttribute('placeholder', 'Enter genre ID' );
  genre.setAttribute('type', 'number');
  authorIn.classList.add('input-form', 'js-author-input')
  authorIn.setAttribute('placeholder', 'Enter author' );
  authorIn.setAttribute('type', 'text');
  priceIn.classList.add('input-form','js-price-input');
  priceIn.setAttribute('placeholder', 'Enter price' );
  priceIn.setAttribute('type', 'number');
  titleIn.classList.add('input-form', 'js-title-input')
  titleIn.setAttribute('placeholder', 'Enter title' );
  titleIn.setAttribute('type', 'text');

  addForm.appendChild(addHeader);
  addForm.appendChild(closeButton);
  addForm.appendChild(labelGenre);
  addForm.appendChild(genre);
  addForm.appendChild(labelAuthor);
  addForm.appendChild(authorIn);
  addForm.appendChild(labelPrice);
  addForm.appendChild(priceIn);
  addForm.appendChild(labelTitle);
  addForm.appendChild(titleIn);
  addForm.appendChild(button);

  const root = document.querySelector('.js-form-section');
  root.insertAdjacentElement('afterbegin', addForm);
  
}

// Create table with book data
function createBookList(dataArray) {
  resetForm('.js-list');
  const table = document.createElement('table');
  const headers = document.createElement('tr');
  const bookId = document.createElement('th');
  const author = document.createElement('th');
  const title = document.createElement('th');
  const price = document.createElement('th');
  const genreId = document.createElement('th');

  headers.style = 'color: green;'
  bookId.textContent = 'Book id';
  author.textContent = 'Author';
  title.textContent = 'Title';
  price.textContent = 'Price $';
  genreId.textContent = 'Genre id';

  

  headers.appendChild(bookId);
  headers.appendChild(author);
  headers.appendChild(title);
  headers.appendChild(price);
  headers.appendChild(genreId);
  table.appendChild(headers);

  dataArray.forEach(element => {
    const headers = document.createElement('tr');
    const bookId = document.createElement('th');
    const author = document.createElement('th');
    const title = document.createElement('th');
    const price = document.createElement('th');
    const genreId = document.createElement('th');

    bookId.textContent = element.id;
    author.textContent = element.author;
    title.textContent = element.title;
    price.textContent = element.price;
    genreId.textContent = element.genreId;
      
    headers.appendChild(bookId);
    headers.appendChild(author);
    headers.appendChild(title);
    headers.appendChild(price);
    headers.appendChild(genreId);
    table.appendChild(headers);
  });

   const root = document.querySelector('.js-list');
   root.insertAdjacentElement('afterbegin', table);
}


function createGenreList(dataArray) {
  resetForm('.js-list');
  const table = document.createElement('table');
  const headers = document.createElement('tr');
  const genreId = document.createElement('th');
  const genreName = document.createElement('th');

  headers.style = 'color: green;'
  genreId.textContent = 'Genre id';
  genreName.textContent = 'Genre name';

  headers.appendChild(genreId);
  headers.appendChild(genreName);
  table.appendChild(headers);

  dataArray.forEach(element => {
    const headers = document.createElement('tr');
    const genreId = document.createElement('th');
    const genreName = document.createElement('th');

    genreId.textContent = element.id;
    genreName.textContent = element.name;

    headers.appendChild(genreId);
    headers.appendChild(genreName);
    table.appendChild(headers);

    
  });
  const root = document.querySelector('.js-list');
  root.insertAdjacentElement('afterbegin', table);
}



    //FORM EVENTlisteners HELPERS


//onCONFIRMadd - collect&check  data from input fields
//if data pass the checks next step is sending data to 
//server. Reset input fields to add more books.
function onConfirmAddClick() {
 
  const bookData = getInputData(false);

  addBook(bookData);

  const addForm = document.querySelector('.js-add-form')
  addForm.reset();

}

//CLOSE button on the ADD form
function onCloseBtnClick() {
  resetForm('.js-form-section');

}

// onEditSearch - fetching data from server,
// create edit form for choosen book.
function onSearchClick() {
  const titleInput = document.querySelector('.js-search-input');
  const title = titleInput.value;
  if(title === '') return;
  getBookBySelector(title);

  resetForm('.js-form-section');

}

// onEditConfirm submit - get data from input, send edited book data to server
function onEditConfirm() {
  const bookData = getInputData(true);

  editBook(bookData);
  resetForm('.js-form-section');

}
// onRemoveClick - get data from input, delete book by id
function onRemoveClick() {
  const idInput = document.querySelector('.js-search-input');
  const id = idInput.value;
  if(id === 0) return;
  removeBook(id);

  const removeForm = document.querySelector('.js-edit-search')
  removeForm.reset();
}
//onGenreAddClick - get data from input, add new genre 
function onGenreAddClick() {
  const genreInput = document.querySelector('.js-search-input');
  const genre = {
    name: genreInput.value,
  }
  console.log(genre);
  if(genre === '') return;
  addGenre(genre);
  
  const addForm = document.querySelector('.js-edit-search')
  addForm.reset();
}
// onGenreRemoveClick - get data from input,remove genre from server
function onGenreRemoveClick() {
  const genreInput = document.querySelector('.js-search-input');
  const id = genreInput.value;
  if(id <= 0 ) return;
  removeGenre(id);

  const removeForm = document.querySelector('.js-edit-search')
  removeForm.reset();
}
// onGenreEditClick - get data from input, get data to edit
function onGenreEditClick() {
  const titleInput = document.querySelector('.js-search-input');
  const title = titleInput.value;
  if(title === '') return;
  getGenreBySelector(title);

  resetForm('.js-form-section');
}
// onGenreEditConfirmClick - get data from input, send edited genre data to server 
function onGenreEditConfirmClick() {
  const genreNameInput = document.querySelector('.js-genre-input');
  const genreName = genreNameInput.value;

  const genreId = document.querySelector('.js-genre-id');
  const genreIdContent = genreId.textContent;
  const genreIdNumber = genreIdContent.match(/\d+/g).map(Number);

  const genreEditedData = {
    id: genreIdNumber[0],
    name: genreName
  };

  editGenre(genreEditedData)
  resetForm('.js-form-section');
}

//HELPERS

//resetForm - help to avoid more than 1 form at the same time on the page
function resetForm(classToSelect) {
  const formSection = document.querySelector(classToSelect);
  if(!formSection.hasChildNodes()) return;
  formSection.removeChild(formSection.childNodes[0]);

}

//Get data from input fields on add&edit operations
/**
 *
 *
 * @param {boolean(true/false) - get data from edit form /get data from add form (false)} edit
 * @returns bookData object with input data from edit/add form.
 */
function getInputData(edit) {
  const genreInput = document.querySelector('.js-genre-input');
  const authorInput = document.querySelector('.js-author-input');
  const priceInput = document.querySelector('.js-price-input');
  const titleInput = document.querySelector('.js-title-input');

  if (
    genreInput.value === 0 ||
    authorInput.value === '' ||
    priceInput.value === 0 ||
    titleInput.value === ''
  )
    return;
    if(genreInput.value < 0) {
      alert('Invalid genre id!')
      return;
    }
    if(priceInput.value < 0) {
      alert('Invalid price input!')
      return;
    }
    if(!edit) {
      const bookData = {
        genreId: Number(genreInput.value),
        author: authorInput.value,
        price: Number(priceInput.value),
        title: titleInput.value,
      };

    return bookData;
    }

    const bookId = document.querySelector('.js-book-id');
    const bookIdContent = bookId.textContent;
    const bookIdNumber = bookIdContent.match(/\d+/g).map(Number);

    const bookData = {
      genreId: Number(genreInput.value),
      author: authorInput.value,
      price: Number(priceInput.value),
      title: titleInput.value,
      id: bookIdNumber[0],
    };

    return bookData;

}
