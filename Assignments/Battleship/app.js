import board from "./gameBoard.js";
import turns from "./turns.js";
import comp from "./comp.js";
import ships from "./ships.js";
const userName = document.getElementById("userId");
const initGame = document.querySelector("#initGame");
const check = document.querySelector("#check");
const playerBoard = document.querySelector("#player1Board");
const aiBoard = document.querySelector("#aiBoard");
const game = new board();
const players = new turns();
const ship = new ships();
const ai = new comp();

function displayBoards() {
  const miss = (ref) => {
    ref.classList.add("miss");
    console.log(ai.makeMove(game));
  };
  let j = 0;
  game.gameBoard.forEach(() => {
    playerBoard.innerHTML += `<button class=tile>${j}</button>`;
    j++;
  });
  let i = 0;
  game.aiGameboard.forEach(() => {
    aiBoard.innerHTML += `<button class=tile id=aiTile value=${i}>${i}</button>`;
    i++;
  });
  ship.placeShip("battleShip", 4, 10, false, game.aiGameboard);
  const aitile = document.querySelectorAll("#aiTile");
  aitile.forEach((tile) => {
    tile.addEventListener("click", () => {
      game.receiveAttack(tile.value) == "miss"
        ? miss(tile)
        : game.receiveAttack(tile.value) == "hit" ||
          game.receiveAttack(tile.value) == "sunk"
        ? tile.classList.add("hit")
        : null;
    });
  });
}

initGame.addEventListener("click", (event) => {
  event.preventDefault();
  players.init(userName.value, "Ai");
  game.createBoard();
  displayBoards();
});

check.addEventListener("click", () => {
  console.log(players, game);
});
