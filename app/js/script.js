import {
  collection,
  addBook,
  insertBook,
  objCounter,
  removeLoad,
} from "./utilities.js";

const addBtn = document.querySelector(".book-add");

addBtn.addEventListener("click", (e) => {
  addBook();
  insertBook(objCounter);
  removeLoad();
  console.log(collection);
});
