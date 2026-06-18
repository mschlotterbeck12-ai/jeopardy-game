# Jeopardy Game

**Live site:** https://mschlotterbeck12-ai.github.io/jeopardy-game/

Hosted on GitHub Pages. Every push to `main` automatically rebuilds the live site,
so the latest categories and clues show up without this computer being on.

A browser-based Jeopardy-style game: a classic board with categories and dollar
values, a Double Jeopardy round with doubled amounts, and a Final Jeopardy
question to finish.

## How to play

Open the live site (or double-click `index.html` locally). Click any dollar tile
to show its clue, then **Reveal Answer**. Used tiles dim out.

- **Round 1 — Jeopardy** ($100–$500)
- When all tiles are used → popup → **Round 2 — Double Jeopardy** ($200–$1000)
- When those are used → popup → **Final Jeopardy** (one full-screen question)

There's a simple score tracker in the header (+ / − the current clue's value,
and Reset to start over).

## How to add your own categories and questions

Edit **`data.js`** — it's the only file you need to touch. It holds both rounds
plus the Final Jeopardy question. Each clue has a `value`, a `clue` (shown on the
board), and an `answer` (revealed on click).

```js
{
  name: "World Capitals",
  clues: [
    { value: 100, clue: "Capital of France", answer: "What is Paris?" },
    // ...
  ],
}
```

After editing, commit and push and the live site updates within a minute or two:

```sh
git commit -am "update questions" && git push
```

## Files

| File | What it's for |
|------|---------------|
| `index.html` | Page structure |
| `styles.css` | Styling / theme |
| `script.js`  | Game logic (you normally don't edit this) |
| `data.js`    | **Your rounds, categories, clues, and answers** |
