type User = {
  name: string;
  age: number;
  email: string;
  userName: string;
};

let user: User = {
  name: "Aadeesh",
  age: 22,
  email: "test@test.com",
  userName: "test",
};

console.log(user.name);

type greet = (a: string) => string;
const sayHello: greet = function (a) {
  return "Hello" + " " + a;
};

console.log(sayHello("Typescript language"));
