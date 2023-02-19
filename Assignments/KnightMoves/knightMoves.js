/*
Show the shortest way to get to a point with knight moves
i.e KnightMoves([0,0], [1,2]) Output:: [0,0] -> [1,2] 1 Move
Prevent from going out side the board

*/
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
}

const chess = new KnightMoves();

console.log(chess.getQ([1, 1]));
