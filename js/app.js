'use strict'

//this is where the all the lists for each shop are created on sales.html
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

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
Store.stores = [];


Store.prototype.dayCalc = function () {

  //first reset dailySales and dailyTotal incase this was called after resetTable()
  this.dailySales = [];
  this.dailyTotal = 0;

  //1. for every hour of operation, 
  for (var i = 0; i < hoursOfOperation.length; i++) {
    //calculate a random number of customers... 
    var customersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
    //...and then using that, a number of cookies sold
    var cookiesSoldPerHour = Math.round(customersPerHour * this.avgCookiesPerCustomer);
    //then push that data to the dailySales array
    this.dailySales.push(cookiesSoldPerHour);

    //update the running total of cookies sold
    this.dailyTotal += cookiesSoldPerHour;
  }

  //then add the total to the end of the dailySales array
  this.dailySales.push(this.dailyTotal);
}




var tbody = document.createElement('tbody');
var salesTable = document.getElementById('salesData');


function render() {
  //first reset the table in case this was called already:
  
  resetTable();


  //TABLE HEADER:
  //create a table header and a row for it, append them
  var tableHeader = document.createElement('thead');
  salesTable.appendChild(tableHeader);
  var tableHeaderRow = document.createElement('tr');
  tableHeader.appendChild(tableHeaderRow);

  //add a blank td for the top left area
  var topLeftBlock = document.createElement('td');
  tableHeaderRow.appendChild(topLeftBlock);

  //add a td for each hour of the day
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var hourTd = document.createElement('td');
    hourTd.textContent = hoursOfOperation[i];
    tableHeaderRow.appendChild(hourTd);
  }

  //add a Total td at the end
  var totalTd = document.createElement('td');
  totalTd.textContent = 'Total';
  tableHeaderRow.appendChild(totalTd);


  ///////////////////TABLE BODY:
  salesTable.appendChild(tbody);

  //run .addToTable() on each store
  for (var i = 0; i < Store.stores.length; i++) {
    Store.stores[i].addToTable();
  }

}


Store.prototype.addToTable = function () {

  //first run dayCalc to update the dailySales array
  this.dayCalc();

  //make a row for this store and append it to tbody
  var storeRow = document.createElement('tr');
  tbody.appendChild(storeRow);

  //make the first td the store name
  var storeName = document.createElement('td');
  storeName.textContent = this.location;
  storeRow.appendChild(storeName);

  // make a td for each hour and append it to the trow
  for (var i = 0; i < this.dailySales.length; i++) {
    var hourData = document.createElement('td');
    hourData.textContent = this.dailySales[i];
    storeRow.appendChild(hourData);
  }

}

function resetTable() {
  var salesData = salesTable.firstElementChild;
  while (salesData) {
    salesData.remove();
    salesData = salesTable.firstElementChild;
  }
}



var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);


render();

