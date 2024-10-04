"use strict";
let flat;
function decide(flat) {
    if (typeof flat === "number") {
        console.log("number");
    }
    else {
        console.log("string");
    }
}
flat = "12";
decide(flat);
