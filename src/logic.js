import { Ship, Player } from "./classFactory";
import {
  updateDisplayMessage,
  paintCells,
  addGridEventListeners,
  addDirectionButtonListeners,
  hideButtons,
  changeGridPointer,
  removeGridPointer,
  addEnemyGridHoverEffect,
} from "./domManipulation";

function startGame(playerName) {
  const player = new Player(playerName, "real");
  const computer = new Player("Computer", "computer");

  placeComputerShips(computer);
  placeShipsOnGrid(player, () => {
    playGame(player, computer, playerName);
  });
}

function placeShipsOnGrid(player, onAllShipsPlaced) {
  const ships = [
    new Ship("Destroyer", 2),
    new Ship("Submarine", 3),
    new Ship("Battleship", 4),
    new Ship("Carrier", 5),
  ];

  let currentShipIndex = 0;
  let direction = "horizontal";

  const grid = document.getElementById("friendly-waters");

  addGridEventListeners(
    grid,
    ships,
    () => currentShipIndex,
    () => direction
  );

  addDirectionButtonListeners((newDirection) => {
    direction = newDirection;
  });

  grid.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("grid-cell") &&
      currentShipIndex < ships.length
    ) {
      const x = parseInt(event.target.dataset.x);
      const y = parseInt(event.target.dataset.y);
      const ship = ships[currentShipIndex];

      if (player.placeShip(ship, x, y, direction)) {
        paintCells(x, y, ship.length, direction);
        currentShipIndex++;
        if (currentShipIndex < ships.length) {
          updateDisplayMessage(
            `${player.name}, place your ${ships[currentShipIndex].name}`
          );
        } else {
          updateDisplayMessage("All ships placed!");
          hideButtons();
          onAllShipsPlaced();
          removeGridPointer(grid);
        }
      } else {
        updateDisplayMessage("Invalid placement, try again.");
      }
    }
  });

  updateDisplayMessage(
    `${player.name}, place your ${ships[currentShipIndex].name}`
  );
}

function placeComputerShips(computer) {
  const ships = [
    new Ship("Destroyer", 2),
    new Ship("Submarine", 3),
    new Ship("Battleship", 4),
    new Ship("Carrier", 5),
  ];

  ships.forEach((ship) => {
    let placed = false;
    while (!placed) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const direction = Math.random() > 0.5 ? "horizontal" : "vertical";
      placed = computer.placeShip(ship, x, y, direction);
    }
  });
}

function attack(opponent, x, y) {
  return opponent.receiveAttack(x, y);
}

function playGame(player, computer, playerName) {
  const grid = document.querySelector("#enemy-waters");
  changeGridPointer(grid);
  addEnemyGridHoverEffect(grid);

  updateDisplayMessage("It's your turn to attack!");

  function handleRound(event) {
    if (event.target.classList.contains("grid-cell")) {
      if (event.target.classList.contains("attacked")) {
        updateDisplayMessage(
          "You've already attacked this cell! Choose another one"
        );
        return;
      }

      const x = parseInt(event.target.dataset.x);
      const y = parseInt(event.target.dataset.y);

      const hit = attack(computer, x, y);

      event.target.classList.add("attacked");

      if (hit) {
        event.target.style.backgroundColor = "red";
      } else {
        event.target.style.backgroundColor = "white";
      }

      if (computer.gameboard.allSunk()) {
        updateDisplayMessage("You win! The game will restart in 5 seconds");
        grid.removeEventListener("click", handleRound);
        restartGame();
        return;
      }

      updateDisplayMessage("Computer's turn to attack!");

      setTimeout(() => {
        const {
          hit: computerHit,
          attackX: computerX,
          attackY: computerY,
        } = computer.makeAttack(player);

        const playerGrid = document.querySelector(
          `#friendly-waters .grid-cell[data-x="${computerX}"][data-y="${computerY}"]`
        );

        if (computerHit) {
          if (playerGrid) {
            playerGrid.style.backgroundColor = "red";
          }
        } else {
          if (playerGrid) {
            playerGrid.style.backgroundColor = "white";
          }
        }

        if (player.gameboard.allSunk()) {
          updateDisplayMessage(
            "Computer wins! The game will restart in 5 seconds"
          );
          grid.removeEventListener("click", handleRound);
          restartGame();
          return;
        }

        updateDisplayMessage("It's your turn to attack!");
      }, 1000);
    }
  }

  grid.addEventListener("click", handleRound);
}

function restartGame() {
  setTimeout(() => {
    location.reload();
  }, 5000);
}

export { startGame };
