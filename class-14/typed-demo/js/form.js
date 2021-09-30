'use strict';

const formEl = document.getElementById('create-pokemon');

function handleSubmit(event) {
  event.preventDefault();
  // let banana = event.target.pokemonName;
  let { pokemonName, hp } = event.target;

  // create a Pokemon
  let pokemon = new Pokemon(pokemonName.value, hp.value);

  // save it to localStorage
  savePokemon(pokemon);
}

function savePokemon(pokemon) {

  // I want to add to allPokemon, and save all Pokemon to localStorage
  allPokemon.push(pokemon);
  let stringifiedPokemon = JSON.stringify(allPokemon);

  // Update / Create somethin in localStorage?
  localStorage.setItem('pokemon', stringifiedPokemon);
}

formEl.addEventListener('submit', handleSubmit);
