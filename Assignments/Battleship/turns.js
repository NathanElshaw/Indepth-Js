class turns {
  constructor(player) {
    this.turnPlayer = player || null;
  }

  init(player) {
    this.turnPlayer == null ? (this.turnPlayer = player) : {};
  }

  turn(placement, player1, player2) {
    if (this.fire(placement) == "hit") {
      this.promptTurn(player1);
    } else {
      this.promptTurn(player2);
    }
  }

  fire(placement, player2) {
    if (gameBoard.gameBoard[placement] == "ship") {
      this.checkSink();
      return "hit";
    } else {
      return "miss";
    }
  }
}

module.exports = turns;
