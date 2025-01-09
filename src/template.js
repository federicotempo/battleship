import { startGame } from "./logic";

function displayDOM() {
  const playerName = document.getElementById("player-name").value;

  if (playerName.trim() !== "") {
    document.querySelector("#initial-container").style.display = "none";

    document.querySelector("#game-container").style.display = "block";

    createGrid("friendly-waters");
    createGrid("enemy-waters");
  }
  startGame(playerName);
}

function createGrid(gridId) {
  const gridElement = document.getElementById(gridId);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const gridCell = document.createElement("div");
      if (gridId === "friendly-waters") {
        gridCell.classList.add("grid-pointer");
      }
      gridCell.classList.add("grid-cell");
      gridCell.dataset.x = j;
      gridCell.dataset.y = i;
      gridElement.appendChild(gridCell);
    }
  }
}

const handleStartButton = () => {
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", displayDOM);
};

const handleEnterButton = () => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      displayDOM();
    }
  });
};

const focusName = () => {
  document.getElementById("player-name").focus();
};

const initialize = () => {
  handleEnterButton();
  handleStartButton();
  focusName();
};

export { initialize };
