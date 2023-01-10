import { addBook, insertBook, removeLoad } from './utilities.js';

const addBtn = document.querySelector('.book-add');

addBtn.addEventListener('click', () => {
  addBook();
  insertBook();
  removeLoad();
});
