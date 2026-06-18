// ============================================================
//  Game logic — you normally don't need to edit this file.
//  Edit data.js to change categories, clues, and answers.
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

let score = 0;
let activeValue = 0; // value of the clue currently open

// Set the page title from the data file
document.getElementById("game-title").textContent = GAME_DATA.title;
document.title = GAME_DATA.title;

function buildBoard() {
  board.innerHTML = "";
  const categories = GAME_DATA.categories;
  board.style.setProperty("--cols", categories.length);

  // Row 1: category headers
  categories.forEach((cat) => {
    const header = document.createElement("div");
    header.className = "category-header";
    header.textContent = cat.name;
    board.appendChild(header);
  });

  // How many clue rows? Use the longest category so nothing is dropped.
  const maxRows = Math.max(...categories.map((c) => c.clues.length));

  for (let row = 0; row < maxRows; row++) {
    categories.forEach((cat) => {
      const clue = cat.clues[row];
      const tile = document.createElement("button");
      tile.className = "tile";

      if (clue) {
        tile.textContent = "$" + clue.value;
        tile.addEventListener("click", () => openClue(cat.name, clue, tile));
      } else {
        // Empty slot if a category has fewer clues than the others
        tile.disabled = true;
        tile.classList.add("used");
      }
      board.appendChild(tile);
    });
  }
}

function openClue(categoryName, clue, tile) {
  activeValue = clue.value;
  modalCategory.textContent = categoryName;
  modalValue.textContent = "$" + clue.value;
  modalClue.textContent = clue.clue;
  modalAnswer.textContent = clue.answer;
  modalAnswer.classList.add("hidden");
  revealBtn.textContent = "Reveal Answer";
  modal.classList.remove("hidden");

  // Mark the tile as used once opened
  tile.classList.add("used");
  tile.disabled = true;
}

revealBtn.addEventListener("click", () => {
  modalAnswer.classList.toggle("hidden");
  revealBtn.textContent = modalAnswer.classList.contains("hidden")
    ? "Reveal Answer"
    : "Hide Answer";
});

closeBtn.addEventListener("click", () => modal.classList.add("hidden"));

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.classList.add("hidden");
});

// ---------- Score keeping ----------
function updateScore() {
  scoreEl.textContent = score;
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
  score = 0;
  activeValue = 0;
  updateScore();
  buildBoard();
});

// ---------- Start ----------
buildBoard();
updateScore();
