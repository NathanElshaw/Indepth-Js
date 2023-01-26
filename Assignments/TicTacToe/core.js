const gameBox = document.querySelectorAll("#gameBox");
const markX = document.querySelector("#markX");
const markO = document.querySelector("#markO");
const log = document.querySelector("#log");
const local = document.querySelector("#local");
const computer = document.querySelector("#playAi");
const diff = document.querySelector("#difficultySelect");
const mode = document.querySelector("#difficultySelector");

let playerOne = "";
let playerTwo = "";
let currentPlayer = "";
mode.value = "easy";
let playerAi = "";

const GameBoard = (() => {
  let gameboard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let aiGameBoard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const updateAi = (x, num) => {
    let index = parseInt(num);
    console.log(typeof index);
    index++;
    console.log(index);
    let y = GameBoard.aiGameBoard[x].indexOf(index);
    GameBoard.aiGameBoard[x].splice(y, 1);
    if (GameBoard.aiGameBoard[x].length === 0) {
      console.log("Clear Ai row");
      GameBoard.aiGameBoard.splice([x], 1);
    }
  };

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
      console.log(`${currentPlayer} wins!`);
    } else {
      console.log("no winner");
    }
  };

  return {
    gameboard,
    aiGameBoard,
    updateAi,
    clearGameboard,
    setChar,
    gameWinCheck,
  };
})();

const ai = (() => {
  let skill = mode.value;

  let mark = playerTwo;

  const Turn = () => {
    console.log("called");
    if (ai.skill === "easy") {
      console.log("called first if");
      let x = Math.floor(
        Math.random() * (GameBoard.aiGameBoard.length - 0) + 0
      );
      let min = GameBoard.aiGameBoard[x][0];
      let max = GameBoard.aiGameBoard[x][GameBoard.aiGameBoard.length - 1];
      let y = Math.floor(Math.random() * (max - min) + min);
      GameBoard.setChar(x, y, mark);
    } else if (ai.skill === "medium") {
    } else if (ai.skill === "hard") {
    }
  };

  return {
    skill,
    mark,
    Turn,
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

computer.addEventListener("click", (event) => {
  event.preventDefault();
  computer.classList.add("assigned");
  local.classList.remove("assigned");
  diff.classList.remove("hidden");
  mode.classList.remove("hidden");
  playerAi = ai;
});

local.addEventListener("click", (event) => {
  event.preventDefault();
  local.classList.add("assigned");
  computer.classList.remove("assigned");
  diff.classList.add("hidden");
  mode.classList.add("hidden");
});

mode.addEventListener("change", () => {
  if (mode.value === "easy") {
    console.log("Easy");
  } else if (mode.value === "medium") {
    console.log("Medium");
  } else if (mode.value === "hard") {
    console.log("Hard");
  }
});

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
        GameBoard.updateAi(x, y);
        GameBoard.gameWinCheck(playerOne);
        currentPlayer = playerTwo;
      } else if (currentPlayer === playerTwo) {
        box.textContent = playerTwo;
        GameBoard.setChar(x, y, playerTwo);
        GameBoard.updateAi(x, y);
        GameBoard.gameWinCheck(playerTwo);
        currentPlayer = playerOne;
      }
    } else {
      console.log("Box filled");
    }
  });
});

log.addEventListener("click", () => {
  ai.Turn();
});
