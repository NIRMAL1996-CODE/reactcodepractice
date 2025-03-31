"use strict";
//declare a variable message of type string and assign it the value "Hello Typescript!".
let message = "Hello Typescript!";
console.log(message);
//concatenation of two strings
let firstName = "Joy";
let secondName = "Deo";
// let result  = firstName +"  "+ secondName;
let result = `${firstName}${secondName}`;
console.log(result);
//find length
let sentenceLength = result.length;
console.log(sentenceLength);
//conversion- uppercase and lowercase
console.log(result.toUpperCase());
console.log(result.toLowerCase());
//extract first 10 character of text
let text = "abcdefghijklmnopqrstuvwxyz";
console.log(text.substring(0, 10));
//create a function to check that the number is even.
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));
//check if divisible by 4 and 8
function divisible(num) {
    return num % 4 === 0 && num % 8 === 0;
}
console.log(divisible(40));
