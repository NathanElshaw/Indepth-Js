const gameBox = document.querySelectorAll("#gameBox");
const markX = document.querySelector("#markX");
const markO = document.querySelector("#markO");
const log = document.querySelector("#log");

let playerOne = "";
let playerTwo = "";
let currentPlayer = "";

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
      console.log("horz 2 win");
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

function initMark() {
  if (markX.className === "assigned") {
    playerOne = "X";
    playerTwo = "O";
    currentPlayer = playerOne;
    GameBoard.clearGameboard();
  } else if (markO.className === "assigned") {
    playerOne = "O";
    playerTwo = "X";
    currentPlayer = playerTwo;
    GameBoard.clearGameboard();
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

gameBox.forEach((box) => {
  box.addEventListener("click", () => {
    let x = box.dataset.x;
    let y = box.dataset.y;

    if (box.textContent === "") {
      if (currentPlayer === playerOne) {
        box.textContent = playerOne;
        GameBoard.setChar(x, y, playerOne);
        GameBoard.gameWinCheck(playerOne);
        currentPlayer = playerTwo;
      } else if (currentPlayer === playerTwo) {
        box.textContent = playerTwo;
        GameBoard.setChar(x, y, playerTwo);
        GameBoard.gameWinCheck(playerTwo);
        currentPlayer = playerOne;
      }
    } else {
      console.log("Box filled");
    }
  });
});

log.addEventListener("click", () => {
  console.log(GameBoard.gameWinCheck(playerOne));
});
