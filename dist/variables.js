"use strict";
//string
let greeting = "hello world!";
console.log(greeting);
//number
let userId = 36;
console.log(userId.toExponential(0));
//union type
let surName;
surName = "Bali";
surName = 23;
console.log(surName);
let user1 = "aadeesh";
console.log(user1);
//arrays
const arr1 = [1, 2, 3, 4];
console.log(arr1);
const arr2 = ["ab", "cd", "ef"];
console.log(arr2);
//tuples
let arr3 = [false, 12, "hey"];
//enum
var Human;
(function (Human) {
    Human["name"] = "Aadeesh";
    Human[Human["age"] = 21] = "age";
})(Human || (Human = {}));
;
console.log(Human.age);
