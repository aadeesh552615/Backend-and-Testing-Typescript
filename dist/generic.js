"use strict";
const me = {
    name: "Aadeesh",
    age: "23",
};
const me2 = {
    name2: "bali",
    age2: "23",
};
/////////////////////////////////////////////////////////////////////////
const displayDataGeneric = (n, m) => {
    return { n, m };
};
const genericData = displayDataGeneric(me, me2);
console.log(genericData);
/////////////////////////////////////////////////////////////////////////
const getName = (arr, property, value) => {
    return arr.filter((item) => {
        return item[property] === value;
    });
};
let array = [
    { name: "aadeesh", age: "23" },
    { name: "aparna", age: "23" },
    { name: "bali", age: "23" },
    { name: "pandita", age: "23" },
];
const result = getName(array, "name", "bali");
console.log(result);
