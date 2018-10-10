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
    img: 'https://placeimg.com/400/150/arch',
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
};

function createPostCard({
  img = '',
  title = 'newTitle',
  text = '',
  link = ''
}) {
  const postWrapper = document.createElement('div');
  const postImg = document.createElement('img');
  const postTitle = document.createElement('h2');
  const postText = document.createElement('p');
  const bttn = createButton({
    text: 'Read more...',
    className: 'button',
    link: link
  });

  postWrapper.classList.add('post');
  postImg.classList.add('post__image');
  postTitle.classList.add('post__title');
  postText.classList.add('post__text');

  postImg.setAttribute('src', img);
  postImg.setAttribute('alt', 'post image');

  postText.textContent = text;
  postTitle.textContent = title;
  postWrapper.append(postImg, postTitle, postText, bttn);

  return postWrapper;
}

function createCards(postsArr) {
  const postsEls = postsArr.map(postItem => createPostCard(postItem));

  // const postsEls = [];
  // postsArr.forEach(item => {
  //   const post = createPostCard({
  //     img: item.img,
  //     title: item.title,
  //     text: item.text,
  //     link: item.link
  //   });
  //   postsEls.push(post);
  // });
  return postsEls;
}
