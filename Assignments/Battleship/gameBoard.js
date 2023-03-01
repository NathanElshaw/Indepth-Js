class gameBoard {
  constructor(board) {
    this.gameBoard = board || null;
    this.aiGameboard = board || null;
  }

  createBoard() {
    //Creates a game board from scratch
    const makeBoard = (str) => {
      let arr = [];
      for (let i = 0; i < 49; i++) {
        let norm = {
          state: str,
          value: i,
        };
        arr.push(norm);
      }
      return arr;
    };
    this.gameBoard === null ? (this.gameBoard = makeBoard("empty")) : {};
    this.aiGameboard === null ? (this.aiGameboard = makeBoard("empty")) : {};
  }

  clearBoard() {
    //Sets board state to "empty" or defualt
    const board = this.gameBoard;
    board.forEach((mark) => {
      mark.state = "empty";
    });
  }

  receiveAttackPlayer(mark) {
    const hit = () => {
      this.aiGameboard[mark] = {
        state: "hit",
        id: this.aiGameboard[mark].id,
        value: this.aiGameboard[mark].value,
      };
      return sunkCheck();
    };
    const miss = () => {
      this.aiGameboard[mark].state = "miss";
      return "miss";
    };

    const sunkCheck = () => {
      let check = this.aiGameboard.filter(
        (item) => item.id == this.aiGameboard[mark].id
      );
      let isSunk = true;
      check.forEach((check) => {
        return check.state == "ship" ? (isSunk = false) : {};
      });
      return isSunk == true ? "sunk" : "hit";
    };
    return this.aiGameboard[mark].state === "empty" ? miss() : hit();
  }
  receiveAttackAi(mark) {
    const hit = () => {
      this.gameBoard[mark] = {
        state: "hit",
        id: this.gameBoard[mark].id,
        value: this.gameBoard[mark].value,
      };
      return sunkCheck();
    };
    const miss = () => {
      this.gameBoard[mark].state = "miss";
      return "miss";
    };

    const sunkCheck = () => {
      let check = this.gameBoard.filter(
        (item) => item.id == this.gameBoard[mark].id
      );
      let isSunk = true;
      check.forEach((check) => {
        return check.state == "ship" ? (isSunk = false) : {};
      });
      return isSunk == true ? "sunk" : "hit";
    };
    return this.gameBoard[mark].state === "empty" ? miss() : hit();
  }
}
export default gameBoard;
