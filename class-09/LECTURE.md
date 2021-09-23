# Class 09: Events and Forms

## Announcements

* 401 instructor panel: 1:00PM.
  * Myself plus JB, John, Ed.

## Warm Up

Our `Pokemon` constructor and `pokedex` object were able to addPokemon, and removePokemon from an array.  Today we are battling Pokemon.

```js

function Pokemon(name, attackPoints, hitpoints) {
  this.name = name;
  this.ap = attackPoints;
  this.hp = hitpoints;
}


Pokemon.prototype.attack = function (opponent) {
  console.log(this.name + " attacks " + opponent.name);
  opponent.hp = opponent.hp - this.ap;
}

let Charizard = new Pokemon('Charizard', 10, 100);
let Blastoise = new Pokemon('Blastoise', 7, 120);

// Charizard.attack(Blastoise);
// console.log(Blastoise); // {'Blastoise', 7, 110}

let pokedex = {

  battle: function (pokemon1, pokemon2) {
    // both pokemon take turns attacking each other until one has 0 (or less) hp, when that happens return the surviving.

    // we need to decide who goes first?
    let turn = pokemon1; // our attacking pokemon
    let wait = pokemon2; // our pokemon who is getting attacked.

    // we need to stop the loop when at least one of the pokemon has 0 hp.
    while(turn.hp > 0 && wait.hp > 0) {
      // we need some sort of loop for pokemon to attack back and forth.
      turn.attack(wait);

      // swapping variables values
      let temp = wait;
      wait = turn;
      turn = temp;
    }

      // vistory message when someone wins!
    if (turn.hp > 0) {
      console.log(turn.name + ' wins!');
    } else {
      console.log(wait.name + ' wins!');
    }
  }

}
```

## Code Review

* Volunteer for sharing their base!
  * Thank you Scott for sharing your code!
* Designing for different screen sizes
  * mobile vs desktop vs tablet.
* Pitfalls of CSS
* Filling our table with data from JS
* How many children do our elements need?

## HTML Forms

Elements that handle user input.

* Buttons: clickable elements that does form things...
* Input: generic text input elements
  * type attribute sets the type of value that the input receives
* Fielsets: a group of inputs
* Legends: a label for a group of inputs
* Form: A 'container' element for all inputs that belong to a shared event.

## Browser Events

Our functions are goint to be invoked, not explicitly in our code, but by the browser when something happens.
* We have to define parameters : `function (param) {}` , that we didn't creat ourselves.

```js

function askName(name) {
  // do something with that name
}

askName('Jacob');


// for an event
function handleForm(event) {
  console.log(event) // {}
}

```

* what events are there?
  * when your mouse moves
  * when you click on anything.
    * right click and left click.
  * when you hover over things.
* All of these events are associated with some element / object in the Browser.
* We tap into this by using a method on an element: `addEventListener`.
  * We pass a function into this method, that will be run when a specific event occurs.
