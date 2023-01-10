class Book {
  static id = 0;
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Book.id;
  }
}

class userInterface {
  static loadBooks() {
    const books = StoreBooks.getBooks();

    books.forEach((book) => {
      userInterface.addBook(book);
    });
  }

  static addBook(book) {
    const newBook = document.createElement('li');
    newBook.className = 'hero__book';
    newBook.innerHTML = `
    <p class='hero__book-title'>${book.title}</p>
    <p class='hero__book-author'>${book.author}</p>
    <button class='hero__book-remove' id='${Book.id}'>Remove</button>
    `;
    booksContainer.appendChild(newBook);
  }

  static bookAddSuccess() {
    let formTitle = document.querySelector('.section__title');
    formTitle.innerHTML = 'New book added!';
    console.log(formTitle);

    setTimeout(() => {
      formTitle.innerHTML = 'Add new book';
    }, 2000);
  }

  static removeBook(target) {
    if (target.classList.contains('hero__book-remove')) {
      target.parentElement.remove();
    }
  }
}

class StoreBooks {
  static getBooks() {
    let books;

    if (localStorage.getItem('books')) {
      books = JSON.parse(localStorage.getItem('books'));
    } else {
      books = [];
    }

    return books;
  }

  static addBook(book) {
    const books = StoreBooks.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(element) {
    const books = StoreBooks.getBooks();
    const title = element.parentElement.firstElementChild.innerHTML;
    const index = books.findIndex((book) => {
      return book.title === title;
    });
    books.splice(index, 1);

    localStorage.setItem('books', JSON.stringify(books));
  }
}

window.addEventListener('load', userInterface.loadBooks);

const form = document.querySelector('.form__content');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const authorText = document.querySelector('.book-author').value;
  const titleText = document.querySelector('.book-title').value;

  const book = new Book(authorText, titleText);

  userInterface.addBook(book);
  StoreBooks.addBook(book);
  userInterface.bookAddSuccess();
});

const booksContainer = document.querySelector('.hero__collection');

booksContainer.addEventListener('click', (e) => {
  userInterface.removeBook(e.target);
  StoreBooks.removeBook(e.target);
});

document.addEventListener('DOMContentLoaded', Book.displayBooks);
