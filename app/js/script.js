import { collection, addBook, insertBook, rmoveLoad } from "./utilities.js";

const addBtn = document.querySelector(".book-add");

addBtn.addEventListener("click", (e) => {
  addBook();
  insertBook();
  localStorage.setItem("book", JSON.stringify(collection));
  rmoveLoad();
});
