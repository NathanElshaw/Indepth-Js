//const btn = document.querySelector("#addBook");
//const title = document.querySelector("#title").value;
//const author = document.querySelector("#author").value;
//const pages = document.querySelector("#pages").value;
//const books = document.querySelector("#book");
//const p = document.createElement("p");
//let myLibrary = [];

/*
Get input from the Form
then we need to put the data from the form into a book
then add the book to the myLibrary
then show said book in the "shelf" where you can changed how many pages read and if youve finishd the book
*/

function Book(title, author, pages, pagesRead, isDone) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.pagesRead = pagesRead;
  this.isDone = isDone;

  function getHtmlMarkUp() {
    const html_template = `
    div`;
  }
}

var newBook = new Book("The Hobbit", "J.R.R Tolkin", 958, 312, false);

newBook.sayTitle();
