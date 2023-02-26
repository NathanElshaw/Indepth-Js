import gameBoard from "./gameBoard.js";
import comp from "./comp.js";
const board = new gameBoard();
const ai = new comp();

class turns {
  constructor(player, player2) {
    this.currentPlayer = null;
    this.player1 = player || null;
    this.player2 = player2 || null;
  }

  init(player1, player2) {
    this.player1 == null ? (this.player1 = player1) : null;
    this.player2 == null ? (this.player2 = player2) : null;
  }

  turn(placement, player1, player2) {
    player1 == "ai" ? ai.attack : null;
    board.receiveAttack(placement, player2) == "sunk"
      ? player1.score++
      : board.receiveAttack(placement, player2) == "hit"
      ? "hit"
      : this.turn(ai.makeMove, "ai", player1);
  }

  checkWinner() {}
}
export default turns;
