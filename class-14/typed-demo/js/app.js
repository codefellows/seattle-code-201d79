'use strict';

// define a global variabel for all Pokemon Objects
const allPokemon = readPokemon() || [];

// allPokemon [{name, hp}]

function Pokemon(name, hp) {
  this.name = name;
  this.hp = hp;
}

Pokemon.prototype.speak = function() {
  console.log(this.name.toUpperCase);
};

function readPokemon() {
  let rawJSON = localStorage.getItem('pokemon'); // we haven;t set this yet.
  let objectLiterals = JSON.parse(rawJSON);
  let reinstantiatedPokemon = [];
  if (objectLiterals) {
    for (let i = 0; i < objectLiterals.length; i++) {
  
      let currentPokemon = objectLiterals[i];
  
      reinstantiatedPokemon.push(new Pokemon(currentPokemon.name, currentPokemon.hp));
    }
  }

  return reinstantiatedPokemon;
}

console.log(allPokemon);
