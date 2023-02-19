/*
Show the shortest way to get to a point with knight moves
i.e KnightMoves([0,0], [1,2]) Output:: [0,0] -> [1,2] 1 Move
Prevent from going out side the board

*/

const KnightOffset = [
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
];

class cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class KnightMoves {
  constructor(current, end) {
    this.current = current;
    this.end = end;
  }

  getQ(cord) {
    if (cord[0] > 4 && cord[1] > 4) return "Q1";
    if (cord[0] > 4 && cord[1] <= 4) return "Q2";
    if (cord[0] <= 4 && cord[1] <= 4) return "Q3";
    if (cord[0] <= 1 && cord[1] > 4) return "Q4";
  }

  getPosMoves(current, end, moves, queue) {
    let isfound = false;
    if (moves === undefined) {
      moves = 0;
    }
    queue = [];
    if (current == end) {
      return current;
    } else if (
      current[0] < 1 ||
      current[0] > 8 ||
      current[1] < 1 ||
      current[1] > 8
    ) {
      return null;
    } else {
      console.log(current);
      KnightOffset.forEach((kMove) => {
        let x = current[0] + kMove[0];
        let y = current[1] + kMove[1];
        if (x < 1 || x >= 8 || y < 1 || y >= 8) {
          return null;
        } else {
          if (x == end[0] && y == end[1]) {
            isfound = true;
          } else {
            queue.push([x, y]);
          }
        }
      });
      moves++;
      if (isfound === true) {
        return {
          last: current,
          moves: moves,
        };
      } else {
        queue.forEach((next) => {
          return this.getPosMoves(next, end, moves);
        });
      }
    }
  }
}

const chess = new KnightMoves();

console.log(chess.getPosMoves([1, 1], [3, 3]));
