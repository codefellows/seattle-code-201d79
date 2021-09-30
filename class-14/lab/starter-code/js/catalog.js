/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i=0; i < Product.allProducts.length; i++) {
    let productOption = document.createElement('option');
    productOption.innerText = Product.allProducts[i].name;
    selectElement.appendChild(productOption);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
                    // DONE: Prevent the page from reloading
  event.preventDefault();


  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// DONE: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // DONE: suss out the item picked from the select list
  let selectElement = document.getElementById('items');
  let chosenItem = selectElement.value;
  console.log(chosenItem);
  // DONE: get the quantity
  let selectQuantity = document.getElementById('quantity');
  let chosenQuantity = selectQuantity.value;
  console.log(chosenQuantity);
  // DONE: using those, add one item to the Cart
  let itemsInCart = new CartItem(chosenItem, chosenQuantity);
  cart.items.push(itemsInCart);
  console.log(itemsInCart);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
 function updateCounter() {
//   document.getElementById('itemCount').innerHTML = '';
//   let counterEl = document.getElementById('itemCount');
//   let itemCounter = document.createElement('p');
//   let itemQuantity = 0;
//   for(let i = 0; i < cart.items.length; i++);{
//     itemQuantity += parseInt(cart.items[i].quantity);
//   }
//   itemCounter.textContent = itemQuantity;
//   itemCounter.appendChild(counterEl);
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
