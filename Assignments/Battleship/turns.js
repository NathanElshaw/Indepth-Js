class turns {
  constructor(player, player2) {
    this.currentPlayer = null;
    this.player1 = player || null;
    this.player2 = player2 || null;
  }

  init(player1, player2) {
    this.turnPlayer == null ? (this.player = player) : null;
  }

  initAi(aiActive) {
    aiActive == true ? (this.player2 = "ai") : null;
  }

  promptTurn(player) {
    return `Its ${player}'s turn`;
  }

  turn(placement, player1, player2) {
    player1 == "ai" ? this.aiMove() : (player1 = player1);
    if (this.fire(placement) == "hit") {
      this.promptTurn(player1);
    } else {
      this.promptTurn(player2);
    }
  }
}

module.exports = turns;
