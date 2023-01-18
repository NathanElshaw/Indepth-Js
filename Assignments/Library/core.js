let myLibrary = [];
const btn = document.querySelector("#addBook");
const title = document.querySelector("#title").value;
const author = document.querySelector("#author").value;
const pages = document.querySelector("#pages").value;

btn.addEventListener("click", (event) => {
  console.log(title, author, pages);
  if (title && author && pages !== null) {
    var newBook = new Book(title, author, pages);
    newBook.addBookToLibrary(book);
  }
  alert("error");
  event.preventDefault();
});

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  let book = title + "by: " + author + " " + pages + "pages";
}

function addBookToLibrary(book) {
  this.myLibrary = [book];
  console.log(myLibrary);
}
