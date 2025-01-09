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

function handleHorizontalButton() {
  document.getElementById("horizontal-button").addEventListener("click", () => {
    direction = "horizontal";
  });
}

function handleVerticalButton() {
  document.getElementById("vertical-button").addEventListener("click", () => {
    direction = "vertical";
  });
}

function handleMouseOver(grid, currentShipIndex, ships, direction) {
  grid.addEventListener("mouseover", (event) => {
    if (
      event.target.classList.contains("grid-cell") &&
      currentShipIndex < ships.length
    ) {
      const x = parseInt(event.target.dataset.x);
      const y = parseInt(event.target.dataset.y);
      highlightCells(
        x,
        y,
        ships[currentShipIndex].length,
        direction,
        "highlight"
      );
    }
  });
}

function handleMouseOut(grid, currentShipIndex, ships, direction) {
  grid.addEventListener("mouseout", (event) => {
    if (
      event.target.classList.contains("grid-cell") &&
      currentShipIndex < ships.length
    ) {
      const x = parseInt(event.target.dataset.x);
      const y = parseInt(event.target.dataset.y);
      highlightCells(
        x,
        y,
        ships[currentShipIndex].length,
        direction,
        "remove-highlight"
      );
    }
  });
}

export {
  updateDisplayMessage,
  paintCells,
  highlightCells,
  handleHorizontalButton,
  handleVerticalButton,
  handleMouseOver,
  handleMouseOut,
};
