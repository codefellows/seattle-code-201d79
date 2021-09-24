# Class 10: JS Debugging, CSS Grid, Concept Review

## Concept Review / Warm Up

* See warm up [file](https://github.com/codefellows/seattle-code-201d79/tree/main/class-10/warm-up)

## Code Review

* Creating a new store with a form
* Render in our Table.

## JS Debugging

* 4 Types of JS errors:
  1. Syntax Error: a typo, an improperly placed semicolon, etc.
  2. Reference Error: a variable / function that you are trying to use does not exist, according to JS.
  3. Type Error: When you are using the wrong type.  Often a sign that we an issue with our data types.
  4. Range Error: You are using an unacceptable numeric value.
     * new Array(-1)
* Call Stack
  * A data structure (stack) that holds all the function invocation, while those functions are performing their jobs

```js

// constant globals
const storeHours = [];
const isOpen = false;

init();
main();
cleanUp();



function init() {

}

function main() {

}

function cleanUp() {

}


function print(string) {
  console.log(string);
}

function shout(string) {
  console.log(string.toUpperCase();
}

print('hello');
shout('hey');

```

* Order of Execution.
  * Our engine perfroms specific things when reading our JS files.
    1. Create some scope for all the JS code associaed with that web page.
    2. Read all the commands
       1. Create variable memory
       2. Create function memory
          1. function get "hoist"ed to the top of the file?
    3. Executes all the commands
       1. invoking functions.
       2. putting values into variables.

## CSS Grid
