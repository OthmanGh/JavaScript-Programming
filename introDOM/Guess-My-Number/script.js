'use strict';
//DOM (Document Object Model) : structured representation of html documents allows javascript to access html elements and styles to manipulate them
// DOM stored in a tree structure form each html element represented as object
// document is a speical obejct that we've access to in js & it serve as entry point into the DOM
// DOM is not a part of javascript, it is a part of WEB APIs

// * Selecting elements :
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const messageEl = document.querySelector('.message');
const highscoreEl = document.querySelector('.highscore');
const scoreEl = document.querySelector('.score');
const numberMarkEl = document.querySelector('.number');
const usesrGuessEl = document.querySelector('.guess');

// * variables :
let secretNumber = Math.floor(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

// * Event Listeners :
checkBtn.addEventListener('click', function () {
  const userGuess = Number(usesrGuessEl.value);

  if (!userGuess) {
    messageEl.textContent = '⛔ not a number! ';
    return;
  }

  if (userGuess < 0) {
    messageEl.textContent = '⛔ not a valid number ';
    return;
  }

  if (score >= 1) {
    if (secretNumber === userGuess) {
      messageEl.textContent = '🎉 Correct Number!';
      document.body.style.backgroundColor = '#60b347';
      highscore = highscore < score ? score : highscore;
      highscoreEl.textContent = highscore;
      numberMarkEl.textContent = userGuess;
      numberMarkEl.style.width = '30rem';
    } else {
      messageEl.textContent =
        secretNumber > userGuess ? '📉 Too Low!' : '📈 Too High!';
      score -= 1;
    }
    scoreEl.textContent = score;
  } else {
    messageEl.textContent = '💥 You lost the game!';
  }
});

againBtn.addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  scoreEl.textContent = score;
  numberMarkEl.textContent = '?';
  numberMarkEl.style.width = '15rem';
  messageEl.textContent = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
  usesrGuessEl.value = '';
});
