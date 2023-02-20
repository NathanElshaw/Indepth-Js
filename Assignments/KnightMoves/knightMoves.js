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
class Cell {
  constructor(path, moves) {
    this.path = path;
    this.moves = moves;
  }
}

class KnightMoves {
  constructor() {
    this.results = null;
  }

  getPosMoves(current, end, moves, path) {
    let cell = this.results;
    if (cell === null) {
      cell = new Cell([], 10);
    }
    let isfound = false;
    path = path === undefined ? [current] : path.concat([current]);
    let queue = [];
    moves = moves === undefined ? 0 : moves;
    if (moves < 7) {
      KnightOffset.forEach((kMoves) => {
        let x = current[0] + kMoves[0];
        let y = current[1] + kMoves[1];
        if (x > 8 || x < 1 || y > 8 || y < 1) {
        } else {
          queue.push([x, y]);
        }
      });
      moves++;
      for (let i = 0; i < queue.length; i++) {
        let qR = queue[i];
        qR[0] === end[0] && qR[1] === end[1]
          ? (isfound = true)
          : (isfound = false);
      }
      if (isfound === true) {
        path = path.concat([end]);
        let result = {
          path: path,
          moves: moves,
        };
        console.log(result);
        if (cell.moves > result.moves) {
          this.results = new Cell(result.path, result.moves);
        }
      } else if (isfound === false) {
        queue.forEach((q) => {
          return this.getPosMoves(q, end, moves, path);
        });
      }
    }
  }
}

const chess = new KnightMoves();

console.log(chess.getPosMoves([1, 1], [6, 6]));
console.log(chess.results);
