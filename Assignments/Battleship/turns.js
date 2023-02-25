class turns {
  constructor(player, player2) {
    this.player1 = player || null;
    this.player2 = player2 || null
  }

  init(player) {
    this.turnPlayer == null ? (this.turnPlayer = player) : {};
  }

  initAi(){
    aiActive == true ? {
      this.player2 = "ai"
    }
  }

  turn(placement, player1, player2) {
    if (this.fire(placement) == "hit") {
      this.promptTurn(player1);
    } else {
      this.promptTurn(player2);
    }
  }

}

module.exports = turns;
