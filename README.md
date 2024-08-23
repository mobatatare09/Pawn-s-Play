# Pawn's Play

Welcome to Pawn's Play, a simple player-vs-player chess game. This project is designed to provide a straightforward, enjoyable chess experience for two players on the same device.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [User Stories](#user-stories)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Pawn's Play is a minimalist chess game that allows two players to enjoy a classic game of chess on a single device. The game is built with simplicity in mind, focusing on core chess mechanics and an intuitive user interface.

## Features

- **Drag-and-Drop Movement**: Players can drag pieces to different squares on the board. Valid moves are highlighted, and only legal moves are allowed.
- **Turn-Based Play**: The game alternates between white and black turns, ensuring that players can only move their pieces during their turn.
- **Move Validation**: The game checks whether moves are legal based on the type of piece and the current board state.
- **Check Detection**: The game identifies when a king is in check and prevents illegal moves that would leave the king in check.
- **Checkmate Detection**: The game detects checkmate situations, ending the game when a checkmate occurs.

## File Structure

- **index.html**: Contains the HTML structure for the chessboard and pieces.
- **style.css**: Contains the CSS styles for the board, squares, and pieces.
- **script.js**: Contains the JavaScript logic for the game, including piece movement, board state management, and check/checkmate detection.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.) that supports HTML5 and JavaScript.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pawns-play.git
