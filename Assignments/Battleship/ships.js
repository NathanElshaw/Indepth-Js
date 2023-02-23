class ships {
  constructor(owner, ship) {
    this.owner = owner;
    this.ships = {
      carrier: {
        name: "Carrier",
        size: 5,
      },
      battleShip: {
        name: "Battleship",
        size: 4,
      },
      crusier: {
        name: "Crusier",
        size: 3,
      },
      submarine: {
        name: "Submarine",
        size: 3,
      },
      patrol: {
        name: "Patrol Boat",
        size: 2,
      },
    };
  }

  placeShip(name, size, start, vertical, board) {
    // determins if the palcement is vertical or horizontal and check to see if the placement is invalid if not then places the ship
    let first = start;
    const placeVert = () => {
      if (first - 11 * size < 0) {
        return "Invalid Placement";
      } else {
        for (let i = 0; i < size; i++) {
          board[first - 1] = {
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
          board[first - 1] = {
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

module.exports = ships;
