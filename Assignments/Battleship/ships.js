class ships {
  constructor(owner, ship) {
    this.owner = owner;
    this.ships = {
      carrier: {
        name: "Carrier",
        size: 5,
        location: [],
      },
      battleship: {
        name: "Battleship",
        size: 4,
        location: [],
      },
      crusier: {
        name: "Crusier",
        size: 3,
        location: [],
      },
      submarine: {
        name: "Submarine",
        size: 3,
        location: [],
      },
      patrol: {
        name: "Patrol Boat",
        size: 2,
        location: [],
      },
    };
  }

  placeShip(name, size, start, vertical, board) {
    // determins if the palcement is vertical or horizontal and check to see if the placement is invalid if not then places the ship
    let first = start;
    console.log(location.name);
    const placeVert = () => {
      if (first - 10 * size - 1 < 0) {
        return "Invalid Placement";
      } else {
        for (let i = 0; i < size; i++) {
          board[first - 1] = {
            placeholder: "ship",
            id: name,
          };

          location.name[2].push(first);
          first = first - 10;
        }
      }
    };

    const placeHorz = () => {
      console.log(location);
      for (let i = 0; i < size; i++) {
        if (first - 1 < 0) {
          break;
        } else {
          board[first - 1] = {
            placeholder: "ship",
            id: name,
          };
        }
        location.location.push(first);
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
