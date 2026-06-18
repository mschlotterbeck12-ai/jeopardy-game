// ============================================================
//  Game logic — you normally don't need to edit this file.
//  Edit data.js to change rounds, categories, clues, answers.
// ============================================================

const board = document.getElementById("board");
const modal = document.getElementById("modal");
const modalCategory = document.getElementById("modal-category");
const modalValue = document.getElementById("modal-value");
const modalClue = document.getElementById("modal-clue");
const modalAnswer = document.getElementById("modal-answer");
const revealBtn = document.getElementById("reveal");
const closeBtn = document.getElementById("close");
const scoreEl = document.getElementById("score");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");
const titleEl = document.getElementById("game-title");

let score = 0;
let activeValue = 0;   // value of the clue currently open
let roundIndex = 0;    // which round we're on (0 = Jeopardy, 1 = Double Jeopardy)
let remaining = 0;     // tiles left to click in the current round

document.title = GAME_DATA.title;

function currentRound() {
  return GAME_DATA.rounds[roundIndex];
}

function buildBoard() {
  board.innerHTML = "";
  const round = currentRound();
  const categories = round.categories;
  board.style.setProperty("--cols", categories.length);

  // Title shows the game name + which round we're in
  titleEl.textContent = GAME_DATA.title + " — " + round.name;

  // Count clue tiles so we know when the round is finished
  remaining = 0;

  // Row 1: category headers
  categories.forEach((cat) => {
    const header = document.createElement("div");
    header.className = "category-header";
    header.textContent = cat.name;
    board.appendChild(header);
  });

  // Use the longest category so nothing is dropped
  const maxRows = Math.max(...categories.map((c) => c.clues.length));

  for (let row = 0; row < maxRows; row++) {
    categories.forEach((cat) => {
      const clue = cat.clues[row];
      const tile = document.createElement("button");
      tile.className = "tile";

      if (clue) {
        remaining++;
        tile.textContent = "$" + clue.value;
        tile.addEventListener("click", () => openClue(cat.name, clue, tile));
      } else {
        tile.disabled = true;
        tile.classList.add("used");
      }
      board.appendChild(tile);
    });
  }
}

function openClue(categoryName, clue, tile) {
  if (tile.classList.contains("used")) return;

  activeValue = clue.value;
  modalCategory.textContent = categoryName;
  modalValue.textContent = "$" + clue.value;
  modalClue.textContent = clue.clue;
  modalAnswer.textContent = clue.answer;
  modalAnswer.classList.add("hidden");
  revealBtn.textContent = "Reveal Answer";
  modal.classList.remove("hidden");

  // Mark the tile as used
  tile.classList.add("used");
  tile.disabled = true;
  remaining--;
}

revealBtn.addEventListener("click", () => {
  modalAnswer.classList.toggle("hidden");
  revealBtn.textContent = modalAnswer.classList.contains("hidden")
    ? "Reveal Answer"
    : "Hide Answer";
});

function closeModal() {
  modal.classList.add("hidden");
  // If that was the last tile of the round, move on
  if (remaining <= 0) maybeAdvanceRound();
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

// ---------- Round transition ----------
function maybeAdvanceRound() {
  const isLastRound = roundIndex >= GAME_DATA.rounds.length - 1;
  if (isLastRound) {
    showOverlay("That's the game!", "Final score: $" + score, "Play Again", () => {
      score = 0;
      roundIndex = 0;
      updateScore();
      buildBoard();
    });
    return;
  }

  const nextName = GAME_DATA.rounds[roundIndex + 1].name;
  showOverlay("Round Complete!", "Next up: " + nextName, "Start " + nextName, () => {
    roundIndex++;
    buildBoard();
  });
}

function showOverlay(heading, sub, buttonText, onContinue) {
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.innerHTML =
    '<div class="overlay-card">' +
    '<h2>' + heading + "</h2>" +
    '<p>' + sub + "</p>" +
    '<button class="overlay-btn">' + buttonText + "</button>" +
    "</div>";
  document.body.appendChild(overlay);
  overlay.querySelector(".overlay-btn").addEventListener("click", () => {
    overlay.remove();
    onContinue();
  });
}

// ---------- Score keeping ----------
function updateScore() {
  scoreEl.textContent = "$" + score;
}

plusBtn.addEventListener("click", () => {
  score += activeValue;
  updateScore();
});

minusBtn.addEventListener("click", () => {
  score -= activeValue;
  updateScore();
});

resetBtn.addEventListener("click", () => {
  document.querySelectorAll(".overlay").forEach((o) => o.remove());
  score = 0;
  activeValue = 0;
  roundIndex = 0;
  updateScore();
  buildBoard();
});

// ---------- Start ----------
buildBoard();
updateScore();
