class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hitStatus = 0;
  }

  hit() {
    this.hitStatus += 1;
  }

  isSunk() {
    return this.hitStatus >= this.length;
  }
}

module.exports = Ship;
