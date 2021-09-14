'use strict';

// console.log('Javascript is running');

let name = prompt('What is your name?');
let age = prompt('What is your age?');
let breakfast = confirm('What is you eat for breakfast');
let car = prompt('do you have a car');

console.log(typeof(breakfast)); 

// conditional logic / flow control
if (name == 'Jacob') {

  // sometimes we use 2 '=', this only compares the value
  //  known as 'weak' comparison

  // if a condition passes, we execture this logic
  console.log('Hey there Jacob');
}


// === represents 'strong' comparison that checks not only 'value', but also 'type'.
if (age == 31) {
  console.log('Nice!');
} else if (age < 21) {
  console.log('Are you old enough to be here');
} else {
  console.log('What are you plans for retirement?');
}

if (car == null) {
  console.log('Hope you can ride the bus');
}

if (breakfast == false) {
  console.log('Better get some food');
}

console.log(name, age, breakfast, car);
