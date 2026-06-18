// ============================================================
//  EDIT YOUR GAME HERE
// ============================================================
//
//  There are THREE rounds:
//    - Round 1 "Jeopardy"        -> values 100, 200, 300, 400, 500
//    - Round 2 "Double Jeopardy" -> values 200, 400, 600, 800, 1000
//    - Final Jeopardy            -> one single question (bottom of file)
//
//  When every tile in a round is used, a popup asks if you're
//  ready for the next round, then loads it.
//
//  - Each round can have up to 6 categories.
//  - Each clue has a value, a "clue" (shown on the board) and an
//    "answer" (revealed when you click).
//
//  Just replace the placeholder text below with your own.
// ============================================================

const GAME_DATA = {
  title: "JEOPARDY!",
  rounds: [
    // ---------------------------------------------------------
    //  ROUND 1 — JEOPARDY  ($100 - $500)
    // ---------------------------------------------------------
    {
      name: "Jeopardy",
      categories: [
        {
          name: "for da boys 🍻",
          clues: [
            { value: 100, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 200, clue: "Which guy played the saxphone growing up", answer: "Answer goes here" },
            { value: 300, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 400, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 500, clue: "Clue goes here", answer: "Answer goes here" },
          ],
        },
        {
          name: "Category 2",
          clues: [
            { value: 100, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 200, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 300, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 400, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 500, clue: "Clue goes here", answer: "Answer goes here" },
          ],
        },
        {
          name: "Category 3",
          clues: [
            { value: 100, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 200, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 300, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 400, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 500, clue: "Clue goes here", answer: "Answer goes here" },
          ],
        },
        {
          name: "Category 4",
          clues: [
            { value: 100, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 200, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 300, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 400, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 500, clue: "Clue goes here", answer: "Answer goes here" },
          ],
        },
        {
          name: "Category 5",
          clues: [
            { value: 100, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 200, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 300, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 400, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 500, clue: "Clue goes here", answer: "Answer goes here" },
          ],
        },
        {
          name: "Category 6",
          clues: [
            { value: 100, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 200, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 300, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 400, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 500, clue: "Clue goes here", answer: "Answer goes here" },
          ],
        },
      ],
    },

    // ---------------------------------------------------------
    //  ROUND 2 — DOUBLE JEOPARDY  ($200 - $1000)
    // ---------------------------------------------------------
    {
      name: "Double Jeopardy",
      categories: [
        {
          name: "Category 1",
          clues: [
            { value: 200,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 400,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 600,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 800,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 1000, clue: "Clue goes here", answer: "Answer goes here" },
          ],
        },
        {
          name: "Category 2",
          clues: [
            { value: 200,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 400,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 600,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 800,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 1000, clue: "Clue goes here", answer: "Answer goes here" },
          ],
        },
        {
          name: "Category 3",
          clues: [
            { value: 200,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 400,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 600,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 800,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 1000, clue: "Clue goes here", answer: "Answer goes here" },
          ],
        },
        {
          name: "Category 4",
          clues: [
            { value: 200,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 400,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 600,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 800,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 1000, clue: "Clue goes here", answer: "Answer goes here" },
          ],
        },
        {
          name: "Category 5",
          clues: [
            { value: 200,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 400,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 600,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 800,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 1000, clue: "Clue goes here", answer: "Answer goes here" },
          ],
        },
        {
          name: "Category 6",
          clues: [
            { value: 200,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 400,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 600,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 800,  clue: "Clue goes here", answer: "Answer goes here" },
            { value: 1000, clue: "Clue goes here", answer: "Answer goes here" },
          ],
        },
      ],
    },
  ],

  // ---------------------------------------------------------
  //  FINAL JEOPARDY — one single question, full screen
  // ---------------------------------------------------------
  final: {
    category: "Final Category",
    clue: "Final Jeopardy clue goes here",
    answer: "Final Jeopardy answer goes here",
  },
};
