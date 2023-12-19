// Arrays
//==========Array is a data structure in Javascript

/* const myArrays = [];

//add elements to an array
myArrays[0] = "Manny";
myArrays[1] = 1001;
myArrays[2] = false; */

/* // refer to an array
console.log(myArrays);

//lenght property
console.log(myArrays.length);

//last element in a array
console.log(myArrays[myArrays.length - 1]);

console.log(myArrays[1]);
 */

/* // to add to an array
myArrays.push("school");
console.log(myArrays);

//removing from an array (last-item)
myArrays.pop();
console.log(myArrays);

//adding to an array (first-item)
myArrays.unshift("Mlo's");
console.log(myArrays);

//removing form an array (first-item)
myArrays.shift();
console.log(myArrays);

console.log(myArrays[1]); */

/* myArrays.splice(1, 1, 43);

// delete myArrays[1];
console.log(myArrays); */

const myArrays = ["A", "B", "C", "D", "E", "F"];

/* const newArray = myArrays.slice(2, 5);
console.log(newArray); */ // cuts from 2 to 5

/* myArrays.reverse();
console.log(myArrays); */ //reverses the order of an array

/* const newString = myArrays.join();
console.log(typeof newString);
console.log(newString); */ //creates new string and separates the element of an array with comma
/* 
const myArraysA = ["A", "B", "C"];
const myArraysB = ["D", "E", "F"];

// const newArray = myArraysB.concat(myArraysA);

//or

const newArray = [...myArraysA, ...myArraysB];

console.log(newArray); */ // joins two array to become one... wedding

/* if (newArray == myArrays) {
  console.log("They are the same");
} else {
  console.log("nahhhhhhhh");
} */

//nesting arrays
//nest arrays in a nested array

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis ball"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "t-sweat pants", "hoodies"];
