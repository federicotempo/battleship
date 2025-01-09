function displayDOM() {
  const playerName = document.getElementById("player-name").value;

  if (playerName.trim() !== "") {
    document.querySelector("#initial-container").style.display = "none";

    document.querySelector("#game-container").style.display = "block";

    document.querySelector(
      "#displayer"
    ).textContent = `${playerName}, place your carrier`;

    createGrid("friendly-waters");
    createGrid("enemy-waters");
  }
}

function createGrid(gridId) {
  const gridElement = document.getElementById(gridId);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const gridCell = document.createElement("div");
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

const initializeDOM = () => {
  handleEnterButton();
  handleStartButton();
  focusName();
};

export { initializeDOM };
