const btn = document.querySelector("#addBook");
const title = document.querySelector("#title").value;
const author = document.querySelector("#author").value;
const pages = document.querySelector("#pages").value;
const books = document.querySelector("#book");
const p = document.createElement("p");
let myLibrary = [];
let addNewBook = "";

class Book {
  addBook(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    addNewBook = `${title}, By: ${author}, ${pages} pages`;
  }
}

class newBook extends Book {
  addBookToLibrary(book) {
    myLibrary.push(book);
  }
}

function appendClass() {
  myLibrary.forEach((book) => {
    books.innerHTML += book;
  });
}

btn.addEventListener("click", (event) => {
  console.log(myLibrary);
  if (title && author && pages !== null) {
    event.preventDefault();
    const currentBook = new newBook();
    currentBook.addBook(title, author, pages);
    currentBook.addBookToLibrary(addNewBook);
    appendClass();
  }
  event.preventDefault();
});
