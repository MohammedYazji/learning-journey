'use strict';
/*
console.log(document.querySelector('.message').textContent);
// set a new content to the element
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

// access value of the input and set it
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// we refactor this also because we wrote it multiple time
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

// WE DEFINED THESE VARIABLES OUT THE EVENT LISTNER FUNCTION JUST TO MAKE IT ONCE IN THE BEGINING WHEN RELOAD THE PAGE
let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;
setScore(score);
// HANDLING CLICK EVENTS
// here we decalre a function because we want to implement it just when click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // if there is no input
  if (!guess) {
    displayMessage('🚫 No Number!');

    // when player wins
  } else if (guess === secretNumber) {
    // display success message
    displayMessage('🎉 Correct Number!');
    // implement the high score functionality
    // just if the new score is greater then my highscore then change the high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // change the page color to green
    document.querySelector('body').style.backgroundColor = '#60b347';
    //show the secretNumber and make number box larger
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 To High!' : '👇 To Low!');
      score--;
      setScore(score);
    } else {
      displayMessage('🥴 You lost the game!');
      setScore(0);
    }
  }

  // we refactor all this 👍👍👇
  // // when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 To High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🥴 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // when guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '👇 To Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🥴 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
document.querySelector('.again').addEventListener('click', function () {
  // set the score again
  score = 20;
  setScore(score);
  // set the secret number
  secretNumber = generateSecretNumber();
  //set the secret number hidden ? and the origin width of the box
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  // set the message
  displayMessage('Start guessing...');
  // set the input value
  document.querySelector('.guess').value = '';
  // set the body background color
  document.querySelector('body').style.backgroundColor = '#222';
});
