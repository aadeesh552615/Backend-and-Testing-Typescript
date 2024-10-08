//string
let greeting: string = "hello world!";
console.log(greeting);

//number
let userId: number = 36;
console.log(userId.toExponential(0));

//union type
let surName: string | number;
surName = "Bali";
surName = 23;
console.log(surName);

//creating custom types
type Username = string;
let user1: Username = "aadeesh";
console.log(user1);

//arrays
const arr1: Array<number> = [1, 2, 3, 4];
console.log(arr1);

const arr2: Array<string> = ["ab", "cd", "ef"];
console.log(arr2);

//tuples
let arr3: [boolean, number, string] = [false, 12, "hey"];

//enum
enum Human{
    name = "Aadeesh",
    age = 21
};
console.log(Human.age);