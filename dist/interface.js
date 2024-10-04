"use strict";
function setMithai(mithai) {
    mithai.isTooSweet = true;
}
function getMithai(mithai) {
    return [mithai.name, mithai.price, mithai.isTooSweet];
}
let favouriteMithai = {
    name: "Ladoo",
    price: 200,
    isTooSweet: false,
};
console.log(favouriteMithai.isTooSweet);
setMithai(favouriteMithai);
console.log(getMithai(favouriteMithai)[0]);
