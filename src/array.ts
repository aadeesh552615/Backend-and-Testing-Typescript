let arr: number[] = [1, 2, 3, 4];
let arr2: Array<number | string> = ["aadeesh", "bali", "jammu"];

let tableOf12 = arr.map((item) => {
  return item * 12;
});

arr2.forEach((item) => {
  console.log(item.slice(0, 3));
});

console.log(tableOf12);
