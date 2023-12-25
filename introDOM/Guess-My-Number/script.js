'use strict';

// console.log(message.textContent);

// * DOM (Document Object Model) : structured representation of html documents allows javascript to access html elements and styles to manipulate them
// ? DOM stored in a tree structure form each html element represented as object
// * document is a speical obejct that we've access to in js & it serve as entry point into the DOM
// * DOM is not a part of javascript, it is a part of WEB APIs

/*
Basic DOM manipulation : 
console.dir(document);
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 23;
document.querySelector('.message').textContent = 'Correct answer!!';

document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);
*/

// * Selecting elements :
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const message = document.querySelector('.message');
const highscoreEl = document.querySelector('.highscore');
const scoreEl = document.querySelector('.score');
const numberMarkEl = document.querySelector('.number');
const usesrGuessEl = document.querySelector('.guess');

// * variables
let secretNumber = Math.floor(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

checkBtn.addEventListener('click', function () {
  const userGuess = Number(usesrGuessEl.value);

  if (!userGuess) {
    message.textContent = '⛔ not a number! ';
  } else if (userGuess < 0) {
    message.textContent = '⛔ not a valid number ';
  } else if (score >= 1) {
    if (secretNumber > userGuess) {
      message.textContent = '📉 Too Low!';
      score -= 1;
    } else if (secretNumber < userGuess) {
      message.textContent = '📈Too High!';
      score -= 1;
    } else {
      message.textContent = '🎉 Correct Number!';
      document.body.style.backgroundColor = '#60b347';
      highscore = highscore < score ? score : highscore;
      highscoreEl.textContent = highscore;
      numberMarkEl.textContent = userGuess;
      numberMarkEl.style.width = '30rem';
    }
    scoreEl.textContent = score;
  } else {
    message.textContent = '💥 You lost the game!';
  }
});

againBtn.addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  scoreEl.textContent = score;
  numberMarkEl.textContent = '?';
  numberMarkEl.style.width = '15rem';
  message.textContent = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
  usesrGuessEl.value = '';
});
