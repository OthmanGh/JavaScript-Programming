'use strict';

// Selecting Elements :
const showBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

// Functions:
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Event Listeners :
showBtns.forEach(btn => {
  btn.addEventListener('click', showModal);
});

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
