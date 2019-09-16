'use strict'


var seattle = {
  hoursOfOperation =['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',], minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersPerHour() {
    return Math.ceil(Math.random() * 10);
  }
  cookiesSoldPerHour: customersPerHour() * avgCookiesPerCustomer,
  dailySales =[],
  //dayCalc() fills the above array with a string saying how many cookies were sold per hour, for every hour within hoursOfOperation
  dayCalc() {
    //for every hour of operation, push the sales calc to dailySales
    for (var i = this.hoursOfOperation[0]; i < this.hoursOfOperation[1]; i++) {
      this.dailySales.push(
        `${this.hoursOfOperation[i]}: ${this.cookiesSoldPerHour} cookies`;
      );
    }
  },
}

var tokyo = {
  hoursOfOperation =['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',], minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  customersPerHour() {
    return Math.ceil(Math.random() * 10);
  }
  cookiesSoldPerHour: customersPerHour() * avgCookiesPerCustomer,
  dailySales =[],
  //dayCalc() fills the above array with a string saying how many cookies were sold per hour, for every hour within hoursOfOperation
  dayCalc() {
    //for every hour of operation, push the sales calc to dailySales
    for (var i = this.hoursOfOperation[0]; i < this.hoursOfOperation[1]; i++) {
      this.dailySales.push(
        `${this.hoursOfOperation[i]}: ${this.cookiesSoldPerHour} cookies`;
      );
    }
  },
}

var dubai = {
  hoursOfOperation =['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',], minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  customersPerHour() {
    return Math.ceil(Math.random() * 10);
  }
  cookiesSoldPerHour: customersPerHour() * avgCookiesPerCustomer,
  dailySales =[],
  //dayCalc() fills the above array with a string saying how many cookies were sold per hour, for every hour within hoursOfOperation
  dayCalc() {
    //for every hour of operation, push the sales calc to dailySales
    for (var i = this.hoursOfOperation[0]; i < this.hoursOfOperation[1]; i++) {
      this.dailySales.push(
        `${this.hoursOfOperation[i]}: ${this.cookiesSoldPerHour} cookies`;
      );
    }
  },
}

var paris = {
  hoursOfOperation =['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',], minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 2.3,
  customersPerHour() {
    return Math.ceil(Math.random() * 10);
  }
  cookiesSoldPerHour: customersPerHour() * avgCookiesPerCustomer,
  dailySales =[],
  //dayCalc() fills the above array with a string saying how many cookies were sold per hour, for every hour within hoursOfOperation
  dayCalc() {
    //for every hour of operation, push the sales calc to dailySales
    for (var i = this.hoursOfOperation[0]; i < this.hoursOfOperation[1]; i++) {
      this.dailySales.push(
        `${this.hoursOfOperation[i]}: ${this.cookiesSoldPerHour} cookies`;
      );
    }
  },
}

var lima = {
  hoursOfOperation =['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',], minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerCustomer: 4.6,
  customersPerHour() {
    return Math.ceil(Math.random() * 10);
  }
  cookiesSoldPerHour: customersPerHour() * avgCookiesPerCustomer,
  dailySales =[],
  //dayCalc() fills the above array with a string saying how many cookies were sold per hour, for every hour within hoursOfOperation
  dayCalc() {
    //for every hour of operation, push the sales calc to dailySales
    for (var i = this.hoursOfOperation[0]; i < this.hoursOfOperation[1]; i++) {
      this.dailySales.push(
        `${this.hoursOfOperation[i]}: ${this.cookiesSoldPerHour} cookies`;
      );
    }
  },
}
