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
            { value: 200, clue: "Which guy played the saxphone growing up", answer: "Josh" },
            { value: 300, clue: "Which two members of the group are the only ones to have earned a yellow card AND suffered a concussion during the 2025 season?", answer: "Josh and Harry" },
            { value: 400, clue: "Which two group members had major injuries to their head when they were young?", answer: "Harry and Andy" },
            { value: 500, clue: "Clue goes here", answer: "Answer goes here" },
          ],
        },
        {
          name: "the Ladies 💃",
          clues: [
            { value: 100, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 200, clue: "Which woman loves alpacas?", answer: "Dave" },
            { value: 300, clue: "Which woman has two cats named Oscar and Felix?", answer: "Elsa" },
            { value: 400, clue: "Clue goes here", answer: "Answer goes here" },
            { value: 500, clue: "Which woman is a black belt in karate?", answer: "Clara" },
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
            { value: 100, clue: "Which country won the 2022 FIFA World Cup?", answer: "Argentina" },
            { value: 200, clue: "Which club has won the most UEFA Champions League titles?", answer: "Real Madrid" },
            { value: 300, clue: "Which two clubs share the San Siro stadium in Milan?", answer: "Inter Milan and AC Milan" },
            { value: 400, clue: "Which country has won the most FIFA World Cup titles?", answer: "Brazil (5)" },
            { value: 500, clue: "Which manager has won the most Premier League titles?", answer: "Sir Alex Ferguson (13)" },
          ],
        },
        {
          name: "Geography 🌍",
          clues: [
            { value: 100, clue: "What is the largest country in the world by land area?", answer: "Russia" },
            { value: 200, clue: "What is the capital of Australia?", answer: "Canberra" },
            { value: 300, clue: "What is the smallest country in the world by area?", answer: "Vatican City" },
            { value: 400, clue: "What is the largest island in the world?", answer: "Greenland" },
            { value: 500, clue: "What is the deepest oceanic trench on Earth?", answer: "The Mariana Trench" },
          ],
        },
        {
          name: "General Knowledge 🧠",
          clues: [
            { value: 100, clue: "What is the only metal that is liquid at room temperature?", answer: "Mercury" },
            { value: 200, clue: "How many bones are in the adult human body?", answer: "206" },
            { value: 300, clue: "What is the most abundant gas in Earth's atmosphere?", answer: "Nitrogen" },
            { value: 400, clue: "Who developed the theory of relativity?", answer: "Albert Einstein" },
            { value: 500, clue: "Which planet rotates on its side, with an axial tilt of about 98 degrees?", answer: "Uranus" },
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
            { value: 200,  clue: "What is the name of the school I attended for 15 years of my life?", answer: "" },
            { value: 400,  clue: "What is my favorite color? Hint: I wear a lot of it because, as a kid, my Mom thought it looked good on me since it matched something.", answer: "" },
            { value: 600,  clue: "What is my middle name?", answer: "" },
            { value: 800,  clue: "What is my biggest fear?", answer: "" },
            { value: 1000, clue: "Name any 3 of the 4 countries that my family lineage is from.", answer: "" },
          ],
        },
        {
          name: "Science & Nature 🔬",
          clues: [
            { value: 200,  clue: "What is the largest organ in the human body?", answer: "The skin" },
            { value: 400,  clue: "What is the hardest naturally occurring substance on Earth?", answer: "Diamond" },
            { value: 600,  clue: "How many bones does a shark have?", answer: "Zero (its skeleton is cartilage)" },
            { value: 800,  clue: "Which planet in our solar system rotates clockwise (in retrograde)?", answer: "Venus" },
            { value: 1000, clue: "What is the scientific study of birds called?", answer: "Ornithology" },
          ],
        },
        {
          name: "Food & Drink 🍔",
          clues: [
            { value: 200,  clue: "In what country did sushi originate?", answer: "Japan" },
            { value: 400,  clue: "What spice, derived from a crocus flower, is the most expensive in the world by weight?", answer: "Saffron" },
            { value: 600,  clue: "What is the main alcoholic ingredient in a mojito?", answer: "Rum" },
            { value: 800,  clue: "Miso, a staple of Japanese cooking, is a paste made from what fermented bean?", answer: "Soybeans" },
            { value: 1000, clue: "What Italian dessert's name literally translates to 'pick me up'?", answer: "Tiramisu" },
          ],
        },
        {
          name: "Pop Culture 🎬",
          clues: [
            { value: 200,  clue: "Which rapper's real name is Marshall Mathers?", answer: "Eminem" },
            { value: 400,  clue: "Which 1994 film features the line \"Life is like a box of chocolates\"?", answer: "Forrest Gump" },
            { value: 600,  clue: "What's the highest-grossing film of all time (unadjusted for inflation)?", answer: "Avatar (2009)" },
            { value: 800,  clue: "Which red-dirt/Oklahoma country artist released \"Welcome to the Plains\" and is known for songs like \"Please Don't Go\"? (Hint: you saw him live recently.)", answer: "Wyatt Flores" },
            { value: 1000, clue: "What's the longest-running scripted primetime TV series in U.S. history? (Hint: it's animated.)", answer: "The Simpsons" },
          ],
        },
        {
          name: "Sports 🏆",
          clues: [
            { value: 200,  clue: "In golf, what is the term for three strokes under par on a single hole?", answer: "An albatross (double eagle)" },
            { value: 400,  clue: "What annual multi-stage cycling race is one of the most-watched sporting events in the world every year?", answer: "The Tour de France" },
            { value: 600,  clue: "Which tennis tournament requires players to wear all-white attire?", answer: "Wimbledon" },
            { value: 800,  clue: "Which boxer was known as \"The Greatest\" and lit the Olympic torch in 1996?", answer: "Muhammad Ali" },
            { value: 1000, clue: "In soccer, which goalkeeper is the only one to win the Ballon d'Or?", answer: "Lev Yashin" },
          ],
        },
        {
          name: "Word Play 🔤",
          clues: [
            { value: 200,  clue: "Rearrange the letters of LISTEN to spell another common six-letter word.", answer: "Silent (also enlist / tinsel)" },
            { value: 400,  clue: "Rearrange the letters of RESCUE to spell a word meaning to make safe.", answer: "Secure" },
            { value: 600,  clue: "Unscramble ANLDEGN to name a country.", answer: "England" },
            { value: 800,  clue: "Rearrange the letters of DECIMAL to spell a word meaning relating to medicine.", answer: "Medical" },
            { value: 1000, clue: "\"Eleven plus two\" is a famous anagram of what other number phrase (both equal 13)?", answer: "Twelve plus one" },
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
