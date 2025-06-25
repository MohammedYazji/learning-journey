'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
// not calling the function so call it when click
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// because the event not in specific element but the whole document
// here will pase the presses key as an object to our function
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////// refactor it //////////////////////
//   btnsOpenModal[i].addEventListener('click', function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
////////////// refactor it ////////////////////////
// btnCloseModal.addEventListener('click', function () {
// //   refactor this two to be DRY
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

/////////////////// refactor it ////////////////////
// overlay.addEventListener('click', function () {
// //   refactor this two to be DRY
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });
