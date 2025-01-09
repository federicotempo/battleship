import { Ship, Player } from "./classFactory";
import {
  updateDisplayMessage,
  paintCells,
  addGridEventListeners,
  addDirectionButtonListeners,
} from "./domManipulation";

function startGame(playerName) {
  const player = new Player(playerName, "real");
  placeShipsOnGrid(player);
}

function placeShipsOnGrid(player) {
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
        }
      } else {
        updateDisplayMessage("Invalid placement, try again.");
      }
    }
  });

  addDirectionButtonListeners((newDirection) => {
    direction = newDirection;
  });

  updateDisplayMessage(
    `${player.name}, place your ${ships[currentShipIndex].name}`
  );
}

// ships.forEach((ship) => {
//   let placed = false;
//   while (!placed) {
//     const x =
//       player.type === "real"
//         ? parseInt(prompt(`Enter x for ${ship.name}: `))
//         : Math.floor(Math.random() * 10);
//     const y =
//       player.type === "real"
//         ? parseInt(prompt(`Enter y for ${ship.name}: `))
//         : Math.floor(Math.random() * 10);
//     const direction =
//       player.type === "real"
//         ? prompt("Enter direction (horizontal/vertical): ")
//         : Math.random() > 0.5
//         ? "horizontal"
//         : "vertical";
//     placed = player.placeShip(ship, x, y, direction);
//     if (!placed && player.type === "real") {
//       console.log("Invalid placement, try again.");
//     }
//   }
//   if (player.type === "real") console.log(`${ship.name} placed!`);
// });

// function attack(opponenet, x, y) {
//   const hit = opponenet.receiveAttack(x, y);
//   return hit ? "It's a hit!" : "Miss!";
// }

// let gameOver = false;

// while (!gameOver) {
//   console.log("Your turn!");
//   const x = parseInt(prompt("Enter x coordinate: "));
//   const y = parseInt(prompt("Enter y coordinate: "));
//   console.log(attack(computer, x, y));

//   if (computer.gameboard.allSunk()) {
//     console.log("You won!");
//     gameOver = true;
//     break;
//   }

//   console.log("Computer's turn!");
//   const computerX = Math.floor(Math.random() * 10);
//   const computerY = Math.floor(Math.random() * 10);
//   console.log(`Computer attacks (${computerX}, ${computerY})`);
//   console.log(attack(player, computerX, computerY));

//   if (player.gameboard.allSunk()) {
//     console.log("Computer won!");
//     gameOver = true;
//     break;
//   }
// }

export { startGame };
