import ships from "./ships.js";
import game from "./gameBoard.js";
const facShips = new ships("ai");
const games = new game();

class Ai {
  constructor() {
    this.ai = true;
  }

  placeShips(id, size, mark, vert, board) {
    return facShips.placeShip(id, size, mark, vert, board);
  }

  makeMove(board) {
    let available = [];
    board.gameBoard.forEach((tile) => {
      tile.state === `ship` || tile.state === `empty`
        ? available.push(board.gameBoard.indexOf(tile))
        : null;
    });
    let mark = Math.floor(Math.random() * available.length);
    return {
      response: this.attack(available[mark], board),
      place: mark,
    };
  }

  attack(mark) {
    return games.receiveAttackAi(mark);
  }
}
export default Ai;
