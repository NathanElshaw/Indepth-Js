const gameBoard = require("./gameBoard.js");
const turns = require("./turns.js");
const ships = require("./ships.js");
const comp = require("./comp.js");

describe("#createBoard", () => {
  test("given a blank board it makes a board array with 100 spaces", () => {
    const game = new gameBoard();

    game.createBoard();
    expect(game.gameBoard.length).toBe(100);
  });
});

describe("#clearBoard", () => {
  test("sets each tile to empty to clear the board", () => {
    const game = new gameBoard();

    game.createBoard();
    game.clearBoard();
    expect(game.gameBoard[0].state).toBe("empty");
    expect(game.gameBoard[3].state).toBe("empty");
    expect(game.gameBoard[87].state).toBe("empty");
  });
});

describe("#placeShip", () => {
  test("Places a ship on the board and changes state of piece", () => {
    const game = new gameBoard();
    const ship = new ships("Player 1");
    game.createBoard();
    ship.placeShip("battleShip", 4, 11, false, game.gameBoard);
    expect(game.gameBoard[10].id).toBe("battleShip");
    expect(game.gameBoard[11].id).toBe("battleShip");
    expect(game.gameBoard[12].id).toBe("battleShip");
    expect(game.gameBoard[13].id).toBe("battleShip");
  });
});
describe("#placeShip", () => {
  test("Places a ship on the board and changes state of piece vertically", () => {
    const game = new gameBoard();
    const ship = new ships();
    game.createBoard();
    ship.placeShip("battleShip", 4, 41, true, game.gameBoard);
    expect(game.gameBoard[40].id).toBe("battleShip");
    expect(game.gameBoard[30].id).toBe("battleShip");
    expect(game.gameBoard[20].id).toBe("battleShip");
    expect(game.gameBoard[10].id).toBe("battleShip");
  });
});
describe("#placeShip", () => {
  test("Places a ship on the board and changes state of piece invalid", () => {
    const game = new gameBoard();
    const ship = new ships();
    game.createBoard();
    ship.placeShip("battleShip", 4, 10, true, game.gameBoard);
    expect(ship.placeShip("battleShip", 4, 10, true)).toBe("Invalid Placement");
  });
});
describe("#turns", () => {
  test("returns players", () => {
    const turn = new turns("New Player");

    expect(turn.player1).toBe("New Player");
  });
});

describe("#recieveAttack", () => {
  test("checks for a hit", () => {
    const game = new gameBoard();
    const ship = new ships();
    game.createBoard();
    ship.placeShip("battleShip", 4, 41, true, game.gameBoard);
    expect(game.receiveAttack(40)).toBe("hit");
    expect(game.gameBoard[40]).toMatchObject({
      state: "hit",
      id: "battleShip",
    });
  });
});
describe("#recieveAttack", () => {
  test("checks for a miss", () => {
    const game = new gameBoard();
    const ship = new ships();
    game.createBoard();
    ship.placeShip("battleShip", 4, 41, true, game.gameBoard);
    expect(game.receiveAttack(41)).toBe("miss");
  });
});
describe("#recieveAttack", () => {
  test("checks for a sink", () => {
    const game = new gameBoard();
    const ship = new ships();
    game.createBoard();
    ship.placeShip("battleShip", 4, 41, true, game.gameBoard);
    expect(game.receiveAttack(40)).toBe("hit");
    expect(game.receiveAttack(30)).toBe("hit");
    expect(game.receiveAttack(20)).toBe("hit");
    expect(game.receiveAttack(10)).toBe("sunk");
  });
});

describe("#aiGameboard", () => {
  test("Make an Ai gameboard", () => {
    const game = new gameBoard();
    game.createBoard();

    expect(game.aiGameboard.length).toBe(100);
  });
});

describe("#aiPlaceShip", () => {
  test("ai places ship down", () => {
    const board = new gameBoard();
    const aiShip = new ships("ai");
    board.createBoard();
    const ai = new comp();
    ai.placeShips(
      aiShip.ships[0].name,
      aiShip.ships[0].size,
      10,
      false,
      board.aiGameboard
    );
    expect(board.aiGameboard[9].id).toBe("Carrier");
    expect(board.aiGameboard[10].id).toBe("Carrier");
    expect(board.aiGameboard[11].id).toBe("Carrier");
    expect(board.aiGameboard[12].id).toBe("Carrier");
    expect(board.aiGameboard[13].id).toBe("Carrier");
  });
});
describe("#aiPlaceShip", () => {
  test("checks invalid", () => {
    const board = new gameBoard();
    const aiShip = new ships("ai");
    board.createBoard();
    const ai = new comp();
    ai.placeShips(
      aiShip.ships[0].name,
      aiShip.ships[0].size,
      10,
      false,
      board.aiGameboard
    );
    expect(
      ai.placeShips(
        aiShip.ships[2].name,
        aiShip.ships[2].size,
        10,
        false,
        board.aiGameboard
      )
    ).toBe("Invalid Placement");
  });
});

describe("#turn", () => {
  test("check if the ai will hit a ship", () => {
    const game = new gameBoard();
    const ship = new ships();
    const ai = new comp();
    game.createBoard();
    ship.placeShip("battleShip", 4, 41, true, game.gameBoard);

    expect(ai.attack(40, game)).toBe("hit");
  });
});

describe("#turn", () => {
  test("check if the ai will sink a ship", () => {
    const game = new gameBoard();
    const ship = new ships();
    const ai = new comp();
    game.createBoard();
    ship.placeShip("battleShip", 4, 41, true, game.gameBoard);

    expect(ai.attack(40, game)).toBe("hit");
    expect(ai.attack(30, game)).toBe("hit");
    expect(ai.attack(20, game)).toBe("hit");
    expect(ai.attack(10, game)).toBe("sunk");
  });
});

describe("#makeMove", () => {
  test("take a turn", () => {
    const game = new gameBoard();
    const ship = new ships();
    const ai = new comp();
    game.createBoard();
    ship.placeShip("battleShip", 4, 41, true, game.gameBoard);
    ship.placeShip("carrier", 4, 70, false, game.gameBoard);
    ai.attack(40, game);
    ai.attack(30, game);
    ai.attack(20, game);
    expect(ai.makeMove(game)).toBe("miss" || "hit" || "sunk");
  });
});
