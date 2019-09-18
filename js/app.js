'use strict'

//this is where the all the lists for each shop are created on sales.html
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
//multiply maxCustomersPerHour to this:
var controlCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
var salesTable = document.getElementById('salesData');
var tbody = document.createElement('tbody');
var evensCounter = -1;




function Store(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  //add this store to the master stores list array
  Store.stores.push(this);
  //upon creation, add this store to the sales data table
  this.addToTable();
  this.addStaffingRow();
  //with every new store created, evensCounter switches from negative to positive
  evensCounter *= -1;
}
//add an array to keep track of our stores
Store.stores = [];





//calculates the number of cookies sold each hour of the day
Store.prototype.dayCalc = function () {

  //first create/reset these:
  this.dailySales = [];
  this.dailyTotal = 0;
  this.staffReq = [];

  //1. for every hour of operation, 
  for (var i = 0; i < hoursOfOperation.length; i++) {
    //calculate a random number of customers... 
    //then multiply it by the corresponding percentage in the control curve
    var customersPerHour = (Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour)) * controlCurve[i];
    //use this to set the staffing requirement for this hour:
    this.staffReq.push(Math.max(Math.ceil(customersPerHour / 20), 2));
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
  topLeftBlock.innerHTML = '<img src="https://github.com/codefellows/201d52-lab06/raw/master/assets/salmon.png" alt="salmon logo" class="tinySalmon">';

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

  //if this is an even row give it class 'even'
  if (evensCounter === -1) {
    storeRow.classList.add('even');
  }

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





function buildTable() {
  resetTable();
  salesTable.appendChild(tbody);
  tableHeader();
  tableFooter();
}





//form stuff:
var storeForm = document.getElementById('storeAddForm');
storeForm.addEventListener('submit', makeStore);
var latestStore;

function makeStore(event) {
  event.preventDefault();
  var location = event.target.locationField.value;
  var minCust = event.target.minCustField.value;
  var maxCust = event.target.maxCustField.value;
  var avgCookies = event.target.avgCookiesField.value;

  //construct a store using the form data as arguments
  new Store(location, minCust, maxCust, avgCookies);

  //clear the form after submission
  event.target.locationField.value = null;
  event.target.minCustField.value = null;
  event.target.maxCustField.value = null;
  event.target.avgCookiesField.value = null;
}





//staffing table:

function buildStaffingHeader() {

  //make the header row:
  var staffingTable = document.getElementById('staffingTable');
  var staffingHeader = document.createElement('thead');
  staffingTable.appendChild(staffingHeader);
  var staffingHeaderRow = document.createElement('tr');
  staffingHeader.appendChild(staffingHeaderRow);
  //make a td for each time, first one empty:
  var emptyTd = document.createElement('td')
  emptyTd.innerHTML = '<img src="https://github.com/codefellows/201d52-lab06/raw/master/assets/salmon.png" alt="salmon logo" class="tinySalmon">';
  staffingHeaderRow.appendChild(emptyTd)
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var hourTd = document.createElement('td')
    hourTd.textContent = hoursOfOperation[i];
    staffingHeaderRow.appendChild(hourTd);
  }
}





Store.prototype.addStaffingRow = function () {

  //make a row with a store name td first
  var storeRow = document.createElement('tr');
  staffingTable.appendChild(storeRow);
  var locTd = document.createElement('td');
  locTd.textContent = this.location;
  storeRow.appendChild(locTd);
  //make even rows opaque
  if (evensCounter === -1) {
    storeRow.classList.add('even');
  }

  //then make a td for each index of staffReq
  for (var i = 0; i < this.staffReq.length; i++) {
    var staffReqTd = document.createElement('td');
    staffReqTd.textContent = this.staffReq[i];
    storeRow.appendChild(staffReqTd);
  }

}





var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);
buildTable();
buildStaffingHeader();