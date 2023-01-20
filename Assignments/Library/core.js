const btn = document.querySelector("#addBook");
const title = document.querySelector("#title").value;
const author = document.querySelector("#author").value;
const pagesRead = document.querySelector("#pagesRead");
const pages = document.querySelector("#pages").value;
const books = document.querySelector("#book");
const ifError = document.querySelector("#ifError");

let myLibrary = [];
let id = 0;
let sign = "";
let card = "";
let remove = "";
let cardRemove = "";
/*
Get input from the Form
then we need to put the data from the form into a book
then add the book to the myLibrary
then show said book in the "shelf" where you can changed how many pages read and if youve finishd the book
*/
class Book {
  constructor(title, author, pagesRead, pages, hasRead, id) {
    this.title = title;
    this.author = author;
    this.pagesRead = pagesRead;
    this.pages = pages;
    this.hasRead = hasRead;
    this.id = id;
  }

  addBooks() {
    books.innerHTML = "";
    myLibrary.forEach((book) => {
      books.innerHTML += `
<div class="card" value="${myLibrary.indexOf(book)}">      
  <div>
    <h2>Title: ${book.title}</h2>
  </div>
  <div>
    <h3>Author: ${book.author}</h3>
  </div>
  <div>
    <p>Pages Read: ${book.pagesRead}</p>
  </div>
    <div>
      <p>Pages: ${book.pages}</p>
    </div>
    <div>
      <p>Has Read : ${book.hasRead}</p >
    </div>
    <button id="remove" value="${book.id}">Remove</button>
  </div>       
</div>`;
    });
    cardRemove = document.querySelector("#remove");
    remove = document.querySelectorAll("#remove");
  }

  addBookToLibrary() {
    ifError.textContent = "";
    const found = myLibrary.some((check) => check.title === this.title);
    if (!found) {
      myLibrary.push(this);
    } else {
      ifError.textContent = "This Book already exists";
      console.log(this.title);
    }
  }
}
let book = "book";

var global = new Book();
//newBook.addBooks();

btn.addEventListener("click", (event) => {
  global = new Book(title, author, pagesRead, pages, false, id);
  id++;
  global.addBookToLibrary();
  global.addBooks();
  event.preventDefault();
});

remove.forEach((remove) =>
  remove.addEventListener("click", () => {
    console.log(remove.value);
    myLibrary.splice(remove.value - 1, 1);
    global.addBooks();
  })
);
