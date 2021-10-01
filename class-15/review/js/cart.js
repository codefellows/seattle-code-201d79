/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;
let tableBody;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  if (tableBody) {
    tableBody.innerHTML = '';
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  tableBody = document.querySelector('tbody');
  
  // DONE: Iterate over the items in the cart
  console.log(cart.items);
  for (let i = 0; i < cart.items.length; i++) {
    let itemInfo = cart.items[i];

    // TODO: Create a TR
    let rowEl = document.createElement('tr');
    
    // TODO: Create a TD for the delete link, quantity,  and the item
    let linkEl = document.createElement('td');
    let quantityEl = document.createElement('td');
    let nameEl = document.createElement('td');

    linkEl.innerText = 'X';
    linkEl.id = itemInfo.product.name;
    quantityEl.innerText = itemInfo.quantity;
    nameEl.innerText = itemInfo.product.name;

    rowEl.appendChild(linkEl);
    rowEl.appendChild(nameEl);
    rowEl.appendChild(quantityEl);

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tableBody.appendChild(rowEl);
  }
  
}

function removeItemFromCart(event) {
  
  // console.log(event.target.parentNode);

  let productName = event.target.id;  

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  if (productName) {
    // this will remove duplicates :/
    cart.removeItem(productName); // how do we know what item to remove??
  }
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
