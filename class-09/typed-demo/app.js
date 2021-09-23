'use strict';

// select and element you want to attack a listener to

// Our pokemon constructor
function Pokemon(name, health, attack) {
  this.name = name;
  this.hp = health;
  this.ap = attack;
}


let loginFormEl = document.getElementById('login');
let pokemonFormEl = document.getElementById('create-pokemon');
// let buttonEl = document.getElementById('login-btn');

function handleLogin(event) {
  event.preventDefault(); // prevents page refresh, prevents all of our js from resetting.
  console.log(event.target.username.value);
  console.log(event.target.email.value);
  console.log('login submitted');
}

// How do I grab pokemon details
function handlePokemon(formSubmission) {
  formSubmission.preventDefault();

  let name = formSubmission.target.pokemonName.value;
  let hp = formSubmission.target.hp.value;
  let ap = formSubmission.target.ap.value;

  let pokemon = new Pokemon(name, hp, ap);
  console.log(pokemon);
}


// addEventListern get 2 arguments / parameters
//  1 a string with the name of the event to listen for
//  2 a function that runs
loginFormEl.addEventListener('submit', handleLogin);
pokemonFormEl.addEventListener('submit', handlePokemon);


