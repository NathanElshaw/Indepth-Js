const ships = require("./ships.js");

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
    const hit = () => {
      this.gameBoard[mark] = {
        placeholder: "hit",
        id: this.gameBoard[mark].id,
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
        return check.placeholder == "ship" ? (isSunk = false) : {};
      });
      return isSunk == true ? "sunk" : "hit";
    };
    return this.gameBoard[mark].state == "empty" ? miss() : hit();
  }
}

module.exports = gameBoard;
