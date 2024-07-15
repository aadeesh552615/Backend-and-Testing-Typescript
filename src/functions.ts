//normal functions in typescript
function printHello(a: string): string {
  return a;
}
type inputs = (n: number, m: number) => number;
const product: inputs = (n, m) => {
  return n * m;
};

// console.log(product(5, 5));

//callback and type functions in ts
type GreetFunction = (a: string) => string;
function greeter(greet: GreetFunction): string {
  return greet("Hello Typescript!");
}
function printToConsole(a: string): string {
  return a;
}

// console.log(greeter(printToConsole));

//assigning default parameter
// type multiply = (m: number, n: number, l?: number) => number;
// const getArea: multiply = (m, n, l = 20) => {
//   return m * n * l;
// };

// console.log(getArea(25, 26));

//rest operator
type unknowArguments = (...m: number[]) => number[];
const display: unknowArguments = (...m) => {
  return m;
};

console.log(display(25, 26, 76, 9, 32, 55, 12, 13, 11, 18));

//functions with objects
type Product = {
  name: string;
  price: number;
};

type getData = (product: Product) => void;
const displayData: getData = (product) => {
  console.log(product);
};

const product1: Product = {
  name: "macbook",
  price: 999,
};
displayData(product1);

//reduce function
const arr: Array<number> = [1, 2, 3, 4];
const add = (accum: number, value: number): number => {
  return accum + value;
};
const result: number = arr.reduce(add, 5);
console.log(result);

const isEven = (x: number): boolean => {
  return x % 2 === 0;
};

console.log(R.find(isEven, arr));
