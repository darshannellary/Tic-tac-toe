const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const boardEl = document.getElementById("board");
const cells = [...document.querySelectorAll(".cell")];
const statusEl = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");
const resetScoreBtn = document.getElementById("resetScoreBtn");
const modeSelect = document.getElementById("modeSelect");
const scoreXEl = document.getElementById("scoreX");
const scoreOEl = document.getElementById("scoreO");
const scoreDEl = document.getElementById("scoreD");

let board = Array(9).fill(null);
let current = "X";
let gameOver = false;
let mode = "2p"; // "2p" or "cpu"
const scores = { X: 0, O: 0, D: 0 };

function checkWinner(b) {
  for (const line of WIN_LINES) {
    const [a, b1, c] = line;
    if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
      return { player: b[a], line };
    }
  }
  if (b.every((v) => v !== null)) return { player: "draw", line: null };
  return null;
}

function render() {
  cells.forEach((cell, i) => {
    cell.textContent = board[i] || "";
    cell.classList.remove("x", "o", "win");
    if (board[i] === "X") cell.classList.add("x");
    if (board[i] === "O") cell.classList.add("o");
    cell.disabled = !!board[i] || gameOver;
  });
}

function setStatus(text) {
  statusEl.textContent = text;
}

function updateScoreboard() {
  scoreXEl.textContent = scores.X;
  scoreOEl.textContent = scores.O;
  scoreDEl.textContent = scores.D;
}

function endGame(result) {
  gameOver = true;
  if (result.player === "draw") {
    scores.D++;
    setStatus("It's a draw!");
  } else {
    scores[result.player]++;
    result.line.forEach((i) => cells[i].classList.add("win"));
    const label = mode === "cpu" && result.player === "O" ? "Computer" : result.player;
    setStatus(`${label} wins!`);
  }
  updateScoreboard();
  render();
}

function play(index) {
  if (gameOver || board[index]) return;
  board[index] = current;
  const result = checkWinner(board);
  if (result) {
    endGame(result);
    return;
  }
  current = current === "X" ? "O" : "X";
  setStatus(`${current}'s turn`);
  render();

  if (mode === "cpu" && current === "O" && !gameOver) {
    setTimeout(cpuMove, 350);
  }
}

function cpuMove() {
  if (gameOver) return;
  const index = bestMove(board);
  if (index !== -1) play(index);
}

function bestMove(b) {
  let best = { score: -Infinity, index: -1 };
  for (let i = 0; i < 9; i++) {
    if (!b[i]) {
      b[i] = "O";
      const score = minimax(b, 0, false);
      b[i] = null;
      if (score > best.score) best = { score, index: i };
    }
  }
  return best.index;
}

function minimax(b, depth, isMax) {
  const result = checkWinner(b);
  if (result) {
    if (result.player === "O") return 10 - depth;
    if (result.player === "X") return depth - 10;
    return 0;
  }

  if (isMax) {
    let best = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (!b[i]) {
        b[i] = "O";
        best = Math.max(best, minimax(b, depth + 1, false));
        b[i] = null;
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < 9; i++) {
      if (!b[i]) {
        b[i] = "X";
        best = Math.min(best, minimax(b, depth + 1, true));
        b[i] = null;
      }
    }
    return best;
  }
}

function newRound() {
  board = Array(9).fill(null);
  current = "X";
  gameOver = false;
  setStatus("X's turn");
  render();
}

function resetScores() {
  scores.X = 0;
  scores.O = 0;
  scores.D = 0;
  updateScoreboard();
}

boardEl.addEventListener("click", (e) => {
  const cell = e.target.closest(".cell");
  if (!cell) return;
  if (mode === "cpu" && current === "O") return;
  play(Number(cell.dataset.index));
});

resetBtn.addEventListener("click", newRound);
resetScoreBtn.addEventListener("click", resetScores);

modeSelect.addEventListener("click", (e) => {
  const btn = e.target.closest(".mode-btn");
  if (!btn) return;
  mode = btn.dataset.mode;
  [...modeSelect.children].forEach((b) => b.classList.toggle("active", b === btn));
  newRound();
});

newRound();
updateScoreboard();
