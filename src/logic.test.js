const Ship = require("./logic");

describe("Unit tests for the Ship class", () => {
  it("hit should increase the number of 'hits' in the ship ", () => {
    const ship = new Ship("Carrier", 1);
    ship.hit();
    expect(ship.hitStatus).toBe(1);
  });

  it("isSunk should return true if the ship is sunk", () => {
    const ship = new Ship("Carrier", 1);
    ship.hit()
    expect(ship.isSunk()).toBe(true);
  });

  it("isSunk should return false if the ship is not fully hit", () => {
    const ship = new Ship("Carrier", 2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

});
