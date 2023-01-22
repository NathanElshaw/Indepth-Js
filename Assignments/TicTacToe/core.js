const gameBox = document.querySelectorAll("#gameBox");
const markX = document.querySelector("#markX");
const markO = document.querySelector("#markO");
const log = document.querySelector("#log");

var winCheck = [
  "0,1,2",
  "0,3,6",
  "2,5,8",
  "3,4,5",
  "6,7,8",
  "0,4,8",
  "2,4,6",
  "1,4,7",
];

let mark = "X";
let arr = [];
let usersMarks = [];
markX.addEventListener("click", (event) => {
  markX.classList.add("assigned");
  markO.classList.remove("assigned");
  mark = "X";
  event.preventDefault();
});
markO.addEventListener("click", (event) => {
  markO.classList.add("assigned");
  markX.classList.remove("assigned");
  mark = "O";
  event.preventDefault();
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
  if (arr[aiPick].textContent === "") {
    arr[aiPick].textContent = "O";
    console.log("set");
  }
}

log.addEventListener("click", () => {
  easyAi();
});
