let prompt = require('prompt-sync')();
let  email = prompt('enter email : ');


let regex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let valid = email.match(regex);
if (valid){
    console.log("This email is valid :" + email);
}
else{
    console.log("This email is invalid :" + email);

}
    
