'use strict';

//purchase form stuff:
var purchaseForm = document.getElementById('purchaseForm');
purchaseForm.addEventListener('submit', processOrder);
var pendingOrders = [];
var shippedOrders = [];

function processOrder(event) {
  event.preventDefault();
  var cookies = event.target.buyCookiesField.value;
  var cutters = event.target.buyCuttersField.value;
  var shirts = event.target.butShirtsField.value;
  var customerName = event.target.nameField.value;
  console.log(cookies, cutters, shirts, customerName);




}
