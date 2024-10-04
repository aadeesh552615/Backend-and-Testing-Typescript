"use strict";
//normal functions in typescript
function printHello(a) {
    return a;
}
const greeter = (greet) => {
    return greet("Greet Typescript greeting!");
};
function greet(a) {
    return a;
}
console.log(greeter(greet));
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
// const arr: Array<number> = [1, 2, 3, 4];
// const add = (accum: number, value: number): number => {
//   return accum + value;
// };
// const result: number = arr.reduce(add, 5);
// console.log(result);
// const isEven = (x: number): boolean => {
//   return x % 2 === 0;
// };
// console.log(R.find(isEven, arr));
