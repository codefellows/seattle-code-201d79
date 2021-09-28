# Class 12: Chart JS and Third Party Libraries

## Code Review

* Who would like to go through lab 11.
  * Chloe would like to share her project, Thank you!

## Third Party Libraries

What is a third party library?

* Library: Some code that does a specific job!
  * Typically a function or set of functions.
  * Often includes a constructor withh all of it methods and properties.
* Third party: written by someone else.
* Any code that we use in our own script that we did not explicitly create becomes a `dependency`.
  * dependency injection.
* Libraries that run in the Browser vs Node.
  * We are focusing on browser libraries.
  * We can't use Node libraries yet, but any browser library will work.
  * `npm install ...` - we're not here.

## Chart JS

View the installation instructions carefully!

* We want a CDN link: https://cdnjs.com/libraries/Chart.js
* Once we have a url, we can add to our HTML, in the head of our document.

### HTML Canvas

An element that let's users / developers draw shapes and images, within our HTML.

* What if we don't just want a bunch of boxes?
  * Enter the canvas, 2d and 3d context environemtn to create shapes with math.
  * Allows our library to make much nicer things than just boxes.
