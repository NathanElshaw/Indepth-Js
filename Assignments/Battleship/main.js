class gameBoard {
  constructor(board) {
    this.gameBoard = board || null;
  }

  createBoard() {
    //Creates a game board from scratch
    const board = this.gameBoard;
    const makeBoard = () => {
      const norm = { state: "empty" };
      let arr = [];
      for (let i = 0; i < 100; i++) {
        arr.push(norm);
      }
      this.gameBoard = arr;
    };
    board === null ? makeBoard() : {};
  }

  clearBoard() {
    const board = this.gameBoard;
    board.forEach((mark) => {
      mark.state = "empty";
    });
  }
}

module.exports = gameBoard;
