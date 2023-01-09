export let collection = [
  {
    bookTitle: document.querySelector('.hero__book-title').innerHTML,
    bookAuthor: document.querySelector('.hero__book-author').innerHTML,
  },
];
export let objCounter = 1;
export let cancelButtons = document.querySelectorAll('.hero__book-remove');
export const addBtn = document.querySelector('.book-add');
let booksContainer = document.querySelector('.hero__collection');
export let bookContainers = document.querySelectorAll('.hero__book');

export const addBook = () => {
  const title = document.querySelector('.book-title').value;
  const author = document.querySelector('.book-author').value;
  collection.push({
    bookTitle: title,
    bookAuthor: author,
  });
  localStorage.setItem('book', JSON.stringify(collection));
  objCounter = objCounter + 1;
  return;
};

export const insertBook = (objCnt) => {
  booksContainer.innerHTML += `
        <li class="hero__book" id=${objCnt}>
          <p class="hero__book-title">${collection[objCnt - 1].bookTitle}</p>
          <p class="hero__book-author">${collection[objCnt - 1].bookAuthor}</p>
          <button class="hero__book-remove" id=${objCnt}>Remove</button>
        </li>
`;
  bookContainers = document.querySelectorAll('.hero__book');
  cancelButtons = document.querySelectorAll('.hero__book-remove');
  return;
};

const data = () => {
  collection = JSON.parse(localStorage.getItem('book'));
  for (let i = 2; i < collection.length; i++) insertBook(i);
};

window.addEventListener('DOMContentLoaded', data);
