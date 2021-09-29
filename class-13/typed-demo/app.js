'use strict';

const orderFormEl = document.getElementById('orderForm');
const previousOrdersEl = document.getElementById('orders');
const previousOrders = readOrders() || [];
console.log(previousOrders[0], new CoffeeOrder(12, 'latte'));

for (let i = 0; i < previousOrders.length; i++) {
  let order = previousOrders[i];
  renderOrder(order);
}

function CoffeeOrder(size, type) {
  this.size = size;
  this.type = type;
}

// event listener
function handleOrder(event) {
  console.log('Here is our order submission');
  event.preventDefault();
  // event will be the submission event.
  // all the details that the user entered on the form are here

  const { size, type } = event.target;

  let coffee = new CoffeeOrder(size.value, type.value);

  renderOrder(coffee);
  saveOrders(coffee);

  // we can turn this into a function!!
  // let typeEl = document.createElement('h3');
  // typeEl.innerText = coffee.type;
  // let sizeEl = document.createElement('p');
  // sizeEl.innerText = coffee.size;
  // previousOrdersEl.appendChild(typeEl);
  // previousOrdersEl.appendChild(sizeEl);
}

orderFormEl.addEventListener('submit', handleOrder);


// renders a coffee order to the previous orders element
function renderOrder(coffee) {
  let typeEl = document.createElement('h3');
  typeEl.innerText = coffee.type;
  let sizeEl = document.createElement('p');
  sizeEl.innerText = coffee.size;
  previousOrdersEl.appendChild(typeEl);
  previousOrdersEl.appendChild(sizeEl);
}

function readOrders() {
  const jsonData = localStorage.getItem('orders');

  let parsedData = JSON.parse(jsonData);
  // console.log(parsedData.type);
  // console.log(jsonData.type);
  return parsedData;
}

function saveOrders(data) {
  console.log(previousOrders, data);
  previousOrders.push(data);
  let stringifiedData = JSON.stringify(previousOrders);

  localStorage.setItem('orders', stringifiedData);
}
