'use strict';

let totalCorrect = 0;

/**
 * Our Number Guessing Game
 */
let correctNumber = 39;
let numberOfGuesses = 4;
let userGuess = '';
let userIsCorrect = false;

// set up a loop, to see if they have guesses left?
// if user has anwser over 4 times, or they have guessed correctly end the game
for (let i = 0; i < numberOfGuesses; i++) {
  // get the users response
  // if you do have guesses left, ask the question again.
  userGuess = prompt('Guess a Number between 0 and 100');

  if (isNaN(userGuess)) {
    alert('Please use an integer');
    continue;
  }

  if (userGuess == correctNumber) {
    userIsCorrect = true;
    alert('thats right!!');
    totalCorrect++;
    break;
  } else if (userGuess > correctNumber) {
    alert('Youre too high');
  } else if (userGuess < correctNumber) {
    alert('Youre too low');
  } else {
    alert('Something went wrong');
  }
}

if (!userIsCorrect) {
  alert('You ran out of guesses');
} else {
  alert('Great Job');
}

/**
 * Our multiple choice question
 */

let numberOfGuesses2 = 6;
let correct = false;

// check whether the user guess is correct
let statesIveLivedIn = ['Georgia', 'Washington', 'Florida', 'Utah', 'Texas', 'Virginia', 'Colorado', 'Wisconsin'];

// we need another loop like up above
while(numberOfGuesses2 > 0 && correct == false) {
  
  // asking the question
  let userGuess2 = prompt('Can you guess which states Ive lived in?');

  // loop through all states, and check if it is among state lived in.
  for (let i = 0; i < statesIveLivedIn.length; i++) {
    if (userGuess2.toLowerCase() == statesIveLivedIn[i].toLowerCase()) {
      // we know we have a correct ansers
      alert('thats correct');
      totalCorrect++;
      correct = true;
      break;
    }
  }

  if (!correct) {
    numberOfGuesses2--;
    alert('Youre wrong');
  }
}

if (!correct) {
  alert('You ran out of guesses', statesIveLivedIn);
} else {
  alert('Great Job');
}

alert('You got ' + totalCorrect + ' correct');

// `if the user has guessed 6 times | When the user answers correctly => the game is over`

