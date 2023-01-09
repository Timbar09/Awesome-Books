export const collection = [];
export const addBtn = document.querySelector(".book-add");

export const addBook = (title, author) => {
  collection.push({
    bookTitle: title,
    bookAuthor: author,
  });
};
