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

  placeShip(name, size, start, vertical, player, game) {
    // determins if the palcement is vertical or horizontal and check to see if the placement is invalid if not then places the ship
    let ref = null;
    player !== "ai" ? (ref = game.gameBoard) : (ref = game.aiGameboard);
    console.log(ref);
    let first = start;
    const invalid = () => {
      return "Invalid Placement";
    };
    const insert = (num) => {
      ref[first - 1] = {
        state: "ship",
        id: name,
        value: ref[first - 1].value,
      };
      first = first - num;
    };
    const placeVert = () => {
      for (let i = 0; i < size; i++) {
        insert(10);
      }
    };

    const placeHorz = () => {
      for (let i = 0; i < size; i++) {
        if (first - 1 < 0) {
          break;
        } else {
          insert(-1);
        }
      }
    };
    return vertical !== true
      ? ref[first - 1].state == "ship"
        ? invalid()
        : placeHorz()
      : first - 10 * size - 1 < 0
      ? invalid()
      : ref[first - 1].state == "ship"
      ? invalid
      : placeVert();
  }
}
export default ships;
