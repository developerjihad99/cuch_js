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