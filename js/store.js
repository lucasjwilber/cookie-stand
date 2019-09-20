'use strict';

//purchase form stuff:

var pendingOrdersList = document.getElementById('pending-orders');
var purchaseForm = document.getElementById('purchaseForm');
purchaseForm.addEventListener('submit', processOrder);
var pendingOrders = [];
var shippedOrders = [];

function Order(cookies, cutters, shirts, customerName, customerStreet, customerCity, customerState, customerZip, customerCreditCard, customerCCV, specialInstructions) {
  this.cookies = cookies;
  this.cutters = cutters;
  this.shirts = shirts;
  this.customerName = customerName;
  this.customerStreet = customerStreet;
  this.customerCity = customerCity;
  this.customerState = customerState;
  this.customerZip = customerZip;
  this.customerCreditCard = customerCreditCard;
  this.customerCCV = customerCCV;
  this.specialInstructions = specialInstructions;
  pendingOrders.push(this);
}

function processOrder(event) {
  event.preventDefault();
  var orderDetails = [];
  var cookies = event.target.buyCookiesField.value;
  var cutters = event.target.buyCuttersField.value;
  var shirts = event.target.buyShirtsField.value;
  var customerName = event.target.nameField.value;
  var customerStreet = event.target.streetField.value;
  var customerCity = event.target.cityField.value;
  var customerState = event.target.stateField.value;
  var customerZip = event.target.zipField.value;
  var customerCreditCard = event.target.creditCardField.value;
  var customerCCV = event.target.ccvField.value;
  var specialInstructions = event.target.specialInstructionsField;

  new Order(cookies, cutters, shirts, customerName, customerStreet, customerCity, customerState, customerZip, customerCreditCard, customerCCV, specialInstructions);

  console.log(pendingOrders);
  alert('Order processed. Thank you for your purchase!');

  event.target.buyCookiesField.value = null;
  event.target.buyCuttersField.value = null;
  event.target.buyShirtsField.value = null;
  event.target.nameField.value = null;
  event.target.streetField.value = null;
  event.target.cityField.value = null;
  event.target.stateField.value = null;
  event.target.zipField.value = null;
  event.target.creditCardField.value = null;
  event.target.ccvField.value = null;
  event.target.specialInstructionsField = null;

  thisOrder = document.createElement('li')
  pendingOrdersList.appendChild(thisOrder);
  thisOrder.textContent = test;

}
