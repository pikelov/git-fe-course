'use strict';

import * as api from './js/api';
import * as helpers from './js/helpers';
import './css/styles.css';


const buttonSection = document.querySelector('.crud-js');
buttonSection.addEventListener('click', helpers.onMenuButtonClick);


const jsFormSection = document.querySelector('.js-form-section');
jsFormSection.addEventListener('click', helpers.onSectionButtonClick);
