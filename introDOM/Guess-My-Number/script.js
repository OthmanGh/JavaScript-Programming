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

// * variables
const generatedRandomNumber = Math.floor(Math.random() * 20) + 1;

let highscore = 0;
let score = 20;

checkBtn.addEventListener('click', function () {
  const userGuess = Number(document.querySelector('.guess').value);

  console.log(score);

  if (score <= 0) {
    message.textContent = 'You lost the game - Try again ☹️☹️☹️';
    return;
  }

  if (userGuess <= 0) {
    alert('invalid input - please enter a number');
    return;
  }

  if (generatedRandomNumber > userGuess) {
    message.textContent = 'Too Low 📉📉';
    score -= 1;
  } else if (generatedRandomNumber < userGuess) {
    message.textContent = 'Too High 📈📈';
    score -= 1;
  } else {
    message.textContent = 'Correct Guess Congrats 🥳🥳';
    document.body.style.backgroundColor = '#60b347';
    highscore = highscore < userGuess ? userGuess : highscore;
    highscoreEl.textContent = highscore;
    numberMarkEl.textContent = userGuess;
  }

  scoreEl.textContent = score;
});

// againBtn.addEventListener('click', function () {});
