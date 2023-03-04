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

const playerShips = [5, 4, 3, 3, 2];
let player = "";

function displayBoards() {
  const miss = (ref) => {
    ref.classList.add("miss");
    const move = ai.makeMove(game);
    for (let i = 0; i < playerTile.length; i++) {
      playerTile[i].value == move.place
        ? playerTile[i].classList.add(move.response)
        : null;
    }
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
  const aiTile = document.querySelectorAll("#aiTile");
  aiTile.forEach((tile) => {
    tile.addEventListener("click", () => {
      console.log(tile.value);
      const attack = game.receiveAttackPlayer(tile.value);
      attack == "miss"
        ? miss(tile)
        : attack == "hit" || attack == "sunk"
        ? tile.classList.add("hit")
        : null;
    });
  });
}

function placeShips(num) {
  playerTile.forEach((tile) => {
    tile.addEventListener("mouseover", () => {
      tile.classList.add("over");
    });
  });
}

initGame.addEventListener("click", (event) => {
  event.preventDefault();
  game.createBoard();
  players.init(userName.value, "Ai");
  player = userName.value;
  displayBoards();
  placeShips(4);
  placeShips(3);
  placeShips(2);
  placeShips(1);
});

check.addEventListener("click", () => {
  console.log(players, game);
});
