//=== DOM operations HELPERS
 import * as helpers from './helpers'
// Create search form for diff type of operation
/**
 *
 *
 * @param {Header text to be displayed of search form. ex: 'Edit book' || 'Add book'} header
 * @param {Form placehlolder text. ex:'Title' || 'Author'} searchBy
 * @param {Text to be displayed on the BUTTON} buttonText
 * @param {Type of input ex: text || number} type
 */
export function createSearchForm(header, searchBy, buttonText, type ) {
  helpers.resetForm('.js-form-section');

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
export function createEditGenre([{id, name}]) {
  helpers.resetForm('.js-form-section');

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
export function createEditForm ([{genreId, author, price, title, id}]) {
  helpers.resetForm('.js-form-section');

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

export function createAddForm(buttonText) {
  helpers.resetForm('.js-form-section');

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
export function createBookList(dataArray) {
  helpers.resetForm('.js-list');
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


export function createGenreList(dataArray) {
  helpers.resetForm('.js-list');
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
