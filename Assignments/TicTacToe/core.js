const gameBox = document.querySelectorAll("#gameBox");
const markX = document.querySelector("#markX");
const markO = document.querySelector("#markO");
const log = document.querySelector("#log");

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

function checkWin() {
  if (x) {
    alert("game over");
  }
}

log.addEventListener("click", () => {
  console.log(usersMarks);
  console.log(usersMarks.includes((0, 0), (1, 1), (2, 2)));
});
