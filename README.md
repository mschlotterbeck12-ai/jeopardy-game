# Jeopardy Game

A simple, browser-based Jeopardy-style game board. No build tools, no dependencies — just open `index.html`.

## How to play / run

Double-click `index.html` to open it in your browser. That's it.

## How to add your own categories and questions

Open **`data.js`** and edit it. It's the only file you need to touch.

- Add up to 6 categories (fewer is fine).
- Each category has a `name` and a list of `clues`.
- Each clue has a `value` (points), a `clue` (shown on the board), and an `answer` (revealed on click).

Example:

```js
{
  name: "World Capitals",
  clues: [
    { value: 200, clue: "This city is the capital of France", answer: "What is Paris?" },
    { value: 400, clue: "Capital of Japan", answer: "What is Tokyo?" },
    // ...
  ],
}
```

## Features

- Classic Jeopardy blue board with category headers and point tiles
- Click a tile to show the clue, then "Reveal Answer"
- Tiles dim once used
- Simple score tracker (+ / − the current clue's value, and Reset)

## Files

| File | What it's for |
|------|---------------|
| `index.html` | Page structure |
| `styles.css` | Styling / theme |
| `script.js`  | Game logic (you normally don't edit this) |
| `data.js`    | **Your categories, clues, and answers** |
