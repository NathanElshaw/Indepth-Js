const Knight = require("./knightMoves.js");

describe("#getPosMoves", () => {
  test("Given input start:[1,1] end:[1,2] returns lowest amount of moves", () => {
    const play = new Knight();

    play.getPosMoves([1, 1], [1, 2]);
    expect(play.results.moves).toBe(3);
  });
  test("Given input start:[1,1] end:[8,8] returns lowest amount of moves", () => {
    const play = new Knight();

    play.getPosMoves([1, 1], [8, 8]);
    expect(play.results.moves).toBe(6);
  });
  test("Given input start:[5,5] end:[5,6] returns lowest amount of moves", () => {
    const play = new Knight();

    play.getPosMoves([5, 5], [5, 6]);
    expect(play.results.moves).toBe(3);
  });
  test("Given input start:[8,1] end:[1,9] returns null", () => {
    const play = new Knight();

    play.getPosMoves([8, 1], [1, 9]);
    expect(play.results).toBe(null);
  });
});
