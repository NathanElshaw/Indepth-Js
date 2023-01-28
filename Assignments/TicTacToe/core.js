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
let winner = "";

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

  //const updateAi = (x, num) => {
  //   let index = parseInt(num);
  //   console.log(typeof index);
  //   index++;
  //   console.log(index, x);
  //   let y = GameBoard.aiGameBoard[x].indexOf(index);
  //   GameBoard.aiGameBoard[x].splice(y, 1);
  //   if (GameBoard.aiGameBoard[x].length === 0) {
  //     console.log("Clear Ai row");
  //     GameBoard.aiGameBoard.splice([x], 1);
  //   }
  // };

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
      winner = mark;
    } else if (
      GameBoard.gameboard[1][0] === mark &&
      GameBoard.gameboard[1][1] === mark &&
      GameBoard.gameboard[1][2] === mark
    ) {
      winner = mark;
    } else if (
      GameBoard.gameboard[2][0] === mark &&
      GameBoard.gameboard[2][1] === mark &&
      GameBoard.gameboard[2][2] === mark
    ) {
      winner = mark;
    } else if (
      GameBoard.gameboard[0][0] === mark &&
      GameBoard.gameboard[1][0] === mark &&
      GameBoard.gameboard[2][0] === mark
    ) {
      winner = mark;
    } else if (
      GameBoard.gameboard[0][1] === mark &&
      GameBoard.gameboard[1][1] === mark &&
      GameBoard.gameboard[2][1] === mark
    ) {
      winner = mark;
    } else if (
      GameBoard.gameboard[0][2] === mark &&
      GameBoard.gameboard[1][2] === mark &&
      GameBoard.gameboard[2][2] === mark
    ) {
      winner = mark;
    } else if (
      GameBoard.gameboard[0][0] === mark &&
      GameBoard.gameboard[1][1] === mark &&
      GameBoard.gameboard[2][2] === mark
    ) {
      winner = mark;
    } else if (
      GameBoard.gameboard[0][2] === mark &&
      GameBoard.gameboard[1][1] === mark &&
      GameBoard.gameboard[2][0] === mark
    ) {
      winner = mark;
    } else {
    }
  };

  return {
    gameboard,
    aiGameBoard,
    // updateAi,
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

const ai = (() => {
  let isActive = false;

  let skill = mode.value;

  let mark = playerTwo;

  // const easyMove = () => {
  //   while (true) {
  //     if (winner !== "") {
  //       break;
  //     }
  //     let x = Math.floor(
  //       Math.random() * (GameBoard.aiGameBoard.length - 0) + 0
  //     );
  //     let min = 0;
  //     let max = GameBoard.gameboard[x].length;

  //     let y = Math.floor(Math.random() * (max - min) + min);

  //     if (
  //       gameBox.item(GameBoard.gameboard[x][y] - 1).textContent != "X" ||
  //       "O"
  //     ) {
  //       if (gameBox.item(GameBoard.gameboard[x][y] - 1).textContent === "") {
  //         gameBox.item(GameBoard.gameboard[x][y] - 1).textContent = ai.mark;
  //         GameBoard.setChar(x, y, ai.mark);
  //         console.log("set active");

  //         break;
  //       }
  //     }
  //   }
  // };

  // const hardMove = () => {
  //   while (true)
  //     if (winner != "") {
  //       break;
  //     }
  // };
  // const Turn = () => {
  //   if (ai.skill === "easy") {
  //     easyMove();
  //   } else if (ai.skill === "medium") {
  //   } else if (ai.skill === "hard") {
  //   }
  // };

  return {
    skill,
    isActive,
    mark,
    // Turn,
  };
})();

computer.addEventListener("click", (event) => {
  event.preventDefault();
  computer.classList.add("assigned");
  local.classList.remove("assigned");
  diff.classList.remove("hidden");
  mode.classList.remove("hidden");
  playerAi = ai;
  ai.isActive = true;
});

local.addEventListener("click", (event) => {
  event.preventDefault();
  local.classList.add("assigned");
  computer.classList.remove("assigned");
  diff.classList.add("hidden");
  mode.classList.add("hidden");
  ai.isActive = false;
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
        // GameBoard.updateAi(x, y);
        GameBoard.gameWinCheck(playerOne);
        if (ai.isActive === true) {
          ai.Turn();
        } else {
          currentPlayer = playerTwo;
        }
      } else if (currentPlayer === playerTwo) {
        box.textContent = playerTwo;
        GameBoard.setChar(x, y, playerTwo);
        //GameBoard.updateAi(x, y);
        GameBoard.gameWinCheck(playerTwo);
        currentPlayer = playerOne;
      }
    } else {
      console.log("Box filled");
    }
  });
});

log.addEventListener("click", () => {
  GameBoard.clearGameboard;
  gameBox.forEach((box) => {
    box.textContent = "";
  });
});
