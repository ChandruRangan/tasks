let prompt = require('prompt-sync')();
let  num = prompt('enter a number : ');
let ip=num;
let r=[];
r=ip.split('');
let result=r[0]**3+r[1]**3+r[2]**3;
if(ip==result){
    console.log(ip+' is a Armstrong Number');
}
else{
    console.log(ip+' is a Not Armstrong Number');
}