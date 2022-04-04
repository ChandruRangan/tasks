var prompt = require('prompt-sync')();

let s=prompt("Enter the first value");
let a=prompt("Enter the second value");

for(let i=s;i<=a;i++)
    if(i%2==0)
    {
        console.log(i)
    }