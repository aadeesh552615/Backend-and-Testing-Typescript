interface human {
  isHuman: boolean;
}

interface person extends human {
  name: string;
  age: number;
  gender?: string;
}

let male: person = {
  name: "aadeesh",
  age: 21,
  gender: "male",
  isHuman: true,
};

let female: person = {
  name: "aparna",
  age: 21,
  gender: "female",
  isHuman: true,
};

let others: person = {
  name: "abhay",
  age: 21,
  gender: "others",
  isHuman: true,
};

console.log("1", Object.entries(female));

//Key Indexing
interface Person {
  [key: string]: string;
}

const myObj: Person = {
  name: "Aadeesh",
  email: "aadeesh@gmail.com",
};

const getData = (key: string): string => {
  return myObj[key];
};

Object.keys(myObj).forEach((key) => {
  const data = getData(key);
  console.log("2", data);
});

//using key of notation
interface Student {
  name: string;
  age: string;
}

const stu1: Student = {
  name: "Aparna",
  age: "23",
};

const getStuData = (key: keyof Student): string => {
  return stu1[key];
};

Object.keys(stu1).forEach((key) => {
  console.log("3", getStuData(key as keyof Student));
});

//utility classes pre built functions 