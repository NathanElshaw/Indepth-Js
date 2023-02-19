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

class KnightMoves {
  getPosMoves(current, end, moves) {
    let isFound = false;
    let queue = [];
    if (moves === undefined) moves = [];
    if (moves > 7) {
      KnightOffset.forEach((kMoves) => {
        let x = current[0] + kMoves[0];
        let y = current[1] + kMoves[1];
        if (x > 8 || x < 1 || y > 8 || y < 1) {
          return null;
        } else {
          queue.push([x, y]);
        }
      });
      moves++;
      for (let i = 0; i < queue.length; i++) {
        let qR = queue[i];
        if (qR[0] === end[0] && qR[1] === end[1]) {
          isFound = true;
        }
      }
      if (isFound === true) {
        return {
          current: `[${current}] -> [${end}]`,
          moves: moves,
        };
      } else if (isFound === false) {
        console.log(queue);
        queue.forEach((q) => {
          return this.getPosMoves(q, end, moves);
        });
      } else {
        return;
      }
    }
    return queue;
  }
}

const chess = new KnightMoves();

console.log(chess.getPosMoves([1, 1], [3, 3]));
