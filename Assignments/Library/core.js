const btn = document.querySelector("#addBook");
const inputTitle = document.querySelector("#title");
const author = document.querySelector("#author");
const pagesRead = document.querySelector("#pagesRead");
const pages = document.querySelector("#pages");
const hasRead = document.querySelector("#is-read");
const books = document.querySelector("#book");
const ifError = document.querySelector("#ifError");

var objId = 0;
let myLibrary = [];

let cardRemove = "";
let remove = "";
let updateCheck = "";
/*
Get input from the Form
then we need to put the data from the form into a book
then add the book to the myLibrary
then show said book in the "shelf" where you can changed how many pages read and if youve finishd the book
*/

var book = "book";

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
    objId = myLibrary.length * 1;
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
    <button id="remove" value="${myLibrary.indexOf(book)}">Remove</button>
    <div>
    <input type="checkbox" name="updateCheck" id="updateCheck" value="${myLibrary.indexOf(
      book
    )}" />
    </div>
  </div>       
</div>`;
      cardRemove = document.querySelector("#remove");
      remove = document.querySelectorAll("#remove");
      updateCheck = document.querySelectorAll("#updateCheck");
      remove.forEach((remove) => {
        remove.addEventListener("click", () => {
          console.log(remove.value);
          myLibrary.splice(remove.value, 1);
        });
      });
      updateCheck.forEach((update) => {
        update.addEventListener("change", () => {
          if (book.hasRead == true) {
            update.checked = true;
          } else {
            update.checked = false;
          }
        });
      });
    });
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

var global = new Book();
//newBook.addBooks();

btn.addEventListener("click", (event) => {
  this[book + objId] = new Book(
    inputTitle.value,
    author.value,
    pagesRead.value,
    pages.value,
    hasRead.checked,
    objId
  );
  this[book + objId].addBookToLibrary();
  this[book + objId].addBooks();
  event.preventDefault();
});
