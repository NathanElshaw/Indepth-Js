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
    let move = ai.makeMove(game);
    playerTile[move.place].classList.add(move.response);
  };
  let j = 0;
  game.gameBoard.forEach(() => {
    playerBoard.innerHTML += `<button class=tile id=playerTile value=${j}>${j}</button>`;
    j++;
  });
  const playerTile = document.querySelectorAll("#playerTile");

  let i = 0;
  game.aiGameboard.forEach(() => {
    aiBoard.innerHTML += `<button class=tile id=aiTile value=${i}>${i}</button>`;
    i++;
  });
  ship.placeShip("battleShip", 4, 10, false, game.aiGameboard);
  const aitile = document.querySelectorAll("#aiTile");
  aitile.forEach((tile) => {
    tile.addEventListener("click", () => {
      const attack = game.receiveAttack(tile.value, game);
      attack == "miss"
        ? miss(tile)
        : attack == "hit" || attack == "sunk"
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
