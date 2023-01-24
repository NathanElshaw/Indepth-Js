const gameBox = document.querySelectorAll("#gameBox");
const markX = document.querySelector("#markX");
const markO = document.querySelector("#markO");
const log = document.querySelector("#log");

let userMark = "";

function initMark() {
  if (markX.className === "assigned") {
    userMark = "X";
  } else if (markO.className === "assigned") {
    userMark = "O";
  }
}

initMark();

markO.addEventListener("click", (event) => {
  event.preventDefault();
  markO.classList.add("assigned");
  markX.classList.remove("assigned");
  initMark();
});
markX.addEventListener("click", (event) => {
  event.preventDefault();
  markX.classList.add("assigned");
  markO.classList.remove("assigned");
  initMark();
});

const GameBoard = (() => {
  let gameboard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const clearGameboard = () => {
    GameBoard.gameboard = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
  };

  const setChar = (x, y, val) => {
    GameBoard.gameboard[x][y] = val;
  };

  return {
    gameboard,
    clearGameboard,
    setChar,
  };
})();

gameBox.forEach((box) => {
  box.addEventListener("click", () => {
    let x = box.dataset.x;
    let y = box.dataset.y;

    if (box.textContent === "") {
      box.textContent = userMark;
      GameBoard.setChar(x, y, userMark);
    } else {
      console.log("Box filled");
    }
  });
});

log.addEventListener("click", () => {
  GameBoard.clearGameboard();
  gameBox.forEach((box) => {
    box.textContent = "";
  });
});
