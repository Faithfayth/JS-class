console.log("This is another example, my name is Vision, and I am learning JavaScript!");

//Variables : a way to store items in your code for later use. different ways to declare variables.
// Declaring variables: let, const, var
//var is function-scoped and can be re-declared and updated. old fashioned way to declare variables, not recommended for modern JavaScript development.
//let is block-scoped and can be updated but not re-declared. 
//const is block-scoped and cannot be updated or re-declared.

var name = "Vision"; //var-keyword, name-variable, "Vision"-value
console.log(name);
name = "Vision2.0"; //re-assigning the value of the variable name
console.log(name);

let name2 = "Violet"; //let-keyword, name-variable, "Violet"-value
console.log(name2);
name2 = "Violet2.0"; //re-assigning the value of the variable name2 (this is updating)
console.log("We have changed the name", name2);

const country = "Uganda"; //const-keyword, country-variable, "Uganda"-value
console.log(country);
// country = "Kenya"; //This will throw an error because we cannot re-assign a value to a const variable.

//Data types: different types of data that can be stored in variables.
//Primitive data types: string, number, boolean, null, undefined, symbol
//1. String
let greeting = "Hello, World!, how are you?";
console.log(greeting);
console.log(typeof greeting); //typeof operator is used to check the data type of a variable

//2. Number
let x = 10;
let y = "12";
console.log(x);
console.log(typeof x); //number
console.log(y);
console.log(typeof y); //string
//Non-primitive data types: object, array, function

//Comparison operators
//1. equal to
//not equal to
//strict equal to
//strict not equal to 
//greater than
//less than
//greater than or equal to
//less than or equal to 

//Arrays
//[  - empty array]
let fruits = ["apple", "mango", "banana", "sugarcane"];
//["Vision", 25, "Uganda", {place: "home"}, true, null, undefined]

console.log(fruits);
console.log(fruits[2]);

//Mixed array
let mixedArray = ["Vision", 25, "Uganda", {place: "home"}, true, null, undefined]; 
console.log(mixedArray[3]);

//Object
//{}  - empty object
// {
//     name: "Vision",     //name-property/key, Vision-value
//     age: 30,
//     isStudent: false,
//     hobbies: ["running", "eating", "music", "reading"]
// }
let person = {
    name: "John",
    age: 30,
    country: "Uganda",
    isStudent: true,
    hobbies: ["running", "eating", "music", "reading"],
    address: {
        street: "123 Main St",
        city: "Kampala",
        country: "Uganda"
    }
}

console.log(person);
console.log(person.name);
console.log(person["name"]);

//Concatenation 