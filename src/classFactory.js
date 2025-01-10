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
          this.board[y + i][x] = ship;
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
        if (x + i >= this.size || this.board[y][x + i] !== null) return false;
      }
    } else if (direction === "vertical") {
      for (let i = 0; i < ship.length; i++) {
        if (y + i >= this.size || this.board[y + i][x] !== null) return false;
      }
    }
    return true;
  }

  receiveAttack(x, y) {
    if (this.board[y][x] !== null) {
      this.board[y][x].hit();
      return true;
    } else {
      this.missedAttacks.push([x, y]);
      return false;
    }
  }

  allSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.gameboard = new Gameboard();
    this.attacksMade = [];
    this.hitQueue = [];
  }

  receiveAttack(x, y) {
    return this.gameboard.receiveAttack(x, y);
  }

  placeShip(ship, x, y, direction) {
    if (this.gameboard.isValidPlacement(ship, x, y, direction)) {
      this.gameboard.placeShip(ship, x, y, direction);
      return true;
    }
    return false;
  }

  makeAttack(opponent) {
    let attackX, attackY;

    if (this.hitQueue.length > 0) {
      [attackX, attackY] = this.hitQueue.shift();
    } else {
      do {
        attackX = Math.floor(Math.random() * this.gameboard.size);
        attackY = Math.floor(Math.random() * this.gameboard.size);
      } while (
        this.attacksMade.some(([x, y]) => x === attackX && y === attackY)
      );
    }

    this.attacksMade.push([attackX, attackY]);

    const hit = opponent.receiveAttack(attackX, attackY);

    if (hit) {
      this.enqueueAdjacentCells(attackX, attackY, opponent.gameboard.size);
    }

    return { hit, attackX, attackY };
  }

  enqueueAdjacentCells(x, y, boardSize) {
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    directions.forEach(([dx, dy]) => {
      const newX = x + dx;
      const newY = y + dy;

      if (
        newX >= 0 &&
        newX < boardSize &&
        newY >= 0 &&
        newY < boardSize &&
        !this.attacksMade.some(([ax, ay]) => ax === newX && ay === newY) &&
        !this.hitQueue.some(([qx, qy]) => qx === newX && qy === newY)
      ) {
        this.hitQueue.push([newX, newY]);
      }
    });
  }
}

module.exports = { Ship, Gameboard, Player };
