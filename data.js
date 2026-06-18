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
          name: "da boys 🍻",
          clues: [
            { value: 100, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 200, clue: "Which guy played the saxphone growing up", answer: "Answer goes here" },
            { value: 300, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 400, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 500, clue: "Clue goes here", answer: "Answer goes here" },
          ],
        },
        {
          name: "the Ladies 💃",
          clues: [
            { value: 100, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 200, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 300, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 400, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 500, clue: "Clue goes here", answer: "Answer goes here" },
          ],
        },
        {
          name: "RPI History 🎓",
          clues: [
            { value: 100, clue: "What do the letters R-P-I stand for?", answer: "Rensselaer Polytechnic Institute" },
            { value: 200, clue: "What are RPI's two official school colors?", answer: "Cherry (red) and white" },
            { value: 300, clue: "What RPI alumnus commanded the Artemis II mission to the moon?", answer: "Reid Wiseman" },
            { value: 400, clue: "In what year was RPI founded, making it the oldest technological university in the English-speaking world?", answer: "1824" },
            { value: 500, clue: "Which patroon founded RPI in 1824 and gave the school its name?", answer: "Stephen Van Rensselaer" },
          ],
        },
        {
          name: "futty ⚽",
          clues: [
            { value: 100, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 200, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 300, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 400, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 500, clue: "Clue goes here", answer: "Answer goes here" },
          ],
        },
        {
          name: "Geography 🌍",
          clues: [
            { value: 100, clue: "What is the largest country in the world by land area?", answer: "Russia" },
            { value: 200, clue: "What is the capital of Australia?", answer: "Canberra" },
            { value: 300, clue: "What is the largest hot desert in the world?", answer: "The Sahara" },
            { value: 400, clue: "What is the smallest country in the world by area?", answer: "Vatican City" },
            { value: 500, clue: "What is the deepest oceanic trench on Earth?", answer: "The Mariana Trench" },
          ],
        },
        {
          name: "General Knowledge 🧠",
          clues: [
            { value: 100, clue: "How many continents are there on Earth?", answer: "Seven" },
            { value: 200, clue: "What is the chemical symbol for gold?", answer: "Au" },
            { value: 300, clue: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
            { value: 400, clue: "What is the largest planet in our solar system?", answer: "Jupiter" },
            { value: 500, clue: "What is the hardest known natural material on Earth?", answer: "Diamond" },
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
          name: "the host 🎤",
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
