'use strict';

import * as api from './js/api';
import * as form from './js/view';
import * as helpers from './js/helpers';
import './css/styles.css';


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
    form.createAddForm('Add');
    console.log('Add button work!');
  } 
  
  if (e.target.classList.contains('js-button-removeB')) {
    form.createSearchForm('Remove book', 'id', 'remove', 'number');
    console.log( 'Remove button work!');
  } 

  if (e.target.classList.contains('js-button-editB')) {
    console.log('Edit button work!');
    form.createSearchForm('Edit book', 'title', 'search', 'text'); 
  }

  if (e.target.classList.contains('js-button-viewB')) {
    console.log('View button work!');
    api.getBooksList();
  }

  if (e.target.classList.contains('js-button-addG')) {
    console.log('Add genre button work!');
    form.createSearchForm('Add genre', 'genre', 'add', 'text');  
  }

  if (e.target.classList.contains('js-button-removeG')) {
    console.log('Remove genre button work!');
    form.createSearchForm('Remove genre', 'id', 'delete', 'number');  
  }

  if (e.target.classList.contains('js-button-editG')) {
    console.log('View button work!');
    form.createSearchForm('Edit genre', 'genre', 'search', 'text');  
  }

  if (e.target.classList.contains('js-button-viewG')) {
    console.log('View button work!');
    api.getGenresList();  
  }
}

//Section form eventListener 
function onSectionButtonClick(e) {

  e.preventDefault();
  if(e.target.nodeName !== 'BUTTON') return;

  if(e.target.classList.contains('js-button-title-search')) {
    helpers.onSearchClick();
  }
  
  if(e.target.classList.contains('js-button-confirm-add')) {
    helpers.onConfirmAddClick();
  }

  if(e.target.classList.contains('js-edit-confirm-button')) {
    helpers.onEditConfirm();
  }

  if(e.target.classList.contains('close-btn')) {
    helpers.onCloseBtnClick();
  }

  if(e.target.classList.contains('js-button-id-remove')) {
    helpers.onRemoveClick();
  }

  if(e.target.classList.contains('js-button-genre-add')) {
    helpers.onGenreAddClick();
  }

  if(e.target.classList.contains('js-button-id-delete')) {
    helpers.onGenreRemoveClick();
  }

  if(e.target.classList.contains('js-button-genre-search')) {
    helpers.onGenreEditClick();
  }
  
  if(e.target.classList.contains('js-editG-confirm-button')) {
    helpers.onGenreEditConfirmClick();
  }
}
