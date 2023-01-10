const form = document.querySelector('.form__content');
const booksContainer = document.querySelector('.hero__collection');
class Book {
  static books = [];
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  saveStorage(book) {
    localStorage.setItem('books', JSON.stringify(book));
  }

  addBook(book) {
    const newBook = document.createElement('li');
    newBook.className = 'hero__book';
    newBook.innerHTML = `
    <p class="hero__book-title">${book.title}</p>
    <p class="hero__book-author">${book.author}</p>
    <button class="hero__book-remove">Remove</button>
    `;
    booksContainer.appendChild(newBook);
    Book.books.push(book);
    this.saveStorage(Book.books);
  }

  removeBook(element) {
    if (element.classList.contains('hero__book-remove')) {
      element.parentElement.remove();
    }
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const authorText = document.querySelector('.book-author').value;
  const titleText = document.querySelector('.book-title').value;
  const book = new Book(authorText, titleText);
  book.addBook(book);
});

booksContainer.addEventListener('click', (e) => {
  const book = new Book('title', 'author');
  book.removeBook(e.target);
});
