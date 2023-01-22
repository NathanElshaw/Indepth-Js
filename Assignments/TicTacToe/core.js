const gameBox = document.querySelectorAll("#gameBox");
const markX = document.querySelector("#markX");
const markO = document.querySelector("#markO");

let mark = "X";
let arr = [];
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
  box.addEventListener("click", () => {
    arr.push(box);
    box.textContent = mark;
    checkWin();
  });
});

function checkWin() {
  if ((arr[(0, 2)].textContent = "O")) {
    alert("game over");
  }
}
