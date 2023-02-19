/*
Show the shortest way to get to a point with knight moves
i.e KnightMoves([0,0], [1,2]) Output:: [0,0] -> [1,2] 1 Move
Prevent from going out side the board

*/

const KnightMoves = (start, finish) => {
  const knightsOffset = [
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ];

  const Knight = new Gameboard(start);
  Knight.calc(start, finish);
  return Knight;
};

class Gameboard {
  constructor(head) {
    this.root = head;
  }

  calc(start, finish) {
    let [posX, posY] = [start[0], start[1]];
    let [endX, endY] = [finish[0], finish[1]];
  }
}

class possibleMove {
  constructor(current, opt1, opt2, opt3, opt4, opt5, opt6, opt7, opt8) {
    current: current;
    opt1: null;
    opt2: null;
    opt3: null;
    opt4: null;
    opt5: null;
    opt6: null;
    opt7: null;
    opt8: null;
  }
}

console.log(KnightMoves([1, 3], [3, 3]));
