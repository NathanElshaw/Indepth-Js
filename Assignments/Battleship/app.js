const comp = require("./comp.js");
const gameBoard = require("./gameBoard.js");
const ships = require("./ships.js");
const turns = require("./turns.js");

const ai = new comp();
const board = new gameBoard();
const ship = new ships();
const turn = new turns();

console.log(ai, board, ship, turn);
