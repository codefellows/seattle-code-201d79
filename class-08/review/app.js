'use strict';

//     storeHours: [number..]
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm' ,'5pm', '6pm', '7pm'];


// Need a constructor for our Cookie Store.
//     storeName: string
//     minCust: number
//     maxCust: number
//     salesTotalsPerHour: [number...]
//     dailySalesTotal: number
//     avgCookiesPerCust: method
//     calcRandomCustPerHour: method
//     render data to document: method
function StoreLocation(name, minCust, maxCust, avgCookiesPerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.hourlySales = [];
  this.dailySales = 0;
  StoreLocation.all.push(this);
}

// a place to store all the stores?
StoreLocation.all = []; // when do we add a store to this array?

StoreLocation.prototype.calcAvgCookiesBought = function() {
  for (let i = 0; i < storeHours.length; i++) {

    // generate random number of customer
    // generate cookies bought by random
    // round down our cookies bought.
    let cookiesSales = Math.floor(this.calcRandomCookieSales());
    
    // add result to hourly sales
    this.hourlySales.push(cookiesSales);
    // incremtn daily total by result.
    this.dailySales = this.dailySales + cookiesSales;
  }
};

StoreLocation.prototype.calcRandomCookieSales = function() {
  // return a random number of customers, between min and max

  return (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)) *  this.avgCookiesPerCust;
};

StoreLocation.prototype.renderTableRow = function() {
  // what is the parent element?
  let parentEl = document.getElementById('sales-data');
  //  create a row for our table
  let rowEl = document.createElement('tr');
  
  // start the row with our store name
  let dataEl = document.createElement('td');
  dataEl.innerText = this.name;
  rowEl.appendChild(dataEl);

  //  put our data in the row
  // we need to grab all the hourly sales data
  // we need to loop through all the sales numbers and create a new td and add the appropriate numbers
  for (let sale = 0; sale < this.hourlySales.length; sale++) {
    let dataEl = document.createElement('td');
    dataEl.innerText = this.hourlySales[sale];
    rowEl.appendChild(dataEl);
  }
  
  // add the total at the end
  dataEl = document.createElement('td');
  dataEl.innerText = this.dailySales;
  rowEl.appendChild(dataEl);

  //  append the row to our table
  parentEl.appendChild(rowEl);
};

let seattle = new StoreLocation('Seattle', 23, 65, 6.3);
let lima = new StoreLocation('Lima', 18, 68, 4.1);
let paris = new StoreLocation('Paris', 30, 40, 2.4);
let dubai = new StoreLocation('Dubai', 1, 45, 13.5);
let tokyo = new StoreLocation('Tokyo', 20, 25, 3.7);

seattle.calcAvgCookiesBought();
seattle.renderTableRow();

lima.calcAvgCookiesBought();
lima.renderTableRow();

paris.calcAvgCookiesBought();
paris.renderTableRow();

dubai.calcAvgCookiesBought();
dubai.renderTableRow();

tokyo.calcAvgCookiesBought();
tokyo.renderTableRow();

console.log(StoreLocation.all);

// for (let store = 0; store < StoreLocation.all.length; store++) {
//   let currentStore = StoreLocation.all[store];
  
//   currentStore.calcAvgCookiesBought();
//   currentStore.renderTableRow();
// }


// a way to build a table
//   create rows and columns: function DONE
//   creating the header row: function TODO
//   creating the footer row: function TODO

// for each hour in store hours
//  for each store in StoreLocation.all

// append all data to the bottom, make sure to run after we have calculated all values and appending store rows to the table.
function renderFooter() {

  let parentEl = document.getElementById('sales-data');
  let rowEl = document.createElement('tr');

  let dataEl = document.createElement('td');
  dataEl.innerText = 'Totals';
  rowEl.appendChild(dataEl);

  let grandTotal = 0;
  for (let hour = 0; hour < storeHours.length; hour ++) {
    // every hour in StoreHours is accounted for here
    // hour === 0
    let dataEl = document.createElement('td');
    let sum = 0;
    for (let store = 0; store < StoreLocation.all.length; store++) {
      // all stores data can be seen with StoreLocation.all[store]
      sum = sum + StoreLocation.all[store].hourlySales[hour];
      grandTotal = grandTotal + StoreLocation.all[store].hourlySales[hour];
    }
    dataEl.innerText = sum;
    rowEl.appendChild(dataEl);
    // console.log(sum);
    // for every hour, we sun the sales totals for every store
  }
  dataEl = document.createElement('td');
  dataEl.innerText = grandTotal;
  rowEl.appendChild(dataEl);
  parentEl.appendChild(rowEl);
  // console.log(grandTotal);
}

renderFooter();

