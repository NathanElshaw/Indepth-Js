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

console.log(theHobbit.info());

//Prototyes
function Student() {}

Student.prototype.sayName = function () {
  console.log(this.name);
};

function EightGrader(name) {
  this.name = name;
  this.grade = 8;
}

EightGrader.prototype = Object.create(Student.prototype);

const carl = new EightGrader("carl");

carl.sayName();
carl.grade;

// Dont do Object.prototype = Object.prototype
