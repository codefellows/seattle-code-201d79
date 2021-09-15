# Class 03: CSS Box Model, JS loops, truthiness, Switch Statements

## Code Review

* getElementById
  * This is a DOM method, we will introduce and discuss his a little later.
* Conditional Logic
  * if ... else if
* Keep yourself DRY, this is hard to do.
  * use `functions`, we won't introduce these until tomorrow.

## VS Code Config

* eslint
  * `linting`: keeping your code free of ugliness.
    * Do you want semicolons?
    * How many spaces in our tabs.
  * eslint: linting 'es' ecmascript.
    * program that you can install in vs code.
  * `.eslintrc.json`.
* `.gitignore`: hidden files for our operating system.
  * .DS_Store
  * node_modules

## JS Arrays

* Our first iterative Data Structure.
* Primitive Data Types Review:
  * Strings.
  * Numbers.
    * Integers
  * Boolean.
  * null
  * undefined

 > NOTE: Variables != 'Data Type'.

* The Array is like a bucket for holding these data types.
  * Arrays store values based on an `index`.
  * he index is a number, starting at `0` and going all th way to the toal number of things in the array.
    * example: if we store 5 pieces of data in an array, 0 - 4.
  * In order to add data to an array we just have to define an array, and use either a built in funtion: `push` or assign a value based on index.

```js

let person = [];

person.push('Jacob', 31);

console.log(person); // ['Jacob']

person.push(31);

console.log(person); // ['Jacob', 31]

console.log(person[0]); // 'Jacob'

```

## Control Flow in JS

How can we control the order that code runs?

* Loops: a way to run code more than once.
  * `for` loop, runs code for a specific number of times.

  ```js

  // three things that go in our for loop conditions,
  //    1 initializer
  //    2 condition for the intializer
  //    3 incrmenter, changes the intialized so that the condition will eventually be false.
  for (let i = 0; i < 10; i++) {
    // here goes code that will potentially run more than once
    console.log('I have run ' + i + ' times');
  }

  ```

  * `while`: a loop that just runs on a single conditional statement

  ```js

  let intializer = 0

  // `!` is the inversion of a value.
  while (intializer < person.length) {
    console.log(person[initializer]);
    intializer ++;
  }

  ```

  * `do while`: the same as a while, but will always run at least once.

  ```js
  let isJacob = false;

  do {
    // here goes the code to repeat
    consol.log('I always run at least once');
  } while (isJacob);

  ```

## Switch Statements

* This is a code that blocks that requires multiple specific conditions to run.
  * Does a value, equal one of many, specified options.

  ```js

  let name = 'Jacob';

  switch (name) {
    case "Jacob":
      console.log('Instructor');
      break;
    case "Hexx":
      console.log('TA');
      break;
    case 'Brook':
      console.log('VP');
      break;
    default:
      console.log('Not recognized');
  }

  ```

## Truthy and Falsey

JavaScript is kinda kooky and has loose definition of sort of true = true, and sort of false = false.

Truthy:
 * true
 * 1 (any number that isn't zero).
   * fractions, float, any non zero.
 * 'string' (non empty string)
   * 'false'
   * '0'
 * {} | []

Falsey:
 * false 
 * 0 
 * '' (empty string)
 * undefined
 * null


Logical Operators:

* ! - inversion / logical negation
* && - logical inclusion
* || - one or the othere

```js

let name = 'Jacob'
let age = 31

// evaluated on it's truthiness
if (name == 'Jacob' || age > 30) {

 // if truthy do this.
}

```

## CSS Box Model

Refers to 3 specific properties of an HTML element.

* Margin: space around the border and adjacent content or parent element.
* Padding: Space around the border and the content of your element
* Border: the direct line around your content, between padding and margin/
* (Height and Width): The specific size of any content.
