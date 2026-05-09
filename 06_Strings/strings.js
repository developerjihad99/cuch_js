const name = "Jihad"; 
const repoCount = 15;

// console.log(name + repoCount + " Value"); // avoid using + operator for string concatenation, it can lead to unexpected results when combining strings and numbers.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // always use backticks for string interpolation


const gameName = new String('MD-Jihad-Hasan'); // String object

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('H'));


// const newString = gameName.substring(0, 6);
// console.log(newString);

// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

// const newStringOne = "  JihadHasan   ";
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://www.jihadhasan.com/jihad%20hasan";

console.log(url.replace('%20', '_'));

console.log(url.includes('Salman'));


console.log(gameName.split('-'));



// know all the string methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#methods
// also check the console for more string methods and their outputs using __proto__