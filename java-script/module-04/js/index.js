'use strict';

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40
};

function Cashier(name = 'Sales manager', productDatabase = {}) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = 0;

  this.getCostumerMoney = amount => {
    this.customerMoney += amount;
  };

  this.countTotalPriceOrder = order => {
    let sum = 0;
    for (const elem in order) {
      sum += order[elem] * this.productDatabase[elem];
    }
    return sum;
  };

  this.countChange = totalPrice => 
  this.customerMoney > totalPrice ? this.customerMoney - totalPrice : null;       
  

  this.onSuccess = change => {
    console.log(`Спасибо за покупку, ваша сдача ${change}!`);
  };

  this.onError = () => {
    console.log('Очень жаль, вам не хватает денег на покупки');
  };

  this.reset = () => {
    this.customerMoney = 0;
  };
};

const polly = new Cashier('Polly', products);
const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

const totalPrice = polly.countTotalPriceOrder(order);

console.log(totalPrice);

polly.getCostumerMoney(150);

console.log(polly.customerMoney);

const change = polly.countChange(totalPrice);

console.log(change);

if (change !== null) {
  polly.onSuccess(change);
} else {
  polly.onError();
};

polly.reset();

console.log(polly.customerMoney);
