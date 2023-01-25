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

  const gameWinCheck = (mark) => {
    if (
      GameBoard.gameboard[0][0] === mark &&
      GameBoard.gameboard[0][1] === mark &&
      GameBoard.gameboard[0][2] === mark
    ) {
      console.log("win 1st row");
    } else if (
      GameBoard.gameboard[1][0] === mark &&
      GameBoard.gameboard[1][1] === mark &&
      GameBoard.gameboard[1][2] === mark
    ) {
      console.log("win 2nd row");
    } else if (
      GameBoard.gameboard[2][0] === mark &&
      GameBoard.gameboard[2][1] === mark &&
      GameBoard.gameboard[2][2] === mark
    ) {
      console.log("win 3rd Row");
    } else if (
      GameBoard.gameboard[0][0] === mark &&
      GameBoard.gameboard[1][0] === mark &&
      GameBoard.gameboard[2][0] === mark
    ) {
      console.log("1st col win");
    } else if (
      GameBoard.gameboard[0][1] === mark &&
      GameBoard.gameboard[1][1] === mark &&
      GameBoard.gameboard[2][1] === mark
    ) {
      console.log("2nd col win");
    } else if (
      GameBoard.gameboard[0][2] === mark &&
      GameBoard.gameboard[1][2] === mark &&
      GameBoard.gameboard[2][2] === mark
    ) {
      console.log("3rd col win");
    } else if (
      GameBoard.gameboard[0][0] === mark &&
      GameBoard.gameboard[1][1] === mark &&
      GameBoard.gameboard[2][2] === mark
    ) {
      console.log("horz 1 win");
    } else if (
      GameBoard.gameboard[0][2] === mark &&
      GameBoard.gameboard[1][1] === mark &&
      GameBoard.gameboard[2][0] === mark
    ) {
    } else {
      console.log("no winner");
    }
  };

  return {
    gameboard,
    clearGameboard,
    setChar,
    gameWinCheck,
  };
})();

gameBox.forEach((box) => {
  box.addEventListener("click", () => {
    let x = box.dataset.x;
    let y = box.dataset.y;

    if (box.textContent === "") {
      box.textContent = userMark;
      GameBoard.setChar(x, y, userMark);
      GameBoard.gameWinCheck(userMark);
    } else {
      console.log("Box filled");
    }
  });
});

log.addEventListener("click", () => {
  console.log(GameBoard.gameWinCheck(userMark));
});
