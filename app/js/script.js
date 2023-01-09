import { collection, addBook, insertBook, removeLoad } from "./utilities.js";

const addBtn = document.querySelector(".book-add");

addBtn.addEventListener("click", (e) => {
  addBook();
  insertBook();
  removeLoad();
});
