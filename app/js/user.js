const navLinks = document.querySelectorAll('.nav__link');
const addBookSection = document.querySelector('#add-book');
const contactSection = document.querySelector('#contact');
const bookListSection = document.querySelector('#books-list');

navLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    if (index === 0) {
      if (bookListSection.classList.contains('close')) { bookListSection.classList.remove('close'); }
      addBookSection.classList.add('close');
      contactSection.classList.add('close');
    } else if (index === 1) {
      if (addBookSection.classList.contains('close')) { addBookSection.classList.remove('close'); }
      bookListSection.classList.add('close');
      contactSection.classList.add('close');
    } else if (index === 2) {
      if (contactSection.classList.contains('close')) { contactSection.classList.remove('close'); }
      bookListSection.classList.add('close');
      addBookSection.classList.add('close');
    }
  });
});
