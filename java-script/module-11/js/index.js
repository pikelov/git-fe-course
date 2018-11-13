/* eslint-disable no-undef */
'use strict';
const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];

const container = document.querySelector('.items-container');
const inputForm = document.querySelector('.js-form');
const source = document.querySelector('#collection-item').innerHTML.trim();
const template = Handlebars.compile(source);
const filter = { size: [], color: [], release_date: [] };


// Sorting types of values from checkbox array & pushing to filter obj
function sortCheckedArray(array, obj) {
  array.forEach((elem) => {
    switch (true) {
      case (elem.name === 'size'): {
        obj.size.push(elem.value);
        break;
      }
      case (elem.name === 'color'): {
        obj.color.push(elem.value);
        break;
      }
      case (elem.name === 'release_date'): {
        obj.release_date.push(elem.value);
        console.log(filter);
        break;
      }

      default: { alert('blin ja hz poka chto tyt bydet'); }
    }
  });
}


// Getting checked input checkboxes & sort
function getCheckedFilters() {
  const checked = Array.from(document.querySelectorAll('input:checked'));
  sortCheckedArray(checked, filter);
}

function filterItemsToRender({ size, color, release_date}) {
//  ???
}

function renderFiltredItems() {}

function handleClick(evt) {
  evt.preventDefault();
  getCheckedFilters();
  filterItemsToRender(filter);
}

inputForm.addEventListener('submit', handleClick);
const markup = template(laptops);
container.insertAdjacentHTML('afterbegin', markup);
