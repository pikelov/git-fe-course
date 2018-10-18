'use strict';

const galleryItems = [
    { preview: 'img/preview/preview-1.jpeg', fullview: 'img/fullview/fullview-1.jpeg', alt: "alt text 1" },
    { preview: 'img/preview/preview-2.jpeg', fullview: 'img/fullview/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview/preview-3.jpeg', fullview: 'img/fullview/fullview-3.jpeg', alt: "alt text 3" },
    { preview: 'img/preview/preview-4.jpeg', fullview: 'img/fullview/fullview-4.jpeg', alt: "alt text 4" },
    { preview: 'img/preview/preview-5.jpeg', fullview: 'img/fullview/fullview-5.jpeg', alt: "alt text 5" },
    { preview: 'img/preview/preview-6.jpeg', fullview: 'img/fullview/fullview-6.jpeg', alt: "alt text 6" },
];
  
const imageGallery = document.querySelector('.image-gallery');
imageGallery.classList.add('js-image-gallery');

const fullview = createFullviewElem(galleryItems);
const previewList = createPreviewList(galleryItems);

imageGallery.append(fullview, previewList );

const imgList = document.querySelector('.preview');
const imageFullview = document.querySelector('.image-fullview');
const images = imgList.querySelectorAll('img');

imgList.addEventListener('click', onListClick);

console.log()
/* Create element 'ul' and spread image collection
  from createImagePreview function*/
function createPreviewList (arr) {
  const list = document.createElement('ul');
  list.classList.add('preview')

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
    image.classList.add('img-thumbnail');
    image.setAttribute('src', elem.preview);
    image.setAttribute('data-fullview', elem.fullview);
    image.setAttribute('alt', elem.alt);
    item.append(image);
    items.push(item);
  });

  return items;
}

function createFullviewElem(arr) {
  const fullview = document.createElement('div');
  fullview.classList.add('fullview');

  const imageFullview = createImageFullview(arr);
  fullview.append(imageFullview);

  return fullview;
}

function createImageFullview (arr) {
  const fullview = document.createElement('img');
  fullview.classList.add('image-fullview');
  fullview.setAttribute('src', arr[0].fullview );
  fullview.setAttribute('alt', arr[0].alt);

  return fullview;
}

function onListClick({ target }) {
  const nodeName = target.nodeName;

  if (nodeName !== 'IMG') return;
  imageFullview.setAttribute('src', target.dataset.fullview);

  images.forEach(image => {
    if (image !== target) {
      image.classList.remove('effect');
    } else {
      image.classList.add('effect');
    }
  });
}
/*
  Создайте компонент галлереи изображений следующего вида.
  
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      


  
  
  /*
    ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
    
    Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
    чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
    аналогичный заданию выше.
    
    При создании экземпляра конструктор получает:
      - items - список элементов для preview
      - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
      - defaultActiveItem - номер активного элемента preview по умолчанию
      
    Тогда создание экземпляра будет выглядеть следующим образом.
  */
  
//   new Gallery({
//     items: galleryItems,
//     parentNode: document.querySelector('.image-gallery'),
//     defaultActiveItem: 1
//   });
  
  /* Далее плагин работает в автономном режиме */

//   const gallery = document.querySelector('.image-gallery');
//   gallery.classList.add('js-image-gallery');

//   const fullview = createFullview();
//   const preview = createPreview();

//   gallery.append(fullview, preview);


//   const list = document.querySelector('.preview');
//   const images = list.querySelectorAll('img');
//   const imageFullview = document.querySelector('.image-fullview');
  
//   list.addEventListener('click', onListClick);
  
// function createPreview () {

//   const previewList = document.createElement('ul');
//   previewList.classList.add('preview');

//   const imagePreview = createImagePreview(galleryItems);

//   previewList.append(...imagePreview);
    
//   return list;
// }

// function createFullview (galleryItems) {
//   const fullview = document.createElement('div');

//   fullview.classList.add('fullview');

//   const imageFullview = createImageFullview(galleryItems);
//   fullview.append(imageFullview);

//   return fullview;
// }
 
// function createImagePreview () {
  
// }

// function createImageFullview ({ 
//     preview = 'preview',
//     fullview = 'fullview',
//     alt = 'alt'
//   }) {
//     const fullView = createFullview(galleryItems);

//     return fullView;
// }
