// # Primitive Data Types in JavaScript

// 7 types of primitive data types in JavaScript:
//String, Number, Boolean, Null, Undefined, Symbol, Bigint

const score = 100; // Number
const scoreValue = 100.5; // Number

const isLoggedIn = false; // Boolean
const outsideTemp = null; // Null
let userEmail; // Undefined

const id = Symbol( "123"); // Symbol
const anotherId = Symbol("123"); // Symbol

console.log(id === anotherId);

// const bigNumber = 5655664464454848464n; // BigInt

// Reference Data Types / Non-Primitive Data Types

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array

let myObj = {
    name: "Jihad",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp);
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// **************** Stack and Heap memory in JavaScript ************************

// Stack (Primitive), Heap (Non-Primitive)

let myFacebookname = "JihadHasan" 

let anothername = myFacebookname;
anothername = "JihadHasan123";

console.log(myFacebookname);
console.log(anothername);   //  for primitive data types, a copy of the value is created and stored in a different memory location. So, when we change the value of anothername, it does not affect myFacebookname.



let userOne = {
    email:  "jihadhasan@example.com",
    payoneer: "user@payoneer.com"
}

let userTwo = userOne;

userTwo.email = "Jihad@example.com";

console.log(userOne.email);
console.log(userTwo.email);

// for non-primitive data types, a reference to the original value is created and stored in a different memory location. So, when we change the value of userTwo, it also changes the value of userOne because both variables are referencing the same object in memory.