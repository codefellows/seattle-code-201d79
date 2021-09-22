# Class 08: Constructor Function review / CSS Layouts

## Warm Up

```js

function Pokemon(name, hitpoints) {
  this.name = name;
  this.hitpoints = hitpoints;
}

let pokedex = {
  pokemonList: [],

  // add a Pokemon to the Pokemon list
  addPokemon: function (name) {
    let pokemon = new Pokemon(name, 100);

    this.pokemonList.push(pokemon);
  },

  // remove a Pokemon from the pokemonList, by `name` property.
  removePokemon: function (name) {
    let newList = [];
    // we get a name // => 'Jacob'

    // how do I know what pokemon to remove?
    //   search our pokemon list
    for (let pokemon = 0; pokemon < this.pokemonList.length; pokemon++) {
      let currentPokemon = this.pokemonList[pokemon];

      console.log(currentPokemon); // {name: 'Jacob', hitpoints: 100}
      if (currentPokemon.name === name) {
        // we need to remove this pokemon!
        continue;
      } else {
        newList.push(currentPokemon);
      }
    }
    // update our list of pokemon.
    this.pokemonList = newList;
  },
}

pokedex.addPokemon('Charizard');

```

## Code Review

* Getting the footer row to have the totals.
  * Total cookies for all stores AT a particular.
  * Grand total across ALL stores and ALL Hours.
    * array problems :(
      * expecting things in my array and JS tells me it's empty.
* Rendering elements in the document / HTML table.
* How do you access data from a prototype functions.
  * What is a constructor / what is the prototype / what is the "instance".

## CSS / HTML Layouts

* Building a layout from a mock up.
