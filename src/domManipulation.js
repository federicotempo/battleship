const updateDisplayMessage = (message) => {
  const displayer = document.querySelector("#displayer");
  displayer.textContent = message;
};

function paintCells(x, y, length, direction) {
  const grid = document.getElementById("friendly-waters");
  for (let i = 0; i < length; i++) {
    let cell;
    if (direction === "horizontal") {
      cell = grid.querySelector(`[data-x="${x + i}"][data-y="${y}"]`);
    } else {
      cell = grid.querySelector(`[data-x="${x}"][data-y="${y + i}"]`);
    }
    if (cell) {
      cell.classList.add("painted");
    }
  }
}

function highlightCells(x, y, length, direction, action) {
  const grid = document.getElementById("friendly-waters");
  for (let i = 0; i < length; i++) {
    let cell;
    if (direction === "horizontal") {
      cell = grid.querySelector(`[data-x="${x + i}"][data-y="${y}"]`);
    } else {
      cell = grid.querySelector(`[data-x="${x}"][data-y="${y + i}"]`);
    }
    if (cell) {
      if (action === "highlight") {
        cell.classList.add("highlight");
      } else {
        cell.classList.remove("highlight");
      }
    }
  }
}

function addGridEventListeners(grid, ships, getCurrentShipIndex, getDirection) {
  grid.addEventListener("mouseover", (event) => {
    if (
      event.target.classList.contains("grid-cell") &&
      getCurrentShipIndex() < ships.length
    ) {
      const x = parseInt(event.target.dataset.x);
      const y = parseInt(event.target.dataset.y);
      highlightCells(
        x,
        y,
        ships[getCurrentShipIndex()].length,
        getDirection(),
        "highlight"
      );
    }
  });

  grid.addEventListener("mouseout", (event) => {
    if (
      event.target.classList.contains("grid-cell") &&
      getCurrentShipIndex() < ships.length
    ) {
      const x = parseInt(event.target.dataset.x);
      const y = parseInt(event.target.dataset.y);
      highlightCells(
        x,
        y,
        ships[getCurrentShipIndex()].length,
        getDirection(),
        "remove-highlight"
      );
    }
  });
}

function addDirectionButtonListeners(setDirection) {
  document.getElementById("horizontal-button").addEventListener("click", () => {
    setDirection("horizontal");
  });
  document.getElementById("vertical-button").addEventListener("click", () => {
    setDirection("vertical");
  });
}

function hideButtons() {
  const horizontalButton = document.querySelector("#horizontal-button");
  const verticalButton = document.querySelector("#vertical-button");

  horizontalButton.classList.add("hidden");
  verticalButton.classList.add("hidden");
}

function changeGridPointer(grid) {
  const cells = grid.querySelectorAll(".grid-cell");
  cells.forEach((cell) => {
    cell.classList.add("grid-pointer");
  });
}

function removeGridPointer(grid) {
  const cells = grid.querySelectorAll(".grid-cell");
  cells.forEach((cell) => {
    cell.classList.remove("grid-pointer");
  });
}

export {
  updateDisplayMessage,
  paintCells,
  highlightCells,
  addGridEventListeners,
  addDirectionButtonListeners,
  hideButtons,
  changeGridPointer,
  removeGridPointer,
};
