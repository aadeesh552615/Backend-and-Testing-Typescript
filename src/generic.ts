type Person = {
  name: string;
  age: string;
};

interface Person2 {
  name2: string;
  age2: string;
}

const me: Person = {
  name: "Aadeesh",
  age: "23",
};
const me2: Person2 = {
  name2: "bali",
  age2: "23",
};

/////////////////////////////////////////////////////////////////////////
const displayDataGeneric = <T, U>(n: T, m: U): { n: T; m: U } => {
  return { n, m };
};
const genericData = displayDataGeneric<Person, Person2>(me, me2);
console.log(genericData);

/////////////////////////////////////////////////////////////////////////
const getName = <T, key extends keyof T>(
  arr: T[],
  property: key,
  value: T[key]
): T[] => {
  return arr.filter((item) => {
    return item[property] === value;
  });
};
let array: Array<Person> = [
  { name: "aadeesh", age: "23" },
  { name: "aparna", age: "23" },
  { name: "bali", age: "23" },
  { name: "pandita", age: "23" },
];
const result = getName(array, "name", "bali");
console.log(result);
