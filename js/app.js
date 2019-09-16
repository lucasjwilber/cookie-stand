'use strict'

//this is where the all the lists for each shop are created on sales.html
var listsArea = document.getElementById('salesUl');


var seattle = {
  location: 'Seattle',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',],
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  dailySales: [],
  dailyTotal: 0,
  dayCalc() {
    //1. for every hour of operation, 
    for (var i = 0; i < this.hoursOfOperation.length; i++) {

      //calculate a random number of customers... 
      var customersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);

      //...and then using that a number of cookies sold
      var cookiesSoldPerHour = Math.round(customersPerHour * this.avgCookiesPerCustomer);

      //then push the data to the dailySales array
      this.dailySales.push(`${this.hoursOfOperation[i]}: ${cookiesSoldPerHour} cookies`);

      //update the running total of cookies sold
      this.dailyTotal += cookiesSoldPerHour;
    }

    //then add the total to the end of the dailySales array
    this.dailySales.push(`Total: ${this.dailyTotal} cookies`);
  },
  siteUpdate() {

    //create a ul on sales.html for this store and name it
    var salesList = document.createElement('ul');
    salesList.textContent = `${this.location}`;

    //for each hour of operation, create an li using info from the dailySales array, and append it to the salesList ul
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.dailySales[i];
      salesList.appendChild(li);
    }

    //then append the whole list to the site's master list
    listsArea.appendChild(salesList);
  }
}



var tokyo = {
  location: 'Tokyo',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',],
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  dailySales: [],
  dailyTotal: 0,
  dayCalc() {
    //1. for every hour of operation, 
    for (var i = 0; i < this.hoursOfOperation.length; i++) {

      //calculate a random number of customers... 
      var customersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);

      //...and then using that a number of cookies sold
      var cookiesSoldPerHour = Math.round(customersPerHour * this.avgCookiesPerCustomer);

      //then push the data to the dailySales array
      this.dailySales.push(`${this.hoursOfOperation[i]}: ${cookiesSoldPerHour} cookies`);

      //update the running total of cookies sold
      this.dailyTotal += cookiesSoldPerHour;
    }

    //then add the total to the end of the dailySales array
    this.dailySales.push(`Total: ${this.dailyTotal} cookies`);
  },
  siteUpdate() {

    //create a ul on sales.html for this store and name it
    var salesList = document.createElement('ul');
    salesList.textContent = `${this.location}`;

    //for each hour of operation, create an li using info from the dailySales array, and append it to the salesList ul
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.dailySales[i];
      salesList.appendChild(li);
    }

    //then append the whole list to the site's master list
    listsArea.appendChild(salesList);
  }
}



var dubai = {
  location: 'Dubai',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',],
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  dailySales: [],
  dailyTotal: 0,
  dayCalc() {
    //1. for every hour of operation, 
    for (var i = 0; i < this.hoursOfOperation.length; i++) {

      //calculate a random number of customers... 
      var customersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);

      //...and then using that a number of cookies sold
      var cookiesSoldPerHour = Math.round(customersPerHour * this.avgCookiesPerCustomer);

      //then push the data to the dailySales array
      this.dailySales.push(`${this.hoursOfOperation[i]}: ${cookiesSoldPerHour} cookies`);

      //update the running total of cookies sold
      this.dailyTotal += cookiesSoldPerHour;
    }

    //then add the total to the end of the dailySales array
    this.dailySales.push(`Total: ${this.dailyTotal} cookies`);
  },
  siteUpdate() {

    //create a ul on sales.html for this store and name it
    var salesList = document.createElement('ul');
    salesList.textContent = `${this.location}`;

    //for each hour of operation, create an li using info from the dailySales array, and append it to the salesList ul
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.dailySales[i];
      salesList.appendChild(li);
    }

    //then append the whole list to the site's master list
    listsArea.appendChild(salesList);
  }
}



var paris = {
  location: 'Paris',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',],
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 2.3,
  dailySales: [],
  dailyTotal: 0,
  dayCalc() {
    //1. for every hour of operation, 
    for (var i = 0; i < this.hoursOfOperation.length; i++) {

      //calculate a random number of customers... 
      var customersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);

      //...and then using that a number of cookies sold
      var cookiesSoldPerHour = Math.round(customersPerHour * this.avgCookiesPerCustomer);

      //then push the data to the dailySales array
      this.dailySales.push(`${this.hoursOfOperation[i]}: ${cookiesSoldPerHour} cookies`);

      //update the running total of cookies sold
      this.dailyTotal += cookiesSoldPerHour;
    }

    //then add the total to the end of the dailySales array
    this.dailySales.push(`Total: ${this.dailyTotal} cookies`);
  },
  siteUpdate() {

    //create a ul on sales.html for this store and name it
    var salesList = document.createElement('ul');
    salesList.textContent = `${this.location}`;

    //for each hour of operation, create an li using info from the dailySales array, and append it to the salesList ul
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.dailySales[i];
      salesList.appendChild(li);
    }

    //then append the whole list to the site's master list
    listsArea.appendChild(salesList);
  }
}



var lima = {
  location: 'Lima',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',],
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerCustomer: 4.6,
  dailySales: [],
  dailyTotal: 0,
  dayCalc() {
    //1. for every hour of operation, 
    for (var i = 0; i < this.hoursOfOperation.length; i++) {

      //calculate a random number of customers... 
      var customersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);

      //...and then using that a number of cookies sold
      var cookiesSoldPerHour = Math.round(customersPerHour * this.avgCookiesPerCustomer);

      //then push the data to the dailySales array
      this.dailySales.push(`${this.hoursOfOperation[i]}: ${cookiesSoldPerHour} cookies`);

      //update the running total of cookies sold
      this.dailyTotal += cookiesSoldPerHour;
    }

    //then add the total to the end of the dailySales array
    this.dailySales.push(`Total: ${this.dailyTotal} cookies`);
  },
  siteUpdate() {

    //create a ul on sales.html for this store and name it
    var salesList = document.createElement('ul');
    salesList.textContent = `${this.location}`;

    //for each hour of operation, create an li using info from the dailySales array, and append it to the salesList ul
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.dailySales[i];
      salesList.appendChild(li);
    }

    //then append the whole list to the site's master list
    listsArea.appendChild(salesList);
  }
}
