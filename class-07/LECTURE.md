# Class 07: JS Constructor, HTMl Tables

## Code Review

* DOM commands for `createElements`
  * List items / line element: <li>.
* Calculating cookies per customer per hour.
* LInking CSS between seperate HTML files.

## Object Oriented Programming

Treating Objects like first class citizens:

* All of our functionality in our app, should be "encapsulated" within an object (key value pairs).
* Each object has a "class" / "type" / "category"
* We create functions that produce these objects for us.
* We want to conceptualize our programs into generic terms / behaviors.
* Adds security, consistency, and reusablity.

## JS Constructor Functions

JavaScript implemts OOP with constructor function: a function that creates an "instance" of an object.
* "instance" an object created from a constructor.

```js

// constructor are often create with the first letter capitalized:
function Pokemon(name, hitpoints, attack, useAbility) {
  // this logic only returns an "object" when we use the 'new' keyword.
  // assigned properties onto contextual `this`
  this.name = name; // if we are creating an instance, assigning properties is reqeuired.
  this.hitpoints = hitpoints;
  this.attack = attack;
  // this works but is not preferred.
  if (useAbility) {
    this.useAbility = useAbility;
  }
}

// we can create and "instance" of our pokemon using the "new" keyword.

// the new keyword perform specific things in the runtime to create an object.
let Charizard = new Pokemon("Charizard", 100, 50); // the constructor returns a new object: { name: "Charizard };
let Blastoise = new Pokemon("Blastoise", 100, 50);

console.log(Blastoise, Charizard);

```

* Prototypes: the blueprint shared by every object created from a constructor.
* Methods are prefereably defined on a `prototype`.

```js

// all things created from the 
Pokemon.prototype.useAbility = function() {
  console.log('I use my ability'); 
}

Pokemon.prototype.speak = function() {
  console.log(this.name.toUpperCase() + !!!);
}

```

## HTML Tables

They are organize tabular data into `rows` and `columns`.
* Every piece of data belongs in a `<table>` element.
* The direct children are row elements: `<tr>`
* The children of a  `<tr>` is a `<td>`.

```html

<table>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>

  </tr>
  <tr>

  </tr>
  <tr>
    
  </tr>
</table>

```
