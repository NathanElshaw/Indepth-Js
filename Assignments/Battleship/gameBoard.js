class gameBoard {
  constructor(board) {
    this.gameBoard = board || null;
    this.aiGameboard = board || null;
  }

  createBoard() {
    //Creates a game board from scratch
    const makeBoard = () => {
      let arr = [];
      for (let i = 0; i < 100; i++) {
        let norm = {
          state: "empty",
        };
        arr.push(norm);
      }
      this.gameBoard = arr;
      this.aiGameboard = arr;
    };
    this.gameBoard === null ? makeBoard() : {};
    this.aiGameboard === null ? makeBoard() : {};
  }

  clearBoard() {
    //Sets board state to "empty" or defualt
    const board = this.gameBoard;
    board.forEach((mark) => {
      mark.state = "empty";
    });
  }

  receiveAttack(mark) {
    if (this.gameBoard[mark].state == "empty") {
      this.gameBoard[mark].state = "miss";
      return "miss";
    } else {
      this.gameBoard[mark] = {
        placeholder: "hit",
        id: this.gameBoard[mark].id,
      };
      const sunkCheck = () => {
        let check = this.gameBoard.filter(
          (item) => item.id == this.gameBoard[mark].id
        );
        let isSunk = true;
        check.forEach((check) => {
          if (check.placeholder == "ship") {
            return (isSunk = false);
          }
        });
        if (isSunk == true) {
          return "sunk";
        } else {
          return "hit";
        }
      };
      return sunkCheck();
    }
  }
}

module.exports = gameBoard;
