const ships = (name, size) => {
  this.name = name;
  this.size = size;
  this.isHit = 0;
  this.isSunk = false;

  function hit() {
    this.isHit++;
  }

  function isSunk(isHit) {
    isHit == this.size ? (this.isSunk = true) : false;
  }

  return { hit, isSunk };
};
ships("Battleship", 4);
console.log(ships().hit());
