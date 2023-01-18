//Obj Constructor
function book(title, author, bookLength, status) {
  this.title = title;
  this.author = author;
  this.bookLength = bookLength;
  this.status = status;

  this.info = () => {
    console.log(title, "by:", author, bookLength, "pages", status);
  };
}

const theHobbit = new book(
  "The Hobbit",
  "J.R.R Tolkien",
  "295",
  "Not read yet"
);
