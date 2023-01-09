export const collection = [];
collection.push({
  bookTitle: document.querySelector('.hero__book-title').innerHTML,
  bookAuthor: document.querySelector('.hero__book-author').innerHTML,
});

export const addBtn = document.querySelector('.book-add');
const booksContainer = document.querySelector('.hero__collection');

export const addBook = () => {
  const title = document.querySelector('.book-title').value;
  const author = document.querySelector('.book-author').value;
  collection.push({
    bookTitle: title,
    bookAuthor: author,
  });
};

export const insertBook = () => {
  const title = document.querySelector('.book-title').value;
  const author = document.querySelector('.book-author').value;
  booksContainer.innerHTML += `
        <li class="hero__book" id=${collection.length}>
          <p class="hero__book-title">${title}</p>
          <p class="hero__book-author">${author}</p>
          <button class="hero__book-remove" id=${collection.length}>Remove</button>
          <hr />
        </li>
`;
};

export const remove = (id) => {
  // collection = collection.filter((book, index) => {
  //   index !== id - 1;
  // });
  console.log(id);

  console.log(collection);
  // return collection;
};
