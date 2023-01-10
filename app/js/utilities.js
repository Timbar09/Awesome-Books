const form = document.querySelector('.form__content');
const booksContainer = document.querySelector('.hero__collection');
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    const newBook = document.createElement('li');
    newBook.className = 'hero__book';
    newBook.innerHTML = `
    <p class="hero__book-title">${this.title}</p>
    <p class="hero__book-author">${this.author}</p>
    <button class="hero__book-remove">Remove</button>
    `;
    booksContainer.appendChild(newBook);
  }

  removeBook(element) {
    if (element.classList.contains('.hero__book-remove')) {
      element.parentElement.remove();
    }
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const authorText = document.querySelector('.book-author').value;
  const titleText = document.querySelector('.book-title').value;
  const book = new Book(authorText, titleText);
  book.addBook();
  console.log(book);
});

booksContainer.addEventListener('click', (e) => {
  // const book = new Book('title', 'author');

  removeBook(e.target);
});
