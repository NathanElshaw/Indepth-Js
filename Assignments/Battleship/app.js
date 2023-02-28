import board from "./gameBoard.js";
import turns from "./turns.js";
import comp from "./comp.js";
import ships from "./ships.js";

const initGame = document.querySelector("#initGame");

const game = new board();
initGame.addEventListener("click", () => {
  game.createBoard();
  console.log(game);
});
