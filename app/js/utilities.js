export let collection = [
  {
    bookTitle: document.querySelector(".hero__book-title").innerHTML,
    bookAuthor: document.querySelector(".hero__book-author").innerHTML,
  },
];
export let objCounter = 1;
let rmCnt = 0;
export let cancelButtons = document.querySelectorAll(".hero__book-remove");
export const addBtn = document.querySelector(".book-add");
let booksContainer = document.querySelector(".hero__collection");
export let bookContainers = document.querySelectorAll(".hero__book");

export const addBook = () => {
  objCounter = objCounter + 1;
  const title = document.querySelector(".book-title").value;
  const author = document.querySelector(".book-author").value;
  collection.push({
    bookTitle: title,
    bookAuthor: author,
  });
  console.log(collection[objCounter - 1]);
  localStorage.setItem("book", JSON.stringify(collection));
  return;
};

export const insertBook = (objCnt) => {
  booksContainer.innerHTML += `
        <li class="hero__book" id=${objCnt}>
          <p class="hero__book-title">${
            collection[objCnt - 1 - rmCnt].bookTitle
          }</p>
          <p class="hero__book-author">${
            collection[objCnt - 1 - rmCnt].bookAuthor
          }</p>
          <button class="hero__book-remove" id=${objCnt}>Remove</button>
          <hr />
        </li>
`;
  bookContainers = document.querySelectorAll(".hero__book");
  cancelButtons = document.querySelectorAll(".hero__book-remove");
  return;
};

export const removeLoad = () => {
  cancelButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      collection.splice(btn.id - 1, 1);
      bookContainers[btn.id - 1].classList.add("close");
      rmCnt = rmCnt + 1;
      console.log(btn);
    });
  });
};

const data = () => {
  //   collection = JSON.parse(localStorage.getItem("book"));
  if (collection) {
    for (let i = 2; i < collection.length; i++) insertBook(i);
  }
};

window.addEventListener("DOMContentLoaded", data);
