const gameBoard = require("./gameBoard.js");
const comp = require("./comp.js");
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
    player1 == "ai" ? this.aiMove() : (player1 = player1);
    board.receiveAttack(placement, player2) == "hit" ? "hit" : ai.attack;
  }
}

module.exports = turns;
