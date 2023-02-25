const gameBoard = require("./gameBoard.js");
const board = new gameBoard();

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
    player1 == "ai" ? this.aiMove() : (player1 = player1);
    board.receiveAttack(placement, player2) == "hit" ? "hit" : this.aiLogic;
  }
}

module.exports = turns;
