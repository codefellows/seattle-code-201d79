'use strict';

// each store is open for a set number of hours.
let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

// 5 store objects
//   min number of customers per hour
//   max number of customers per hour.
//   average number of cookies per customer.
//   calculate the number of cookies
//      generate a random number between our min and max
//      multiply by avgCookPerCust
//          PER customer
//      repeat this process for every hour, accounted for in the `hours` array.
//          PER hour

function generateRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let seattle = {
  name: 'seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookPerCust: 6.3,
  salesTotals: [],
  grandTotal: 0,
  hourlyCustomers: function() {
    for (let hour = 0; hour < hours.length; hour++) {
      // 1) generate random number
      // let generateNumber = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      let generateNumber = generateRange(this.minCustPerHour, this.maxCustPerHour);

      // 2) multiply by avgCookPerCust
      let customerSales = Math.round(generateNumber * this.avgCookPerCust);
      this.salesTotals.push(`${hours[hour]}: total sales ${customerSales}`);
      this.grandTotal = this.grandTotal + customerSales;
    }
  },
};

function generateLineItems(store) {
  // find our parent element
  let parentEl = document.querySelector(`#${store.name}`);

  // read our salesTotals
  for (let total = 0; total < store.salesTotals.length; total++) {
    // create line item elements
    let newItem = document.createElement('li');

    newItem.innerText = store.salesTotals[total];
    // append to approriate HTML ul, what do we append to?
    parentEl.appendChild(newItem);
  }

  // create a final lline item with the grand Total
  let lastItem = document.createElement('li');
  lastItem.innerText = store.grandTotal;
  parentEl.appendChild(lastItem);
}

// Once we have our store values, we can render them to the HTML document.
//  HTML unordered list with a list item for every hour displaying salesTotals.

console.log(seattle);
seattle.hourlyCustomers();
generateLineItems(seattle);
// console.log(seattle);

