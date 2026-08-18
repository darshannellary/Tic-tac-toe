# 🎮 Tic Tac Toe

A modern, responsive Tic Tac Toe game built while learning **vibe coding** with **Claude Code** and **Cursor**.

The project started as a hands-on experiment in using AI-assisted development to go from an idea to a fully playable web application — including game logic, UI design, score tracking, and an AI opponent powered by the **Minimax algorithm**.

## 🚀 Live Demo

### [Play Tic Tac Toe](https://darshannellary.github.io/Tic-tac-toe/)

![Tic Tac Toe Game](assets/tic-tac-toe.png)

---

## ✨ Features

- 🎯 **2 Player Mode** — Play against another person on the same device.
- 🤖 **Vs Computer Mode** — Play against a computer opponent.
- 🧠 **Minimax AI** — The computer evaluates possible game states to determine its best move.
- 🏆 **Win Detection** — Detects horizontal, vertical, and diagonal winning combinations.
- 🤝 **Draw Detection** — Recognizes when all cells are filled without a winner.
- 📊 **Score Tracking** — Tracks wins for X, wins for O, and draws.
- ✨ **Winning Move Highlighting** — Highlights the cells forming the winning combination.
- 🔄 **New Round** — Starts a new game while preserving the current score.
- 🧹 **Reset Score** — Clears the scoreboard.
- 📱 **Responsive Design** — Works across different screen sizes.
- ⚡ **No Framework Required** — Built with vanilla HTML, CSS, and JavaScript.

---

## 🕹️ Game Modes

### 👥 2 Player

Two players can play against each other on the same device.

- X plays first.
- Players alternate turns.
- The first player to complete a line of three wins.
- A full board without a winner results in a draw.

### 🤖 Vs Computer

Play against the built-in computer opponent.

You play as **X**, while the computer plays as **O**.

The computer uses the **Minimax algorithm** to evaluate available moves and recursively explore possible outcomes before selecting its move.

---

## 🧠 The AI: Minimax

One of the main reasons I built this project was to experiment with implementing actual game-playing logic rather than simply creating a static interface.

The computer opponent uses **Minimax**, a classic algorithm for decision-making in turn-based games.

At a high level:

```text
                Computer's turn
                       │
                       ▼
              Find available moves
                       │
                       ▼
              Simulate each move
                       │
                       ▼
             Explore future states
                       │
                       ▼
               Evaluate outcomes
                       │
                       ▼
              Select best move
```

The implementation evaluates game states recursively:

- A computer win receives a positive score.
- A player win receives a negative score.
- A draw receives a neutral score.
- Search depth influences the score so that quicker wins are preferred and losses are delayed.

The game checks all eight possible winning combinations after moves are made. 
---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Game structure and interface |
| **CSS3** | Layout, styling, responsiveness, and interactions |
| **JavaScript** | Game state, game logic, scoring, and AI |
| **Claude Code** | AI-assisted development |
| **Cursor** | AI-assisted coding and development |
| **GitHub Pages** | Deployment |

The application is intentionally lightweight and does not require a frontend framework or external JavaScript library.

---

## 🎨 Design

The interface uses a dark, modern visual style with a compact game panel and responsive 3 × 3 board.

The design includes:

- Dark gradient background
- Rounded game panel
- Distinct colors for X and O
- Interactive buttons
- Hover and active states
- Highlighted winning cells
- Responsive board layout

The game board is implemented using CSS Grid, with each cell maintaining a square aspect ratio.

---

## 📊 Score Tracking

The game keeps track of:

**X Wins · Draws · O Wins**

Starting a **New Round** clears the board but keeps the scores.

**Reset Score** clears the scoreboard completely.

The score state is maintained separately from the board state, allowing multiple rounds to be played without losing the running game statistics. 
---

## 📁 Project Structure

```text
Tic-tac-toe/
│
├── index.html
├── style.css
├── script.js
├── assets/
│   └── tic-tac-toe.png
└── .gitignore
```

### `index.html`

Defines the game interface, including the mode selector, status display, 3 × 3 board, controls, and scoreboard.

### `style.css`

Controls the visual design, responsive layout, game board, buttons, player colors, and winning-state styling.

### `script.js`

Contains the core game engine, including:

- Board state
- Turn management
- Win detection
- Draw detection
- Score management
- Player interaction
- Computer moves
- Minimax algorithm
- Game reset logic

---

## 💻 Run Locally

No build tools or package installation are required.

### Clone the repository

```bash
git clone https://github.com/darshannellary/Tic-tac-toe.git
```

### Open the project

```bash
cd Tic-tac-toe
```

Then open `index.html` in your browser.

You can also run it through a local static web server if preferred.

---

## 🤖 Built While Learning Vibe Coding

This project was created as part of my journey learning **vibe coding** — using natural-language interaction with AI coding tools to explore software development, experiment with ideas, and turn them into working applications.

I used:

- **Claude Code** for AI-assisted development
- **Cursor** for AI-assisted coding and iteration

The goal wasn't simply to generate code.

It was to learn by **building, testing, breaking, fixing, and iterating** on a real application.

Tic Tac Toe was a particularly useful project because it combines a simple interface with interesting programming concepts such as:

- State management
- Event handling
- Game logic
- Recursive algorithms
- Decision-making
- UI feedback
- Responsive design

---

## 📚 What I Learned

Building this project helped me explore how AI-assisted development can accelerate the journey from an idea to a working product while still requiring understanding, testing, and iteration.

Some of the concepts explored through the project include:

- Structuring a small web application
- Managing application state in JavaScript
- Handling user interactions and events
- Implementing game rules
- Designing a responsive UI
- Implementing recursive algorithms
- Understanding the Minimax algorithm
- Using AI coding tools effectively
- Deploying a static web application with GitHub Pages

---

## 🔮 Possible Future Improvements

Some ideas for future versions:

- [ ] Easy / Medium / Hard difficulty
- [ ] Player name customization
- [ ] Persistent scores using Local Storage
- [ ] Game statistics
- [ ] Sound effects
- [ ] Improved animations
- [ ] Theme selection
- [ ] Accessibility enhancements
- [ ] Online multiplayer
- [ ] Tournament mode

---

## 🌐 Deployment

The application is deployed using **GitHub Pages**.

**Live application:**  
https://darshannellary.github.io/Tic-tac-toe/

---

## 👨‍💻 Author

**Darshan Nellary**

Built while learning **vibe coding, AI-assisted development, and modern software development workflows**.

---

## 📄 License

This project currently does not specify a license.