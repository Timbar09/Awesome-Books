export let collection = [
  {
    bookTitle: document.querySelector(".hero__book-title").innerHTML,
    bookAuthor: document.querySelector(".hero__book-author").innerHTML,
  },
];
let objCounter = 1;
export let cancelButtons = document.querySelectorAll(".hero__book-remove");
export const addBtn = document.querySelector(".book-add");
let booksContainer = document.querySelector(".hero__collection");
let bookContainers = document.querySelectorAll(".hero__book");

export const addBook = () => {
  const title = document.querySelector(".book-title").value;
  const author = document.querySelector(".book-author").value;
  collection.push({
    bookTitle: title,
    bookAuthor: author,
  });
  return;
};

export const insertBook = () => {
  objCounter = objCounter + 1;
  const title = document.querySelector(".book-title").value;
  const author = document.querySelector(".book-author").value;
  booksContainer.innerHTML += `
        <li class="hero__book" id=${objCounter}>
          <p class="hero__book-title">${title}</p>
          <p class="hero__book-author">${author}</p>
          <button class="hero__book-remove" id=${objCounter}>Remove</button>
          <hr />
        </li>
`;
  bookContainers = document.querySelectorAll(".hero__book");
  cancelButtons = document.querySelectorAll(".hero__book-remove");
  return;
};

export const rmoveLoad = () => {
  cancelButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      collection.splice(btn.id - 1, 1);
      bookContainers[btn.id - 1].classList.add("close");
    });
  });
};
