'use strict';

const storeHours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'];
const allStores = [];
const formEl = document.getElementById('newStore');


// Our Event handler for our form
function handleFormSubmission(event) {
  event.preventDefault();
  let { storeName, minCust, maxCust, avgCookiesPerCust } = event.target;

  let newStand = new CookieStand(
    storeName.value,
    parseInt(minCust.value),
    parseInt(maxCust.value),
    parseInt(avgCookiesPerCust.value)
  );
  newStand.calcAverageCookieSales();
  newStand.renderTableRow();
  generateFooterRow();
}

formEl.addEventListener('submit', handleFormSubmission);

function generateRange(min, max) {
  let range = Math.floor(Math.random() * (max - min) + 1) + min;
  return range;
}

function generateElement(type, parent, value, id) {
  let childEl = document.createElement(type);
  // set an optional id attribute for an element.
  if (id) {
    childEl.id = id;
  }
  childEl.innerText = value;
  parent.appendChild(childEl);
  return parent;
}

function CookieStand(name, minCust, maxCust, avgCookiesPerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.dailySales = [];
  this.dailyTotal = 0;
  allStores.push(this);
}

CookieStand.prototype.calcAverageCookieSales = function() {
  for (let i = 0; i < storeHours.length; i++) {
    let hourlySales = Math.floor(generateRange(this.minCust, this.maxCust) * this.avgCookiesPerCust);

    this.dailySales.push(hourlySales);
    this.dailyTotal = this.dailyTotal + hourlySales;
  }
};

CookieStand.prototype.renderTableRow = function() {

  // create / read our element
  let parentEl = document.getElementById('sales-data');
  let rowEl = document.createElement('tr');

  generateElement('td', rowEl, this.name);

  // fill data cells with hourly sales values
  for (let i = 0; i < this.dailySales.length; i++) {
    generateElement('td', rowEl, this.dailySales[i]);
  }

  generateElement('td', rowEl, this.dailyTotal);

  parentEl.appendChild(rowEl);
};

// generate that footer row
function generateFooterRow() {
  // we need our row header
  let parentEl = document.getElementById('footer');
  parentEl.innerHTML = '';
  let rowEl = document.createElement('tr');

  generateElement('td', rowEl, 'Totals');

  // generate all hourly sums and grandtotal
  let grandTotal = 0;
  // loop thrugh hours
  for (let hour = 0; hour < storeHours.length; hour++) {
    let hourSum = 0;
    // loop through each store
    for (let store = 0; store < allStores.length; store++) {
      // sum up all hourly sales
      hourSum = hourSum + allStores[store].dailySales[hour];
      // add sum to grandTotal
      grandTotal = grandTotal + allStores[store].dailySales[hour];
    }
    generateElement('td', rowEl, hourSum);
  }
  generateElement('td', rowEl, grandTotal);
  parentEl.appendChild(rowEl);
}

new CookieStand('Seattle', 23, 65, 6.5);
new CookieStand('Lima', 15, 30, 8.9);


for (let i = 0; i < allStores.length; i++) {
  allStores[i].calcAverageCookieSales();
  allStores[i].renderTableRow();
}
generateFooterRow();
