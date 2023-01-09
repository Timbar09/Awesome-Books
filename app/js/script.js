import { collection, addBook, insertBook, remove } from './utilities.js';
const form = document.querySelector('form');

const cancelButtons = document.querySelectorAll('.hero__book-remove');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
  insertBook();
  const cancelButtons = document.querySelectorAll('.hero__book-remove');
  console.log(collection);
});

cancelButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // remove(btn.id);
    console.log(index);
  });
});
