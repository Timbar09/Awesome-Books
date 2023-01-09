let collection = [];
let cancelButtons = document.querySelectorAll('.hero__book-remove');
export const addBtn = document.querySelector('.book-add');
let booksContainer = document.querySelector('.hero__collection');
let bookContainers = document.querySelectorAll('.hero__book');

export const addBook = () => {
  const title = document.querySelector('.book-title').value;
  const author = document.querySelector('.book-author').value;
  collection.push({
    bookTitle: title,
    bookAuthor: author,
  });
  localStorage.setItem('book', JSON.stringify(collection));
  bookContainers = document.querySelectorAll('.hero__book');
  cancelButtons = document.querySelectorAll('.hero__book-remove');
};

export const removeLoad = () => {
  cancelButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      collection.splice(index, 1);
      localStorage.setItem('book', JSON.stringify(collection));
      bookContainers[index].classList.add('close');
    });
  });
};

export const insertBook = () => {
  booksContainer.innerHTML = '';
  collection.forEach((book, index) => {
    booksContainer.innerHTML += `
        <li class="hero__book" id=${index + 1}>
        <p class="hero__book-title">${book.bookTitle}</p>
        <p class="hero__book-author">${book.bookAuthor}</p>
        <button class="hero__book-remove" id=${index + 1}>Remove</button>
        <hr />
        </li>
        `;
  });
  bookContainers = document.querySelectorAll('.hero__book');
  cancelButtons = document.querySelectorAll('.hero__book-remove');
  removeLoad();
};

const data = () => {
  const loadCollection = JSON.parse(localStorage.getItem('book'));
  if (loadCollection) {
    collection = loadCollection;
    insertBook();
  }
};

window.addEventListener('DOMContentLoaded', data);
