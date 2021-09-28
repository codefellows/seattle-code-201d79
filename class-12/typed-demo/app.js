'use strict';

const allGoats = [];
const goatImageContainer = document.getElementById('goat-images');

function GoatImage(filename, name) {
  this.name = name;
  this.filepath = `assets/${filename}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}

// render goats to click on
function renderImages() {
  // what is currently rendered?
  let leftGoatEl = document.getElementById('left-goat');
  let rightGoatEl = document.getElementById('right-goat');

  // we don't want image that are currently rendered
  // check indexes?
  let possibleGoats = [];
  // filterin an array
  for (let i = 0; i < allGoats.length; i++) {
    let image = allGoats[i];
    if (
      leftGoatEl.src !== image.filepath
      && rightGoatEl.src !== image.filepath
    ) {
      possibleGoats.push(image);
    }
  }
  
  // choose 2 random goats from our possible goats
  let randomLeftIndex = Math.floor(Math.random() * possibleGoats.length);
  let randomRightIndex = Math.floor(Math.random() * possibleGoats.length);

  while(randomLeftIndex === randomRightIndex) {
    randomRightIndex = Math.floor(Math.random() * possibleGoats.length);
  }

  let rightImage = possibleGoats[randomRightIndex];
  let leftImage = possibleGoats[randomLeftIndex];

  leftGoatEl.src = leftImage.filepath;
  leftGoatEl.name = leftImage.name;
  leftImage.timesShown ++;
  rightGoatEl.src = rightImage.filepath;
  rightGoatEl.name = rightImage.name;
  rightImage.timesShown ++;
}

// render data to a chart
function renderChart() {
  let chartEl = document.getElementById('my-chart');
  chartEl.innerHTML = '';

  // grab that canvas element
  let ctx = chartEl.getContext('2d');
  const labels = [];
  const clickData = [];
  for (let i =0; i < allGoats.length; i++) {
    labels.push(allGoats[i].name);
    clickData.push(allGoats[i].timesClicked);
  }

  
  // create a new Chart, feed the chart the appropriate data
  let goatChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets:[{
        label: '# of clicks',
        data: clickData,
      }, {
        label:'# of times shown',
        data: [],// what data goes here?
      }],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// run whenver we click a goat!
function handleClick(event) {

  let clickedGoatEl = event.target;

  // what image is being clicked?
  console.log(clickedGoatEl);
  for (let i =0; i < allGoats.length; i++) {
    if (clickedGoatEl.name === allGoats[i].name) {
      // plus up the counter for an image
      allGoats[i].timesClicked++;
    }
  }

  renderImages();
  renderChart();
}

const filenames = [
  'cruisin-goat.jpg',
  'float-your-goat.jpg',
  'goat-away.jpg',
  'goat-out-of-hand.jpg',
  'kissing-goat.jpg',
  'sassy-goat.jpg',
  'smiling-goat.jpg',
  'sweater-goat.jpg',
];

for (let i = 0; i < filenames.length; i++) {
  let file = filenames[i]; // cruisin-goat.jpg
  let name = file.split('.')[0]; // ['cruisin-goat', 'jpg']
  allGoats.push(new GoatImage(file, name));
}

renderImages();

goatImageContainer.addEventListener('click', handleClick);
