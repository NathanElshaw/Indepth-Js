const btn = document.querySelector("#addBook");
//const title = document.querySelector("#title").value;
//const author = document.querySelector("#author").value;
//const pages = document.querySelector("#pages").value;
const books = document.querySelector("#book");
const ifError = document.querySelector("#ifError");
let myLibrary = [];
let id = 0;
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
<div class="card" value="${book.id}">      
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
    } else ifError.textContent = "This Book already exists";
  }
}

var newBook = new Book("The Hobbit", "J.R.R Tolkin", 958, 312, false, id);
id++;
var newBook2 = new Book("Star Wars", "J.R.R Tolkin", 958, 312, false, id);
id++;
var newBook3 = new Book("New one", "J.R.R Tolkin", 958, 312, false);

//newBook.addBooks();
newBook.addBookToLibrary();
newBook2.addBookToLibrary();

newBook2.addBooks();

btn.addEventListener("click", (event) => {
  newBook3.addBookToLibrary();
  newBook3.addBooks();
  event.preventDefault();
});

remove.forEach((remove) =>
  remove.addEventListener("click", () => {
    myLibrary.splice(remove.value, 1);
    this.addBookToLibrary();
  })
);

//myLibrary.some((check) => check.id == remove.value)
