import ships from "./ships.js";
const facShips = new ships("ai");

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
    return this.attack(available[mark], board);
  }

  attack(mark, board) {
    return board.receiveAttack(mark);
  }
}
export default Ai;
