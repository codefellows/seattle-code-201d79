'use strict';


// Where are images stored
const allImages = [];
const totalClick = 0;

// Constructor function to define all the things that each image needs to care about.
function Image(url, name) {
  this.name = name;
  this.clicks = 0;
  this.timesShown = 0;
  this.url = `assets/images/${url}`;
  allImages.push(this);
}

// How to render an Image?
let goatImageEl = document.getElementById('goat-image');
let leftImageEl = document.getElementById('left-goat');
let rightImageEl = document.getElementById('right-goat');


function renderGoats() {

  // an issues
  // let imagePool = allImages;

  let leftImageIndex = Math.floor(Math.random() * allImages.length);
  let rightImageIndex = Math.floor(Math.random() * allImages.length);


  while (leftImageIndex === rightImageIndex) {
    rightImageIndex = Math.floor(Math.random() * allImages.length);

    // while(rightImageEl.src === right.url && leftImageEl.src === left.url) {
    //   leftImageIndex = Math.floor(Math.random() * allImages.length);
    //   rightImageIndex = Math.floor(Math.random() * allImages.length);
    // }
  }
  // console.log(allImages[leftImageIndex], allImages[rightImageIndex]);
  let left = allImages[leftImageIndex];
  let right = allImages[rightImageIndex]; 

  leftImageEl.src = left.url;
  leftImageEl.name = left.name;
  left.timesShown ++;
  rightImageEl.src = right.url;
  rightImageEl.name = right.name;
  right.timesShown++;
}

// what needs an event listener?
function handleClick(event) {
  // if (totalClick == 0) {

  // }
  event.preventDefault();
  let imageElement = event.target;
  console.log(imageElement.name);

  // what image did we click on??

  for (let i = 0; i < allImages.length; i++) {
    if (imageElement.name === allImages[i].name) {
      allImages[i].clicks++;
      console.log(allImages[i]);
    }
  }

  // we can render fresh goats easily, but how do we not re-render???
  renderGoats();
}

leftImageEl.addEventListener('click', handleClick);
rightImageEl.addEventListener('click', handleClick);

// how to we render / re-render?
new Image('cruisin-goat.jpg', 'cruisin');
new Image('float-your-goat.jpg', 'float');
new Image('goat-away.jpg', 'away');
new Image('goat-out-of-hand.jpg', 'hand');
new Image('kissing-goat.jpg', 'kissing');

renderGoats();

console.log(allImages);

