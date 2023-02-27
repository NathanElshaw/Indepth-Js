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
  player.innerHTML += `<button class="tile">  </button>`;
});

board.aiGameboard.forEach((tile) => {
  aiBoard.innerHTML += `<button class="tile" id="aiTile" value=${board.aiGameboard.indexOf(
    tile
  )}>  </button>`;
});

const aiTiles = document.querySelectorAll("#aiTile");

aiTiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    console.log(attackAi());
  });
});

function attackAi(num) {
  turn.turn(num, "Player 1", "Ai");
}
