'use strict'

//this is where the all the lists for each shop are created on sales.html
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

//multiply maxCustomersPerHour to this:
var controlCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];




//store constructor function
function Store(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  //add this store to the master stores list array
  Store.stores.push(this);
}
//add an array to keep track of our stores
Store.stores = [];





//calculates the number of cookies sold each hour of the day
Store.prototype.dayCalc = function () {

  //first reset dailySales and dailyTotal incase this was called after resetTable()
  this.dailySales = [];
  this.dailyTotal = 0;

  //1. for every hour of operation, 
  for (var i = 0; i < hoursOfOperation.length; i++) {
    //calculate a random number of customers... 
    //then multiply it by the corresponding percentage in the control curve
    var customersPerHour = (Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour)) * controlCurve[i];
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





//these are global variables so that our addToTable and render functions can both use them:
//may be able to put these into our subconstructor funcs
var tbody = document.createElement('tbody');
var salesTable = document.getElementById('salesData');

// //WIP: still not working correctly but doesn't break anything
function resetTable() {
  var salesData = salesTable.firstElementChild;
  while (salesData) {
    salesData.remove();
    salesData = salesTable.firstElementChild;
  }
}





function tableHeader() {
  //create a table header and a row for it, append them
  var tableHeader = document.createElement('thead');
  salesTable.appendChild(tableHeader);
  var tableHeaderRow = document.createElement('tr');
  tableHeader.appendChild(tableHeaderRow);

  //add a blank td for the top left area
  var topLeftBlock = document.createElement('td');
  tableHeaderRow.appendChild(topLeftBlock);
  topLeftBlock.innerHTML = '<img src="https://github.com/codefellows/201d52-lab06/raw/master/assets/salmon.png" alt="salmon logo" id="tinySalmon">';

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
}




Store.prototype.addToTable = function () {
  this.dailySales = [];
  this.dailyTotal = 0;
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





function tableBody() {
  salesTable.appendChild(tbody);
  //run .addToTable() on each store
  for (var i = 0; i < Store.stores.length; i++) {
    Store.stores[i].addToTable();
  }
}





function tableFooter() {

  //create the footer row element and the first td for it
  var footerEl = document.createElement('tfoot');
  salesTable.appendChild(footerEl);
  var hourlyTotalsRow = document.createElement('tr');
  footerEl.appendChild(hourlyTotalsRow);
  var footerTd = document.createElement('td');
  footerTd.textContent = 'Totals:';
  hourlyTotalsRow.appendChild(footerTd);

  //this is for the total td at the end
  var total = 0;

  //for each hour make a column
  for (var i = 0; i < hoursOfOperation.length; i++) {

    var hourlySum = document.createElement('td');
    hourlyTotalsRow.appendChild(hourlySum);
    var sum = 0;

    //for each column get the total, stored in sum
    for (var j = 0; j < Store.stores.length; j++) {
      sum += Store.stores[j].dailySales[i];
      hourlySum.textContent = sum;
    }

    //for every column, add the sum to our total
    total += sum;
  }

  var totalTd = document.createElement('td');
  hourlyTotalsRow.appendChild(totalTd);
  //total of totals:
  totalTd.textContent = total;
}



//run our subconstructor functions in order to build the table
function buildTable() {
  resetTable();
  tableHeader();
  tableBody();
  tableFooter();
}

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);


buildTable();

