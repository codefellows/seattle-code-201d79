# Class 06: JS Objects, DOM, Domain Modeling

## Announcements

* I'll be coming around and chatting about goals and course progess.
* Thank you for giving us feedback.
  * What's going well:
    * Instuctional staff / TA.
    * Ya'll like the warm up and review sessions
      * More of this to come.
  * Things that are difficult:
    * There is a lot to cover and don't we enough time.
      * spend more time on certain subjects.
    * We have waaaay too much material.
      * We have to get to all of it, even if we can't spend enough time to make us feel comfortable.
    * There is some details missing
      * terminal commands.
      * js functions.
      * browser behaviors.

## Warm Up

Refactoring our Bouncer function:

The `bouncer` should be modified to take 2 parameters, an `age` and `drinks`, we should also create a function called `checkPatron`, check patron will `prompt` the user and return an array with 2 index values:

* `0`th index will contain the `age` of the patron.
* `1`st index will contain the number of `drinks`.

```js
function checkPatron() {
  let age = prompt("What is your age?");
  let drinks = prompt("How many drinks have you had?");

  let patronInfo = [age, drinks];  
  return patronInfo;
}

// giving our function name so invoke (definition / signature)
function bouncer(age, drinks) {

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

let patron = checkPatron();
bouncer(patron[0], patron[1]);
```

## Objects and the DOM

What is an javascript "Object"?

* An object is much like and array:
  * It's a data structure?
    * Anything that can contain / model data.
    * key / value pair: {key: value}
      * `let array = ["Jacob", 31];`
      * `let object = {"name": "Jacob", "age": 31};`
    * Keys are often referred to as 'properties' of an object.
  * What types of things can you store in an object.
    * any data type can be placed within an object, function take on a different name when store in an object: methods.

```js

let person = {
  // we can define properties in quotes or without quotes.
  name: "Jacob",
  age: 31,
  speak: function() {
    // 'this' when used within a method, it refers to the specific object in which the method is defined. 
    console.log('Hello!, my name is: ' + this.name);
  },
}

// dot notation
person.name;

// bracket notation
person["name"] // bracket notation uses values to refer to properties.

let property = "speak";
person["speak"()] // => 31

person.speak()); // => "Hello, my name is: ..."
```

* Contextual 'this':
  * Changes depending on where `this` is used.
    * If just typed in he browser, `this` refers to the global `window` object.
    * If used in an object, it refers to that specific object.

Let's create a Pokemon.

```js

let pokemon = {
  name: 'Charizard',
  abilities: ["blaze", "solar-power"],
  speak: function() {
    console.log(this.name.toUpperCase()+"!!!");
  },
  listAbilities: function () {
    for (let i = 0; i < this.abilities.length; i++) {
      console.log(this.abilities[i]);
    }
  }
}

pokemon.name; // Charizard
pokemon.speak() // => CHARIZARD!!!!
pokemon.listAbilities();

```

### Math.random

* `Math.random()` // => number between 0 and 1
* `Math.random() * 6` // => number between 0 and 6 (not including 6) including decimals
* `Math.floor(Math.random() * 6) // => give you an integer betwen 0 and 6 (not including 6).

## The Document Object Model

* A global object (in the browser) that lets us developers modify the HTML `document`
  * try inpectin the document.
  * This objec has mehods that let us perfrom som really powerful behaviors:
    * `document.createElement`
      * creates a new HTML elements that can be added to the document.
        * Created elements just exist in our JS runtime, in order to be rendered the need to be added to the `document`
      * returns that element to our runtime context.
      * `let text = document.createElement('p')`
      * `text.innerHTML = '<span>Hello world</span>'
      * `text.innerText = 'Hello world`

## Modeling the Problem Domain

Engineers get abstract problems that do not have straight lines to solutions, only requirements and conrtaints.

* Hey can you build me a robot that cooks your food?
  * What are the behaviors, and data that is required to allow a robot to cook you food?
    * What food are you cooking?
    * How long are you cooking the food?
    * Can is be cooked longer / shorted depending on weight?

robot:
  * cooktime
  * foodType
  * foodWeight
  * cook()
