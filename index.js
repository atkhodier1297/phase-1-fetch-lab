function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  // fetches the url
  return fetch("https://anapioficeandfire.com/api/books")
  // promises a response in data
  .then(resp => resp.json())
  // turns the data to a readable format
  .then(json => renderBooks(json))
  // data is now displayed on site 
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
