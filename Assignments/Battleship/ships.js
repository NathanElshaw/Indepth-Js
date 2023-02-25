class ships {
  constructor(owner) {
    this.owner = owner;
    this.ships = [
      {
        name: "Carrier",
        size: 5,
      },
      {
        name: "Battleship",
        size: 4,
      },
      {
        name: "Crusier",
        size: 3,
      },
      {
        name: "Submarine",
        size: 3,
      },
      {
        name: "Patrol Boat",
        size: 2,
      },
    ];
  }

  placeShip(name, size, start, vertical, board) {
    // determins if the palcement is vertical or horizontal and check to see if the placement is invalid if not then places the ship
    let first = start;
    const placeVert = () => {
      if (first - 10 * size - 1 < 0) {
        return "Invalid Placement";
      } else {
        for (let i = 0; i < size; i++) {
          if (board[first - 1].placeholder == "ship") {
            return "Invalid Placement";
          } else {
            board[first - 1] = {
              placeholder: "ship",
              id: name,
            };

            first = first - 10;
          }
        }
      }
    };

    const placeHorz = () => {
      if (board[first - 1].placeholder == "ship") {
        return "Invalid Placement";
      } else {
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
