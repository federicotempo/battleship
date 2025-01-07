# Battleship Game Project 🚢

This project implements the classic Battleship game using Test-Driven Development (TDD) principles. The application is built with a focus on clean code, modular design, and functionality-driven development.

## Features

- **Ship Factory**: Creates ship objects that track their length, hits, and sunk status.
  - `hit()`: Records a hit on the ship.
  - `isSunk()`: Determines if the ship is sunk based on hits and length.
- **Gameboard Factory**: Manages the game state and interactions.
  - Place ships at specific coordinates.
  - `receiveAttack()`: Registers an attack, determines if it hit or missed, and tracks missed shots.
  - Tracks all ships and checks if all are sunk.
- **Player Factory**: Creates players (human or computer).

  - Players take turns attacking the opponent's gameboard.
  - Computer players perform random legal moves.

- **Game Module**: Handles the main game logic and DOM interactions.
  - Allows players to place ships and attack the opponent’s board.
  - Updates the UI dynamically based on the game state.
  - Ends the game when all ships of a player are sunk.

## Additional Features

- Players can place their ships manually or use randomized placement.
- The computer avoids duplicate moves during attacks.
- A clean and responsive UI to display the gameboards and interactions.

## Future Enhancements

- Drag-and-drop functionality for placing ships.
- Smarter AI for the computer player.
- Enhanced animations and sound effects.

## Tech Stack

- **JavaScript**: Core logic and functionality.
- **HTML/CSS**: User interface and styling.
- **Jest**: Unit testing for TDD.

## Live preview :