import comp from "./comp.js";
import gameBoard from "./gameBoard.js";
import ships from "./ships.js";
import turns from "./turns.js";

const ai = new comp();
const board = new gameBoard();
const ship = new ships();
const gamePlayers = new turns("Player1", "Ai");

const player = document.querySelector("#player1Board");
const aiBoard = document.querySelector("#aiBoard");
console.log(gamePlayers.player1, gamePlayers.player2);
board.createBoard();

board.gameBoard.forEach((tile) => {
  player.innerHTML += `<button class="tile">  </button>`;
});

board.aiGameboard.forEach((tile) => {
  aiBoard.innerHTML += `<button class="tile" id="aiTile" value=${board.aiGameboard.indexOf(
    tile
  )} onClick=${gamePlayers.turn(
    board.aiGameboard.indexOf(tile),
    gamePlayers.player1,
    gamePlayers.player2
  )};>  </button>`;
});
