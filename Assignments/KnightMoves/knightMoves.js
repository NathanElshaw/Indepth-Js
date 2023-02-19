/*
Show the shortest way to get to a point with knight moves
i.e KnightMoves([0,0], [1,2]) Output:: [0,0] -> [1,2] 1 Move
Prevent from going out side the board

*/

const KnightMoves = (start, finish) => {
  let [posX, posY] = [start[0], start[1]];
  let [endX, endY] = [finish[0], finish[1]];

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
};

KnightMoves([1, 3]);
