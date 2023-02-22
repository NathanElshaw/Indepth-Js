const ships = (name, size, isHit, isSunk) => {
  this.name = name;
  this.size = size;
  this.isHit = isHit;
  this.isSunk = isSunk;

  return {
    name: this.name,
    size: this.size,
    isHit: this.isHit,
    isSunk: this.isSunk,
  };
};

console.log(ships("Battleship", 4, false, false));
