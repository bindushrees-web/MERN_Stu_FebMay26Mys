// Array Basics
console.log("Array Basics");
//Creating Arrays
let emptyArray = [];
let numArray = [1,2,3,4];
let mixedArray = [42,"hello", true, null, {name:"nisu"},[3,4]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);

//Using constructor
let friuts = new Array("Apple","Mango");
console.log(friuts);
console.log("Is fruits an array?",Array.isArray(friuts));

//Push : Add
friuts.push("Pappaya");
console.log(friuts);

//POP : remove
friuts.pop();
console.log(friuts);

//unshift: adds to beginning
friuts.unshift("orange");
console.log(friuts);

//shift: remove from beginning
friuts.shift("orange");
console.log(friuts);