# Class 13: Data Persistence and LocalStorage API

## Announcements

* Tomorrow we have a Psychology Safety workshop, how to work on very productive.
* The final Exam (entrance exam for 301) opens up on Friday (Oct 1).
  * The format is exactly the same as the review quizzes, the questions will be very similar.
  * Not collaborative, you're expected to work on your own, open note, open internet.
  * A score of 80% is required to pass.
  * Take the time to test / use any code in your browser!
  * There will be retakes as necessary.

## Warm Up

Back to our Pokemon constructor, build a feature in our Pokedex object that can search our Pokemon List for a specific pokemon:

```js

function Pokemon(name, hp, ap) {
  this.name = name;
  this.hp = hp;
  this.ap = ap;
}

const pokedex = {
  pokemonList: [];

  // complete this function, which can search our pokemonList for any pokemon by name, hitpoints, or attackpoints, if no pokemon is found, just return null.
  search: function (key, value) {
    //  use booleans to tell our function what property we are looking for?
    // loop through the pokedex pokemonList.
    let results = [];
    for (let i =0; i < this.pokemonList.length; i ++) {
      let pokemon = this.pokemonList[i]; // variable representing the current pokemon in the loop.

      // bracket will let us use a variable as a value.
      // pokemon.key => this looks for a property called, instead of the value that "key" represents

      if (pokemon[key] === value) {
        results.push(pokemon);
      }
    }

    return results;
  }
}

pokedex.pokemonList.push(new Pokemon('Blastoise', 100, 100)) // we add pokemon here

pokedex.search('ap', 100);

// pokedex.search(true); // {}

// pokedex.search(,100,);

```

## Code Review

Yesterday ya'll had to adapt your BusMall Survey to display data not in a list but in a chart using a third party library.

* What went well, what did not go so well?
  
Jared: Sorting and comparing on Click, render unique images and no duplicates between rounds of voting.
Brannon: hand holding with the documentation with 3rd party libraries.
* We are working with some big esoteric object literals, these are never fun :/
Jordan: Getting some Pseudo code to help with code writing.

```js
// Sorting and comparing Images in order to display all unique images with the next round of voting. 

// What is being shown right now on the page?
//  grab all the currently rendered images.
let currentlyRenderedImages = [
  document.getElementId('leftImage');
  document.getElementId('rightImage');
  document.getElementId('centerImage');
];

// what was displayed in the previous round?  This is not necessarily required on click.

// What images are available??
//  create a bag of images that we can use to represent all of the possible products.
const allImages = [new Product('luggage.jpg'), ...];

// What images are not currently rendered?
//  create a bag of images that we know we could render.
let imagesToRenderNext = [];
// I don't want any images from currently rendered images, in our images to renderNext.
let filteredImages = allImages.filter(...);

// how do I pick an Image at random?
//  we can generate a random index from our array!
function randomImage() {
  let index = Math.floor(Math.random() * filteredImages.length)
  return allImages[index];
}

// How can I pick unique images?
//  we can compare each random image, and if they are the same, we can regenerate an image for any duplicates.
while(imagesToRender.length < 3) {
  let image = randomImage();

  if (!imagesToRender.includes(image)) {
    imagesToRender.push(image);
  }
}

console.log(imagesToRender); // [Products... ];

// How many times have they been seen?  Is this important right here right now? Maybe maybe not?

```

## How to program with Persistence in Mind

Persistence: data that will live beyond our program execution.

* All the data we create will live somewhere else.
* Up until now all the data is created by hand each time our JS runs, and has only lived in our computer memory.

### Data Storage Operations

* Read: what is the data that is stored.
* Create: put new data values into storage.
* Update: changes values from a piece that already exists.
* Delete: removing something in storage forever.

CRUD (create read update delete)

## LocalStorage API

A folder on your local machine. Gives you 5mb of data per website.  It's just a big object literal: key value pairs.  It just lets you store primitive data.  For comlex structures like object and arrays, we can use a built in method to convert those into strings.

* The data is only on your local machine, not available to anyone else.
* Consider this data safe.

```js

document // ==> uses methods on the DOM
 
localStorage // ==> uses methods to persist data in localStorage

// create
localStorage.setItem(key, value) // store something in localstorage using the key as an identifier;

// read
localStorage.getItem(key) // ==> uses a key to grab a value out of localstorage.

//update
localStorage.setItem(existingKey, newValue) // update a value if it is already present.

// remove
localStorage.removeItem(existingKey); // remove an entry that was previously made.

```

* In order to put and pull things our of localStorage consistently, we need to use:
  * JSON.parse - turns json strings into objects. // {name: "jacob"}
  * JONS.stringify - turns an object into a JSON string. // '{name: "Jacob"}'
