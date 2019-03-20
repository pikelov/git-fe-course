//HELPERS
import * as api from './api';
import * as form from './view';

// resetForm - help to avoid more than 1 form at the same time on the section
/**
 *
 *
 * @param {string} classToSelect
 */
export function resetForm(classToSelect) {
  const formSection = document.querySelector(classToSelect);
  if(!formSection.hasChildNodes()) return;
  formSection.removeChild(formSection.childNodes[0]);

}

//Get data from input fields on add&edit operations
/**
 * get data from edit form (true) /get data from add form (false) 
 *  
 * @param {boolean} edit
 * @returns bookData object with input data from edit || add form.
 */
export function getInputData(edit) {
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

    //FORM EVENTlisteners HELPERS


//onCONFIRMadd - collect&check  data from input fields
//if data pass the checks next step is sending data to 
//server. Reset input fields to add more books.
export function onConfirmAddClick() {
 
  const bookData = getInputData(false);

  api.addBook(bookData);

  const addForm = document.querySelector('.js-add-form')
  addForm.reset();

}

//CLOSE button on the ADD form
export function onCloseBtnClick() {
  resetForm('.js-form-section');

}

// onEditSearch - fetching data from server,
// create edit form for choosen book.
export function onSearchClick() {
  const titleInput = document.querySelector('.js-search-input');
  const title = titleInput.value;
  if(title === '') return;
  api.getBookBySelector(title);

  resetForm('.js-form-section');

}

// onEditConfirm submit - get data from input, send edited book data to server
export function onEditConfirm() {
  const bookData = getInputData(true);

  api.editBook(bookData);
  resetForm('.js-form-section');

}
// onRemoveClick - get data from input, delete book by id
export function onRemoveClick() {
  const idInput = document.querySelector('.js-search-input');
  const id = idInput.value;
  if(id === 0) return;
  api.removeBook(id);

  const removeForm = document.querySelector('.js-edit-search')
  removeForm.reset();
}
//onGenreAddClick - get data from input, add new genre 
export function onGenreAddClick() {
  const genreInput = document.querySelector('.js-search-input');
  const genre = {
    name: genreInput.value,
  }
  console.log(genre);
  if(genre === '') return;
  api.addGenre(genre);
  
  const addForm = document.querySelector('.js-edit-search')
  addForm.reset();
}
// onGenreRemoveClick - get data from input,remove genre from server
export function onGenreRemoveClick() {
  const genreInput = document.querySelector('.js-search-input');
  const deletedGenreId = Number(genreInput.value);
  if(deletedGenreId <= 0 ) return;
  api.removeGenre(deletedGenreId);
  api.replaceDeletedGenre(deletedGenreId);

  const removeForm = document.querySelector('.js-edit-search')
  removeForm.reset();
}
// onGenreEditClick - get data from input, get data to edit
export function onGenreEditClick() {
  const titleInput = document.querySelector('.js-search-input');
  const title = titleInput.value;
  if(title === '') return;
  api.getGenreBySelector(title);

  resetForm('.js-form-section');
}
// onGenreEditConfirmClick - get data from input, send edited genre data to server 
export function onGenreEditConfirmClick() {
  const genreNameInput = document.querySelector('.js-genre-input');
  const genreName = genreNameInput.value;

  const genreId = document.querySelector('.js-genre-id');
  const genreIdContent = genreId.textContent;
  const genreIdNumber = genreIdContent.match(/\d+/g).map(Number);

  const genreEditedData = {
    id: genreIdNumber[0],
    name: genreName
  };

  api.editGenre(genreEditedData)
  resetForm('.js-form-section');
}


// Event listeners helpers

//==Main menu Event listener function

export function onMenuButtonClick(e) {
  e.preventDefault();
  const nodeName = e.target.nodeName;

  if (nodeName !== 'BUTTON') return;

  caseSwitcherHeaderSection(e);
}

//Section form eventListener 
export function onSectionButtonClick(e) {

  e.preventDefault();
  if(e.target.nodeName !== 'BUTTON') return;

  caseSwitcherFormSection(e);
}

function caseSwitcherHeaderSection(event) {
  const targetClass = event.target.classList;

  switch(true){
    case targetClass.contains('js-button-addB'):
    form.createAddForm('Add');
      break;

    case targetClass.contains('js-button-removeB'):
      form.createSearchForm('Remove book', 'id', 'remove', 'number');
      break;
    
    case targetClass.contains('js-button-editB'): 
      form.createSearchForm('Edit book', 'title', 'search', 'text');
      break;

    case targetClass.contains('js-button-viewB'):
      api.getBooksList();
      break;

    case targetClass.contains('js-button-addG'):
      form.createSearchForm('Add genre', 'genre', 'add', 'text');  
      break;

    case targetClass.contains('js-button-removeG'):
      form.createSearchForm('Remove genre', 'id', 'delete', 'number');  
      break;
    
    case targetClass.contains('js-button-editG'):
      form.createSearchForm('Edit genre', 'genre', 'search', 'text');  
      break;

    case targetClass.contains('js-button-viewG'):
      api.getGenresList(); 
      break; 
  } 

}


function caseSwitcherFormSection(event) {
  const targetClass = event.target.classList;

  switch(true){
    case targetClass.contains('js-button-title-search'):
      onSearchClick();
      break;

    case targetClass.contains('js-button-confirm-add'):
      onConfirmAddClick();
      break;
    
    case targetClass.contains('js-edit-confirm-button'):
      onEditConfirm();
      break;

    case targetClass.contains('close-btn'):
      onCloseBtnClick();
      break;

    case targetClass.contains('js-button-id-remove'):
      onRemoveClick();  
      break;

    case targetClass.contains('js-button-genre-add'):
      onGenreAddClick();  
      break;
    
    case targetClass.contains('js-button-id-delete'):
      onGenreRemoveClick();
      break;

    case targetClass.contains('js-button-genre-search'):
      helpers.onGenreEditClick();
      break; 

    case targetClass.contains('js-editG-confirm-button'):
      helpers.onGenreEditConfirmClick();
      break; 

  }  
}
