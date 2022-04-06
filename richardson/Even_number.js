let prompt = require('prompt-sync')();
let x = prompt('Enter the first number : ');
let y = prompt("Enter a second number : ");
 for (let i=x;i<=y;i++){
     if(i%2==0){
         console.log(i);
     }
 }

 