// This is numeric array sorted or not program


// 3. Write a JavaScript program to check if a numeric array is sorted or not.

var prompt = require('prompt-sync')();

let ip  = prompt('Enter the Number: ');
let sortvalue=ip.split("").sort().join("");
let fin=(sortvalue==ip)?console.log("this is sorted"):console.log("this is not sorted");




