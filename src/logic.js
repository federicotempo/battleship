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

class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = Array(size)
      .fill(null)
      .map(() => Array(size).fill(null));
    this.missedAttacks = [];
    this.ships = [];
  }

  placeShip(ship, x, y, direction) {
    if (this.isValidPlacement(ship, x, y, direction)) {
      for (let i = 0; i < ship.length; i++) {
        if (direction === "horizontal") {
          this.board[y][x + i] = ship;
        } else if (direction === "vertical") {
          this.board[x][y + i] = ship;
        }
      }
      this.ships.push(ship);
      return true;
    }
    return false;
  }

  isValidPlacement(ship, x, y, direction) {
    if (direction === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[y][x + i] !== null) return false;
      }
    } else if (direction === "vertical") {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[x][y + i] !== null) return false;
      }
    }
    return true;
  }

  receiveAttack(x, y) {
    if (this.board[y][x] !== null) {
      this.board[y][x].hit();
      return true;
    } else {
      this.missedAttacks.push((x, y));
      return false;
    }
  }

  allSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}

module.exports = { Ship, Gameboard };
