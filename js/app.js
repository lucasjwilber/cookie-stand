'use strict'

//this is where the all the lists for each shop are created on sales.html
var listsArea = document.getElementById('salesUl');
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
var stores = [];

//store constructor function
function Store(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.dailySales = [];
  this.dailyTotal = 0;
  //add this store to the master stores list array
  Store.stores.push(this);
}

//master stores list is a prototype
Store.stores = [];

//dayCalc prototype:
Store.prototype.dayCalc = function () {
  //1. for every hour of operation, 
  for (var i = 0; i < hoursOfOperation.length; i++) {
    //calculate a random number of customers... 
    var customersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);

    //...and then using that a number of cookies sold
    var cookiesSoldPerHour = Math.round(customersPerHour * this.avgCookiesPerCustomer);

    //then push the data to the dailySales array
    this.dailySales.push(`${hoursOfOperation[i]}: ${cookiesSoldPerHour} cookies`);

    //update the running total of cookies sold
    this.dailyTotal += cookiesSoldPerHour;
  }

  //then add the total to the end of the dailySales array
  this.dailySales.push(`Total: ${this.dailyTotal} cookies`);
}


Store.prototype.siteUpdate = function () {
  //create a ul on sales.html for this store and name it
  var salesList = document.createElement('ul');
  salesList.textContent = `${this.location}`;

  //for each hour of operation, create an li using info from the dailySales array, and append it to the salesList ul
  for (var i = 0; i < this.dailySales.length; i++) {
    var li = document.createElement('li');
    li.textContent = this.dailySales[i];
    salesList.appendChild(li);
  }

  //then append the whole list to the site's master list
  listsArea.appendChild(salesList);
};

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);


function updateAll() {
  for (var i = 0; i < Store.stores.length; i++) {
    Store.stores[i].dayCalc();
    Store.stores[i].siteUpdate();
  }
}

updateAll();
