import { collection, addBook, insertBook } from "./utilities.js";
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
  insertBook();
  console.log(collection);
});
