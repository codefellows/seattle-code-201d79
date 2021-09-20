'use strict';

// creates an element
let text = document.createElement('p');

// modify element elements with methods / properties.
text.innerText = 'Hello world';

// selects an element by ID attribute
let parentEl = document.getElementById('selectMe');

// selects mulitple elements by class attribute
let multipleParents = document.getElementsByClassName('selectUs');

console.log(parentEl, multipleParents);

// multipleParents[0].appendChild(text);
// "append" elements we create to the rendered DOM.
parentEl.appendChild(text);


let pokemon = {
  name: 'Charizard',
  abilities: ['blaze', 'solar-power'],
  speak: function() {
    console.log(this.name.toUpperCase()+'!!!');
  },
  // refactor to render abilites onto our HTML document.
  listAbilities: function (parentElement) {
    let listEl = document.createElement('ul');
  
    for (let i = 0; i < this.abilities.length; i++) {
      // console.log(this.abilities[i]);

      let abilityEl = document.createElement('li'); // returns an HTML `Node`.
      abilityEl.innerText = this.abilities[i];

      // place an element within a parentElement
      listEl.appendChild(abilityEl);
    }

    parentElement.appendChild(listEl);
  }
};



pokemon.listAbilities(parentEl);
