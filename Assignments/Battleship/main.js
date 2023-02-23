class gameBoard {
  constructor(board) {
    this.gameBoard = board || null;
  }

  createBoard() {
    //Creates a game board from scratch
    const board = this.gameBoard;
    const makeBoard = () => {
      let arr = [];
      for (let i = 0; i < 100; i++) {
        let norm = {
          state: "empty",
        };
        arr.push(norm);
      }
      this.gameBoard = arr;
    };
    board === null ? makeBoard() : {};
  }

  clearBoard() {
    //Sets board state to "empty" or defualt
    const board = this.gameBoard;
    board.forEach((mark) => {
      mark.state = "empty";
    });
  }

  placeShip(name, size, start, vertical) {
    // determins if the palcement is vertical or horizontal and check to see if the placement is invalid if not then places the ship
    let first = start;
    const placeVert = () => {
      if (
        first - 11 < 0 ||
        first - 21 < 0 ||
        first - 31 < 0 ||
        first - 41 < 0
      ) {
        return "Invalid Placement";
      } else {
        for (let i = 0; i < size; i++) {
          this.gameBoard[first - 1] = {
            placeholder: "ship",
            id: name,
          };
          first = first - 10;
        }
      }
    };

    const placeHorz = () => {
      for (let i = 0; i < size; i++) {
        if (first - 1 < 0) {
          break;
        } else {
          this.gameBoard[first - 1] = {
            placeholder: "ship",
            id: name,
          };
        }
        first = first + 1;
      }
    };
    if (vertical !== true) {
      return placeHorz();
    } else {
      return placeVert();
    }
  }
}

module.exports = gameBoard;
