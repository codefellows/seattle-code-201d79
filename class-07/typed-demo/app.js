'use strict';

let pokedex = [];

// defining the function to run when we create a Pokemon
function Pokemon(name, hitpoints, attack, ability) {
  this.name = name;
  this.hitpoints = hitpoints;
  this.attack = attack;
  this.ability = ability;
  pokedex.push(this);
}

// defining shared properties / methods for all Pokemon
Pokemon.prototype.useAbility = function() {
  console.log(this.name + ' uses ' + this.ability());
};

Pokemon.prototype.render = function() {
  let tableEl = document.getElementById('my-pokemon');

  let rowEl = document.createElement('tr');

  let nameEl = document.createElement('td');
  nameEl.innerText = this.name;
  let hitpointsEl = document.createElement('td');
  hitpointsEl.innerText = this.hitpoints;
  let attackEl = document.createElement('td');
  attackEl.innerText = this.attack;

  rowEl.appendChild(nameEl);
  rowEl.appendChild(hitpointsEl);
  rowEl.appendChild(attackEl);

  tableEl.appendChild(rowEl);
};

// Instantiating a new Pokemon
new Pokemon('Charizard', 100, 50, function() { return 'BLAZE';});

pokedex[0].useAbility();
pokedex[0].render();

new Pokemon('Blastoise', 200, 75, function() { return 'WATER BLAST';});

pokedex[1].render();

console.log(pokedex); // {name: 'Charizard'}
