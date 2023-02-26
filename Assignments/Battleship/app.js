import comp from "./comp.js";
import gameBoard from "./gameBoard.js";
import ships from "./ships.js";
import turns from "./turns.js";

const ai = new comp();
const board = new gameBoard();
const ship = new ships();
const turn = new turns();

const player = document.querySelector("#player1Board");
const aiBoard = document.querySelector("#aiBoard");

board.createBoard();
board.gameBoard.forEach((tile) => {
  player.innerHTML += `<div class="tile">  </div>`;
});

board.aiGameboard.forEach((tile) => {
  aiBoard.innerHTML += `<div class="tile">  </div>`;
});
