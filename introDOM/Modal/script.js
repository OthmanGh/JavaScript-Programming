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

// keyboard events are so called global events
// when event occurs we can have access to infos related to that event in the event handler function event object (e)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
