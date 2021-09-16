# Class 04: Functions

## Warm Up

* What is an Array?
   * a packet of information that you can draw from | and place things into!
     * organized by `index` - number that refers to a position.

  ```js

  let people = ['Hexx']; // people[0] == 'Hexx'

  let instructor = 'Jacob';

  //2) How can I add 'instructor` to he `people` array? 

  people.push(instructor);
  console.log(people); // => ['Hexx', 'Jacob'];


  people[0] = instructor; // this works because the array is empty, if
  console.log(people); // output => ['Jacob']

  // both achieve the same end goal


  ```

  ```js

  let people = [];

  people[3] = "Jacob";

  console.log(people); // [empty, empty, empty, "Jacob"];

  ```

* Using a for loop, how can we console.log just "Jacob"?

```js

// check every index and see if there's a string there.

for (let i = 0; i < people.length; i++) {
  if (people[i] == "Jacob") {
    console.log(people[i]);
  } 
}

```

## Code Review

* Top 10 list
  * Using an ordered list
* Guess a number question between zero and 100.
  * 'Guess a number between 0 and 100?'.
    * we need a js file that is linked to our HTML.
    * What is the correct number? `let correctNumber = 39`
    * How many times can the user guess? `let numberOfGuesses = 4`
    * We need feedback for our User?  `you're to high / to low`
    * We need to know when the game is over?  `if the user has guessed 4 times | When the user answers correctly`
* Multiple choice question, with multiple correct answers.
  * 'Can you guess which states I've lived in?'
    * What are the correct answers: `let statesIveLivedIn = ['Georgia', 'Washington', 'Florida', 'Utah', 'Texas', 'Virginia`];`.
    * How many times can the user guess? `let numberOfGuesses = 6`
    * We need feedback for users: `wrong guess again / you got it right`.
    * When is the game over? `if the user has guessed 6 times | When the user answers correctly`.
      * validating answers | normalizing user input.
      * if the user is wrong a game over, display correct answers: alert(statesIveLivedIn);

## CSS Layout

Both of these work along with the Box Model to ensure even more control of our elements layout.
  
* Display Property - dictates how sibling elements are displayed next to that element.
  * block: Elements displays itself across its entire parent element. No other element will appear next to it.
  * inline-block: tries to take up as much space as possible, but other elements can sit next to it.
  * inline: similar to inline block, cannot set height and width.
* Position Properties - dictate how elements are positioned within their parent element.
  * static: Where my parent thinks I will stay.
  * relative: An element can position itself relative to its parent.
  * absolute: an element ignores its siblings and only positions itself relative to its parent.
  * fixed: ignore everything, and position youself relative the browser window.

## JS Functions

A function is a singlur block of logic that can be run however many times, and in whatever context you want.
  
* Think of this as defining a code as a variable.

* It's best to think of a function as something that ttakes in input, and produces output.

```js

// as functions signature / definition
function myfirstFunction() {
  console.log('I am alive');

  // supplied an output value to wherever the function was called.
  return 'some value';
}

myFirstFunction(); // these parnheses tell out runtime wee are invoking.

console.log(myfirstFunction());

let isUserCorrect = false;

/// doing things and setting to true

isUserCorrect('some answer'); // => true | false


// inputs => parameters: a variable that you declare in the funcitons parentheses

function logString(banana) {

  console.log('The Users input is: ' + banana);

  return 'nothing to return yet';
}

logString('Hello World') // log 'Hello World' to the console

// using return values

function sum(a) {
  return a + 10;
}

function multiply(a) {
  return a * 10;
}

let 5Plus10 = sum(5) + multiply(5);

console.log(5Plus10); // 15

``
