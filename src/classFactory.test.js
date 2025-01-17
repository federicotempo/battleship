const { Ship, Gameboard, Player } = require("./classFactory");

describe("Unit tests for Ship class", () => {
  it("hit should increase the number of 'hits' in the ship", () => {
    const ship = new Ship("Carrier", 1);
    ship.hit();
    expect(ship.hitStatus).toBe(1);
  });

  it("isSunk should return true if the ship is sunk", () => {
    const ship = new Ship("Carrier", 1);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  it("isSunk should return false if the ship is not fully hit", () => {
    const ship = new Ship("Carrier", 2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });
});

describe("Unit tests for Gameboard class", () => {
  it("placeShip should place a ship on the gameboard", () => {
    const gameboard = new Gameboard();
    const ship = new Ship("Carrier", 5);
    const result = gameboard.placeShip(ship, 0, 0, "horizontal");
    expect(result).toBe(true);
    expect(gameboard.board[0][0]).toBe(ship);
  });

  it("receiveAttack should determine if the attack hit a ship", () => {
    const gameboard = new Gameboard();
    const ship = new Ship("Carrier", 5);
    gameboard.placeShip(ship, 0, 0, "horizontal");
    expect(gameboard.receiveAttack(4, 0)).toBe(true);
  });

  it("receiveAttack should determine if the attack misses a ship", () => {
    const gameboard = new Gameboard();
    const ship = new Ship("Carrier", 5);
    gameboard.placeShip(ship, 0, 0, "horizontal");
    expect(gameboard.receiveAttack(0, 1)).toBe(false);
  });

  it("receiveAttack should send the 'hit' function to the correct ship", () => {
    const gameboard = new Gameboard();
    const ship = new Ship("Carrier", 5);
    gameboard.placeShip(ship, 0, 0, "horizontal");
    gameboard.receiveAttack(4, 0);
    expect(ship.hitStatus).toBe(1);
  });

  it("receiveAttack should record the coordinates of the missed shot", () => {
    const gameboard = new Gameboard();
    const ship = new Ship("Carrier", 5);
    gameboard.placeShip(ship, 0, 0, "horizontal");
    gameboard.receiveAttack(0, 1);
    expect(gameboard.missedAttacks).toContainEqual([0, 1]);
  });

  it("allSunk should report all ships as sunk", () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship("Carrier1", 1);
    gameboard.placeShip(ship1, 0, 0, "horizontal");
    const ship2 = new Ship("Carrier2", 1);
    gameboard.placeShip(ship2, 1, 1, "horizontal");
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 1);
    expect(gameboard.allSunk()).toBe(true);
  });

  it("allSunk should return false if not all ships are sunk", () => {
    const gameboard = new Gameboard();
    const ship = new Ship("Carrier", 1);
    gameboard.placeShip(ship, 0, 0, "horizontal");
    gameboard.receiveAttack(1, 1);
    expect(gameboard.allSunk()).toBe(false);
  });
});

describe("Unit tests for Player class", () => {
  it("placeShip should return true if called from Player and the ship can be placed correctly", () => {
    const player = new Player("Federico", "real");
    const ship = new Ship("Carrier", 1);
    expect(player.placeShip(ship, 0, 0, "horizontal")).toBe(true);
  });

  it("placeShip should return false if called from Player and the ship can't be placed correctly", () => {
    const player = new Player("Federico", "real");
    const ship1 = new Ship("Carrier", 1);
    const ship2 = new Ship("Carrier", 1);
    player.placeShip(ship1, 0, 0, "horizontal");
    expect(player.placeShip(ship2, 0, 0, "horizontal")).toBe(false);
  });

  it("receiveAttack should work in the Player class if it is truly attacked", () => {
    const player = new Player("Federico", "real");
    const ship = new Ship("Carrier", 1);
    player.placeShip(ship, 0, 0, "horizontal");
    expect(player.receiveAttack(0, 0)).toBe(true);
  });

  it("receiveAttack should work in the Player class if the attack misses", () => {
    const player = new Player("Federico", "real");
    const ship = new Ship("Carrier", 1);
    player.placeShip(ship, 0, 0, "horizontal");
    expect(player.receiveAttack(0, 1)).toBe(false);
  });
});
