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
  board.style.display = "grid";
  board.innerHTML = "";
  const round = currentRound();
  const categories = round.categories;
  board.style.setProperty("--cols", categories.length);

  titleEl.textContent = GAME_DATA.title + " — " + round.name;

  remaining = 0;

  // Row 1: category headers
  categories.forEach((cat) => {
    const header = document.createElement("div");
    header.className = "category-header";
    header.textContent = cat.name;
    board.appendChild(header);
  });

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
  if (remaining <= 0) maybeAdvanceRound();
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

// ---------- Round transitions ----------
function maybeAdvanceRound() {
  const moreRounds = roundIndex < GAME_DATA.rounds.length - 1;

  if (moreRounds) {
    const nextName = GAME_DATA.rounds[roundIndex + 1].name;
    showOverlay(
      "Ready for the next round?",
      nextName + " — all the dollar amounts are bigger!",
      "Start " + nextName,
      () => {
        roundIndex++;
        buildBoard();
      }
    );
    return;
  }

  // No more board rounds. Is there a Final Jeopardy?
  if (GAME_DATA.final) {
    showOverlay(
      "Ready for Final Jeopardy?",
      "One last question for all the marbles.",
      "Go to Final Jeopardy",
      startFinalJeopardy
    );
    return;
  }

  endGame();
}

function endGame() {
  showOverlay("That's the game!", "Final score: $" + score, "Play Again", restart);
}

// ---------- Final Jeopardy ----------
function startFinalJeopardy() {
  const f = GAME_DATA.final;
  board.style.display = "none";
  titleEl.textContent = GAME_DATA.title + " — Final Jeopardy";

  const wrap = document.createElement("div");
  wrap.className = "final-screen";
  wrap.innerHTML =
    '<p class="final-category">' + escapeHtml(f.category) + "</p>" +
    '<p class="final-clue">' + escapeHtml(f.clue) + "</p>" +
    '<p class="final-answer hidden">' + escapeHtml(f.answer) + "</p>" +
    '<div class="final-buttons">' +
    '<button class="final-reveal">Reveal Answer</button>' +
    '<button class="final-again">Play Again</button>' +
    "</div>";
  document.querySelector("main").appendChild(wrap);

  const ans = wrap.querySelector(".final-answer");
  const revBtn = wrap.querySelector(".final-reveal");
  revBtn.addEventListener("click", () => {
    ans.classList.toggle("hidden");
    revBtn.textContent = ans.classList.contains("hidden")
      ? "Reveal Answer"
      : "Hide Answer";
  });
  wrap.querySelector(".final-again").addEventListener("click", restart);
}

function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

// ---------- Overlay popup ----------
function showOverlay(heading, sub, buttonText, onContinue) {
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.innerHTML =
    '<div class="overlay-card">' +
    "<h2>" + escapeHtml(heading) + "</h2>" +
    "<p>" + escapeHtml(sub) + "</p>" +
    '<button class="overlay-btn">' + escapeHtml(buttonText) + "</button>" +
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

function restart() {
  document.querySelectorAll(".overlay").forEach((o) => o.remove());
  document.querySelectorAll(".final-screen").forEach((f) => f.remove());
  score = 0;
  activeValue = 0;
  roundIndex = 0;
  updateScore();
  buildBoard();
}

resetBtn.addEventListener("click", restart);

// ---------- Start ----------
buildBoard();
updateScore();
