import { collection, addBook, addBtn } from "./utilities.js";
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const title = document.querySelector(".book-title").value;
  const author = document.querySelector(".book-author").value;
  e.preventDefault();
  addBook(title, author);
});
