const gameBox = document.querySelectorAll("#gameBox");
const markX = document.querySelector("#markX");
const markO = document.querySelector("#markO");
const log = document.querySelector("#log");

let mark = "X";
let oppMark = "";
let arr = [];
let usersMarks = [];

function aiMark() {
  if (mark != "O") {
    oppMark = "O";
  } else {
    oppMark = "X";
  }
  console.log(oppMark);
}

aiMark();

let winCheck = [
  {
    s1: (arr[0], arr[1], arr[2]),
  },

  "0,3,6",
  "2,5,8",
  "3,4,5",
  "6,7,8",
  "0,4,8",
  "2,4,6",
  "1,4,7",
];

markX.addEventListener("click", (event) => {
  event.preventDefault();
  markX.classList.add("assigned");
  markO.classList.remove("assigned");
  mark = "X";
  aiMark();
});
markO.addEventListener("click", (event) => {
  event.preventDefault();
  markO.classList.add("assigned");
  markX.classList.remove("assigned");
  mark = "O";
  aiMark();
});

const Player = () => {};

gameBox.forEach((box) => {
  arr.push(box);
  box.addEventListener("click", () => {
    if (box.textContent == "") {
      box.textContent = mark;
      usersMarks.push(arr.indexOf(box));
    } else {
      console.log("cannot overwrite");
    }
  });
});

function easyAi() {
  let aiPick = Math.floor(Math.random() * (8 - 0) + 0);
  console.log(arr[aiPick].textContent);
  console.log(mark);
  if (arr[aiPick].textContent === "") {
    arr[aiPick].textContent = oppMark;
  }
}

log.addEventListener("click", () => {
  checkWin;
});
