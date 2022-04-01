// This program is give value low to high

// 5. Program to identify the skill of the user (1-5) If input as 1, its output should Low, 2 --> Mid, 3 ---> Average, 4 ----> Above Average, 5  --> High

var prompt = require('prompt-sync')();

var x = prompt('Enter the Number' +'');

switch (x) {
  case '1':
    console.log("low");
    break;
  case '2':
    console.log("Mid");
    break;
  case '3':
    console.log("Average");
    break;
  case '4':
    console.log("Above average");
    break;
  case '5':
    console.log("High");
    break;
  default:
    console.log ("No value found");
} 