# Class 05: HTML / CSS Images and Text, Git Branching

## Announcements

* 1 on 1 meetings with each of you:
  * [assignment in canvas](https://canvas.instructure.com/courses/3327150/assignments/24423306?module_item_id=52228959).

## Warm Up

Create a `bouncer` function, we are all bouncers at a bar, and we need to enforce 2 rules:

* patrons age must be over 21.
* and everyone in our bar can only have 2 drinks.

function needs 2 inputs:

* age : number
* drinks : number

4 possible outputs:

* if our patron is under 21
  * You are too young
* if our patron has had over 2 drinks
  * You are too drunk
* if our patron is under 21 and has over 2 drinks
  * Your going to jail.
* if neither of thes are true
  * Have a nice night.

```js

// giving our function name so invoke (definition / signature)
function bouncer() {

  // inputs from the user
  let age = prompt("What is your age?");
  let drinks = prompt("How many drinks have you had?");

  // outputs?
  if (age < 21 && drinks >= 3) {
    console.log('You are going to jail');
  } else if (drinks >= 3) {
    console.log('you are too drunk');
  } else if (age < 21) {
    console.log('you are too young');
  } else if (age >= 21 && drinks <= 2) {
    console.log("Have a nice night");
  }
}

```

## Conceptual Review of the Week

* HTML / CSS
  * What is Semantic HTML?
    * Code that is easy for humans and screen readers.
      * Our element tags dictate the type of content the SHOULD be there, not necesarrily what is allowed by the browser.
        * `<div>`
      * `main`, `article`, `section`, `p`, `figcaptions`, `detail`.
    * What is the benefit of using Semantic HTML?
      * Makes it easier for us humans to work on our HTML as a team.
      * SEO is much better, with semantic tags.
        * Improve searchability, and accessibility.
  * What is an HTML Attribute?
    * Adding a "style" attribute, adding "src" to an element, adding an "id".
    * An element is being modified, changed in some way.
    * What are "id"s and "class" attributes used for?
      * specify an element for our JS and CSS to find and modify the element.
    * What about "href" and "src"?
      * specify a path to an "external reference".
      * hyperlinks, and images.
* JS
  * Primitive Data Types?
    * 5 of them, Numbers, Strings, Booleans, null, undefined.
    * These are the most basic values that can exist in javascript.
    * These are "immutable".
  * Conditional Logic
    * rules: if statements, else if statement, else statments
      * switch statments.
    * What is the difference between an `if` and an `else` statement?
      * `if` is an initial statement, and `else` is secondary statement.
        * else is like a default rule / inversion of a logical possibility.
      * `else if`?
        * another `if` that is a potentially possibility.
    * switch statement?
      * Evaluates expressions, matches those to "case" clauses.

  ```js

  let area = calculateArea(10, 20);

  switch (area) {
    case 10:
      console.log('too small');
      break;
    case 15:
    case 25:
      console.log('just right');
      break;
    default:
      console.log('too big');
  }

  ```

  * Arrays:
    * a variable / data structure that holds values, as many as we want.

  ```js

  let data = ["apple", "pineapple", "grapes"];

  data.push("orange");
  data.push(0);

  console.log(data) // ["apple", "pineapple", "grapes", "orange", 0]
  data.length // 5

  // we use "index" to describe the postion of each pieec of data in our array/
  data[0] // the first things

  data[4] // what would this give us, => 0
  ```

  * Loops
    * What is a loop?
      * Used to run a block of code (hopefully) more than once, until a condition is met.

  ```js
  // for loop

  // intializer ; 
  // condition ( we want this to be truthy intially, and the increment / decrmenter should eventually make this falsey) ;
  // increment / decrement ; 
  for (let guesses = 3; guesses > 0; guesses--) {
    console.log('looping!');
    // this should run 3
  }

  let guesses = 3;
  let isUserCorrect = false;

  // what changes?
  while (!isUserCorrect) {

    // do something over and over
    prompt('How old are you?");
    isUserCorrect = true;
  }

  ```

  * Functions
    * What is the the benefit of having functions?
      * Code re-usability!
      * Code readability.
      * More control.
      * Easy to refactor / maintain.
      * Let's you give abstraction.

  ```js

  // Parameters => required inputs,  variables that doesn't get a value UNTIL the function the invoked.
  function convertToUpper(param) {
    console.log(param); // => "Jacob"

    // return keyword, returns a value, we want to send data back to the context the function was run in.
    return param.toUpperCase();
  }

  // invoke myFunction

  let name = "jacob";

  let nameUpper = convertToUpper(name);
  console.log(nameUpper); // => JACOB

  ```

## HTML / CSS Images and Text

* see typed demo

## Git Branching

Labs today will have you worknig in feature branches on git:

### Fun with Functions Starter Code

* [Starter Code](https://github.com/codefellows/201d79-class-05-starter-code)
