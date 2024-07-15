"use strict";
//normal functions in typescript
function printHello(a) {
    return a;
}
const product = (n, m) => {
    return n * m;
};
function greeter(greet) {
    return greet("Hello Typescript!");
}
function printToConsole(a) {
    return a;
}
const display = (...m) => {
    return m;
};
console.log(display(25, 26, 76, 9, 32, 55, 12, 13, 11, 18));
const displayData = (product) => {
    console.log(product);
};
const product1 = {
    name: "macbook",
    price: 999,
};
displayData(product1);
//reduce function
const arr = [1, 2, 3, 4];
const add = (accum, value) => {
    return accum + value;
};
const result = arr.reduce(add, 5);
console.log(result);
const isEven = (x) => {
    return x % 2 === 0;
};
console.log(R.find(isEven, arr));
