'use strict';

/*2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: 'https://placeimg.com/400/150/arch',
    title: 'Post title 1',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-1.com'
  },
  {
    img: 'https://placeimg.com/400/150/nature',
    title: 'Post title 2',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-2.com'
  },
  {
    img: 'https://placeimg.com/400/150/tech',
    title: 'Post title 3',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-3.com'
  }
];

const root = document.querySelector('#root');

const newPosts = createCards(posts);

root.append(...newPosts);

function createButton({ text = 'Read more', className = '', link = '#' }) {
  const btn = document.createElement('a');
  btn.textContent = text;
  btn.classList.add(className);
  btn.setAttribute('href', link);

  return btn;
}

function createImgElem(imgElem) {
  const postImg = document.createElement('img');
  postImg.classList.add('post__image');
  postImg.setAttribute('src', imgElem);
  postImg.setAttribute('alt', 'post image');

  return postImg;
}

function createTitleElem(titleText) {
  const postTitle = document.createElement('h2');
  postTitle.classList.add('post__title');
  postTitle.textContent = titleText;

  return postTitle;
}

function createTextElem(textContent) {
  const postText = document.createElement('p');
  postText.classList.add('post__text');
  postText.textContent = textContent;

  return postText;
}

function createPostCard({
  img = '',
  title = 'newTitle',
  text = '',
  link = ''
}) {
  const postWrapper = document.createElement('div');
  postWrapper.classList.add('post');

  const bttn = createButton({
    text: 'Read more...',
    className: 'button',
    link: link
  });

  const postImg = createImgElem(img);
  const postTitle = createTitleElem(title);
  const postText = createTextElem(text);

  postWrapper.append(postImg, postTitle, postText, bttn);

  return postWrapper;
}

function createCards(postsArr) {
  const postsEls = postsArr.map(postItem => createPostCard(postItem));

  return postsEls;
}
