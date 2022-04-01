var prompt = require('prompt-sync')();
var  n= prompt('Enter number : ');
var sortedip=n.split('').sort().join('');
if(n == sortedip){
    console.log("The number are sorted");
}else{
    console.log("The number are not sorted")
}