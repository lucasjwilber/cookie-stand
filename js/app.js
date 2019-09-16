'use strict'

var seattle = {
  hoursOfOperation =[6, 20],
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersPerHour() {
    return Math.ceil(Math.random() * 10);
  }
  cookiesSoldPerHour: customersPerHour() * avgCookiesPerCustomer,
  dailySales =[],
  //dayCalc() fills the above array with a string saying how many cookies were sold per hour, for every hour within hoursOfOperation
  dayCalc() {
    this.dailySales.push(
      for (var i = this.hoursOfOperation[0]; i < this.hoursOfOperation[1]; i++) {
      //TODO: need to make this say Xam instead of just i
      `${i}: ${this.cookiesSoldPerHour}`;
    }
  },
}

var tokyo = {
  hoursOfOperation =[6, 20],
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersPerHour() {
    return Math.ceil(Math.random() * 10);
  }
  cookiesSoldPerHour: customersPerHour() * avgCookiesPerCustomer,
  dailySales =[],
  //dayCalc() fills the above array with a string saying how many cookies were sold per hour, for every hour within hoursOfOperation
  dayCalc() {
    this.dailySales.push(
      for (var i = this.hoursOfOperation[0]; i < this.hoursOfOperation[1]; i++) {
      //TODO: need to make this say Xam instead of just i
      `${i}: ${this.cookiesSoldPerHour}`;
    }
  },
}

var dubai = {
  hoursOfOperation =[6, 20],
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersPerHour() {
    return Math.ceil(Math.random() * 10);
  }
  cookiesSoldPerHour: customersPerHour() * avgCookiesPerCustomer,
  dailySales =[],
  //dayCalc() fills the above array with a string saying how many cookies were sold per hour, for every hour within hoursOfOperation
  dayCalc() {
    this.dailySales.push(
      for (var i = this.hoursOfOperation[0]; i < this.hoursOfOperation[1]; i++) {
      //TODO: need to make this say Xam instead of just i
      `${i}: ${this.cookiesSoldPerHour}`;
    }
  },
}

var paris = {
  hoursOfOperation =[6, 20],
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersPerHour() {
    return Math.ceil(Math.random() * 10);
  }
  cookiesSoldPerHour: customersPerHour() * avgCookiesPerCustomer,
  dailySales =[],
  //dayCalc() fills the above array with a string saying how many cookies were sold per hour, for every hour within hoursOfOperation
  dayCalc() {
    this.dailySales.push(
      for (var i = this.hoursOfOperation[0]; i < this.hoursOfOperation[1]; i++) {
      //TODO: need to make this say Xam instead of just i
      `${i}: ${this.cookiesSoldPerHour}`;
    }
  },
}

var lima = {
  hoursOfOperation =[6, 20],
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersPerHour() {
    return Math.ceil(Math.random() * 10);
  }
  cookiesSoldPerHour: customersPerHour() * avgCookiesPerCustomer,
  dailySales =[],
  //dayCalc() fills the above array with a string saying how many cookies were sold per hour, for every hour within hoursOfOperation
  dayCalc() {
    this.dailySales.push(
      for (var i = this.hoursOfOperation[0]; i < this.hoursOfOperation[1]; i++) {
      //TODO: need to make this say Xam instead of just i
      `${i}: ${this.cookiesSoldPerHour}`;
    }
  },
}