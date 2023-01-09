import {
  collection,
  addBook,
  insertBook,
  cancelButtons,
  bookContainers,
  objCounter,
} from "./utilities.js";

const addBtn = document.querySelector(".book-add");

const removeLoad = () => {
  cancelButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      collection.splice(btn.id - 1, 1);
      bookContainers[btn.id - 1].classList.add("close");
    });
  });
};

addBtn.addEventListener("click", (e) => {
  addBook();
  insertBook(objCounter);
  removeLoad();
});
