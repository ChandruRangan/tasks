var prompt = require('prompt-sync')();

let a=prompt("Enter the value");

a.split("");

final=a[0]**3+a[1]**3+a[2]**3;
if(a==final)
{
    console.log("This is armstrong number",final);
}
else
{
    console.log("This is not armstrong number");
}