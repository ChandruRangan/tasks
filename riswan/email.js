var prompt = require('prompt-sync')();
let ris=prompt("Enter the email");

let email=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let final=ris.match(email);

if(final)
{
    console.log("This is valid email",ris);
}
else
{
    console.log("This is not vaild email")
}