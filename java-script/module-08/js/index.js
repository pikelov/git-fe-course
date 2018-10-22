'use strict';

const galleryItems = [
  {
    preview: 'img/preview/preview-1.jpeg',
    fullview: 'img/fullview/fullview-1.jpeg',
    alt: 'alt text 1'
  },
  {
    preview: 'img/preview/preview-2.jpeg',
    fullview: 'img/fullview/fullview-2.jpeg',
    alt: 'alt text 2'
  },
  {
    preview: 'img/preview/preview-3.jpeg',
    fullview: 'img/fullview/fullview-3.jpeg',
    alt: 'alt text 3'
  },
  {
    preview: 'img/preview/preview-4.jpeg',
    fullview: 'img/fullview/fullview-4.jpeg',
    alt: 'alt text 4'
  },
  {
    preview: 'img/preview/preview-5.jpeg',
    fullview: 'img/fullview/fullview-5.jpeg',
    alt: 'alt text 5'
  },
  {
    preview: 'img/preview/preview-6.jpeg',
    fullview: 'img/fullview/fullview-6.jpeg',
    alt: 'alt text 6'
  }
];

const imageGallery = document.querySelector('.image-gallery');
imageGallery.classList.add('js-image-gallery');

const fullview = createFullviewElem(galleryItems);
const previewList = createPreviewList(galleryItems);

imageGallery.append(fullview, previewList);

const imgList = document.querySelector('.preview');
const imageFullview = document.querySelector('.image-fullview');
const images = imgList.querySelectorAll('img');

imgList.addEventListener('click', onListClick);

/* Create element 'ul' and spread image collection
  from createImagePreview function*/
function createPreviewList(arr) {
  const list = document.createElement('ul');
  list.classList.add('preview');

  const itemsPreview = createImagePreview(arr);
  list.append(...itemsPreview);

  return list;
}
/**
 *Create collection of elements 'li' from incoming imageDB
 *
 * @param {array of objects} imageDB
 * @returns collection of 'li' elements with placed images
 */
function createImagePreview(imageDB) {
  let items = [];
  imageDB.forEach(elem => {
    const item = document.createElement('li');
    const image = document.createElement('img');
    image.classList.add('image-preview');
    image.setAttribute('src', elem.preview);
    image.setAttribute('data-fullview', elem.fullview);
    image.setAttribute('alt', elem.alt);
    item.append(image);
    items.push(item);
  });

  return items;
}

/**
 *Create fullview image container with content
 *
 * @param {array of objects} arr
 * @returns Ready for append to parentNode fullview element
 */
function createFullviewElem(arr) {
  const fullview = document.createElement('div');
  fullview.classList.add('fullview');

  const imageFullview = createImageFullview(arr);
  fullview.append(imageFullview);

  return fullview;
}

/**
 *Create img content for  function createFullviewElem
 *
 * @param {array of objects} arr
 * @returns
 */
function createImageFullview(arr) {
  const fullview = document.createElement('img');
  fullview.classList.add('image-fullview');
  fullview.setAttribute('src', arr[0].fullview);
  fullview.setAttribute('alt', arr[0].alt);

  return fullview;
}

function onListClick({ target }) {
  const nodeName = target.nodeName;

  if (nodeName !== 'IMG') return;
  imageFullview.setAttribute('src', target.dataset.fullview);

  images.forEach(image => {
    console.log(image !== 'IMG');
    image !== target ? image.classList.remove('effect') : image.classList.add('effect');
  });
}
