'use strict'

//this is where the all the lists for each shop are created on sales.html
var listsArea = document.getElementById('salesUl');

var seattle = {
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',],
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  dailySales: [],
  dailyTotal: 0,
  dayCalc() {
    //1. for every hour of operation, 
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      //calculate a random number of customers and then using that a number of cookies sold
      var customersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);
      var cookiesSoldPerHour = Math.round(customersPerHour * this.avgCookiesPerCustomer);
      //push the data to the dailySales array
      this.dailySales.push(`${this.hoursOfOperation[i]}: ${cookiesSoldPerHour} cookies`);
      //keep a running total of cookies sold
      this.dailyTotal += cookiesSoldPerHour;
    }
    //then add the total to the end of the dailySales array
    this.dailySales.push(`Total: ${this.dailyTotal} cookies`);
    //create a ul on sales.html
    // var salesList = document.createElement('ul');
    // var li = '';
    // document.getElementById('salesUl').
    // //for each hour of operation, create an li using info from the dailySales array, and append it to the salesList ul
    // for (var i = 0; i < this.hoursOfOperation.length; i++) {
    //   li = document.createElement('li');
    //   li.textContent = this.dailySales[i];
    //   parent.appendChild(li);
    // }
  },
}
console.log("test");

var tokyo = {
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',],
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  customersPerHour() {
    return Math.ceil(Math.random() * 10);
  },
  cookiesSoldPerHour: this.customersPerHour * this.avgCookiesPerCustomer,
  dailySales: [],
  //dayCalc() fills the above array with a string saying how many cookies were sold per hour, for every hour within hoursOfOperation
  dayCalc() {
    //for every hour of operation, push the sales of each hour to dailySales
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      this.dailySales.push(
        `${this.hoursOfOperation[i]}: ${this.cookiesSoldPerHour} cookies`
      );
    }
    //create a list on sales.html with each index of dailySales as a list item:

  },
}

var dubai = {
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',],
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  customersPerHour() {
    return Math.ceil(Math.random() * 10);
  },
  cookiesSoldPerHour: this.customersPerHour * this.avgCookiesPerCustomer,
  dailySales: [],
  //dayCalc() fills the above array with a string saying how many cookies were sold per hour, for every hour within hoursOfOperation
  dayCalc() {
    //for every hour of operation, push the sales of each hour to dailySales
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      this.dailySales.push(
        `${this.hoursOfOperation[i]}: ${this.cookiesSoldPerHour} cookies`
      );
    }
    //create a list on sales.html with each index of dailySales as a list item:

  },
}

var paris = {
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',],
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 2.3,
  customersPerHour() {
    return Math.ceil(Math.random() * 10);
  },
  cookiesSoldPerHour: this.customersPerHour * this.avgCookiesPerCustomer,
  dailySales: [],
  //dayCalc() fills the above array with a string saying how many cookies were sold per hour, for every hour within hoursOfOperation
  dayCalc() {
    //for every hour of operation, push the sales of each hour to dailySales
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      this.dailySales.push(
        `${this.hoursOfOperation[i]}: ${this.cookiesSoldPerHour} cookies`
      );
    }
    //create a list on sales.html with each index of dailySales as a list item:

  },
}

var lima = {
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',],
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerCustomer: 4.6,
  customersPerHour() {
    return Math.ceil(Math.random() * 10);
  },
  cookiesSoldPerHour: this.customersPerHour * this.avgCookiesPerCustomer,
  dailySales: [],
  //dayCalc() fills the above array with a string saying how many cookies were sold per hour, for every hour within hoursOfOperation
  dayCalc() {
    //for every hour of operation, push the sales of each hour to dailySales
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      this.dailySales.push(
        `${this.hoursOfOperation[i]}: ${this.cookiesSoldPerHour} cookies`
      );
    }
    //create a list on sales.html with each index of dailySales as a list item:

  },
}
