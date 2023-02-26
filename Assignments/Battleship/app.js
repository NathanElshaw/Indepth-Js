import comp from "./comp.js";
import gameBoard from "./gameBoard.js";
import ships from "./ships.js";
import turns from "./turns.js";

const ai = new comp();
const board = new gameBoard();
const ship = new ships();
const turn = new turns();

const player = document.querySelector("#player1board");

board.createBoard();
console.log(board.gameBoard.state);
board.gameBoard.forEach((tile) => {
  player.innerHTML += `<div> ${tile.state} </div>`;
});
