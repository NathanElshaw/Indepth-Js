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
      <p id="has-read">Has Read : ${book.hasRead}</p >
    </div>
    <button id="remove" value="${myLibrary.indexOf(book)}">Remove</button>
    <div id="updateCheck>
    <label for="updateCheck">Has Read: </label>
    <input type="checkbox" name="updateCheck" id="updateCheck" value="${myLibrary.indexOf(
      book
    )}" />
    </div>
  </div>       
</div>`;
      const isRead = document.querySelectorAll("#has-read");
      const remove = document.querySelectorAll("#remove");
      const updateCheck = document.querySelectorAll("#updateCheck");

      remove.forEach((remove) => {
        remove.addEventListener("click", () => {
          myLibrary.splice(remove.value, 1);
          refresh();
        });
      });
      updateCheck.forEach((update) => {
        if (myLibrary[update.value].hasRead === true) {
          update.checked = true;
        } else {
          update.checked = false;
        }

        update.addEventListener("change", () => {
          if (update.checked == true) {
            myLibrary[update.value].hasRead = true;
          } else if (update.checked == false) {
            myLibrary[update.value].hasRead = false;
          }
          isRead.forEach((read) => {
            read.textContent = `Has Read : ${myLibrary[update.value].hasRead}`;
          });
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
function refresh() {
  global.addBooks();
}

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
