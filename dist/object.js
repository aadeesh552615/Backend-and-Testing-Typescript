"use strict";
let male = {
    name: "aadeesh",
    age: 21,
    gender: "male",
    isHuman: true,
};
let female = {
    name: "aparna",
    age: 21,
    gender: "female",
    isHuman: true,
};
let others = {
    name: "abhay",
    age: 21,
    gender: "others",
    isHuman: true,
};
console.log("1", Object.entries(female));
const myObj = {
    name: "Aadeesh",
    email: "aadeesh@gmail.com",
};
const getData = (key) => {
    return myObj[key];
};
Object.keys(myObj).forEach((key) => {
    const data = getData(key);
    console.log("2", data);
});
const stu1 = {
    name: "Aparna",
    age: "23",
};
const getStuData = (key) => {
    return stu1[key];
};
Object.keys(stu1).forEach((key) => {
    console.log("3", getStuData(key));
});
//utility classes pre built functions 
