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
        ? available.push(tile.value)
        : null;
    });
    let mark = available[Math.floor(Math.random() * available.length)];
    console.log(available);
    return {
      response: this.attack(available[mark], board),
      place: `${mark}`,
    };
  }

  attack(mark, board) {
    return board.receiveAttackAi(mark);
  }
}
export default Ai;
