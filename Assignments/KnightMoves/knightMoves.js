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

class KnightMoves {
  getPosMoves(current, end, moves, path, isfound) {
    if (isfound === undefined) isfound = false;
    let queue = [];
    path = [];
    if (moves === undefined) moves = 0;
    if (moves < 7) {
      KnightOffset.forEach((kMoves) => {
        let x = current[0] + kMoves[0];
        let y = current[1] + kMoves[1];
        if (
          x > 8 ||
          x < 1 ||
          y > 8 ||
          y < 1 ||
          x > end[0] + 2 ||
          x < end[0] - 2 ||
          y > end[1] + 2 ||
          y < end[1] - 2
        ) {
          return null;
        } else {
          path.push(`[${current}]`);
          queue.push([x, y]);
        }
      });
      moves++;
      for (let i = 0; i < queue.length; i++) {
        let qR = queue[i];
        if (qR[0] === end[0] && qR[1] === end[1]) {
          isfound = true;
        }
      }
      if (isfound === true) {
        let result = {
          path: path,
          moves: moves,
        };
        console.log(result);
        return result;
      } else if (isfound === false) {
        queue.forEach((q) => {
          return this.getPosMoves(q, end, moves, path, isfound);
        });
      }
    }
  }
}

const chess = new KnightMoves();

console.log(chess.getPosMoves([1, 1], [3, 3]));
