import * as form from './view'

//CRUD FUNCTIONES

// This server-emulator doesn't have backend for fetcing data by title, it has id fetching only.
// Thats why I use GET method and after (in getBookBySelector();) use array-fn.method 
// .filter, to get requested data.

//Add book (create)
/**
 * fn accept object with fields: genreId, author, price, title
 * @param {object} bookObj
 */
export const addBook = bookObj =>
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

//Edit book (update)
export const editBook = bookObj =>
  fetch(`https://my-json-server.typicode.com/pikelov/fake-server/books/${bookObj.id}`, {
    method: 'PUT',
    body: JSON.stringify(bookObj),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => {
    if(response.ok) 
    console.log('Book updated!');
    return response.json()
  })
  .catch(error => console.log('ERROR' + error));


//get books array
export const getBooksList = () =>
fetch(`https://my-json-server.typicode.com/pikelov/fake-server/books`)
.then(response => {
  console.log(response);
  if (response.ok) return response.json();
  throw new Error(response.statusText);
})
.then(data => form.createBookList(data))
.catch(err => console.log('ERROR:' + err));


//Get books by title
export const getBookBySelector = title =>
  fetch(`https://my-json-server.typicode.com/pikelov/fake-server/books`)
    .then(response => {
      console.log(response);
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    })
    .then(data => data.filter(books => books.title === title))
    .then(filteredData => {
      const fetchedData = filteredData;
      form.createEditForm(fetchedData);
    })
    .catch(err => console.log('ERROR:' + err));

// replace deleted genre id to 0 on server
    export const replaceDeletedGenre = deletedGenreId =>
    fetch(`https://my-json-server.typicode.com/pikelov/fake-server/books`)
      .then(response => {
        console.log(response);
        if (response.ok) return response.json();
        throw new Error(response.statusText);
      })
      .then(data => {
        const newBooks = data.map(book => {
          if(book.genreId === deletedGenreId) {
            book.genreId = 0;
          }
          return book;
        });
        console.log(newBooks);
        newBooks.forEach(book => {
          editBook(book);
      })
    })
      .catch(err => console.log('ERROR:' + err));

//remove book
export const removeBook = id =>
fetch(`https://my-json-server.typicode.com/pikelov/fake-server/books/${id}`, {
  method: 'DELETE'
}).then(() => console.log('request send'))
.catch(error => console.log('ERROR' + error));


// GET genre by genre name ex: 'History'
export const getGenreBySelector = genreName =>
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
  form.createEditGenre(fetchedData);
})
.catch(err => console.log('ERROR:' + err));


//Add genre
export const addGenre = genre =>
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
export const removeGenre = id =>
  fetch(`https://my-json-server.typicode.com/pikelov/fake-server/genres/${id}`, {
    method: 'DELETE'
  })
  .then(() => console.log('request send'))
  .catch(error => console.log('ERROR' + error));


// EDIT genre
export const editGenre = (genreObj) =>
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


export const getGenresList = () =>
  fetch(`https://my-json-server.typicode.com/pikelov/fake-server/genres`)
  .then(response => {
    console.log(response);
    if (response.ok) return response.json();
    throw new Error(response.statusText);
  })
  .then(data => form.createGenreList(data));