var prompt = require('prompt-sync')();
var  n= prompt('enter number : ');

var sortedip=n.split('').sort().join('');
var check=(n==sortedip)?console.log('The number are Sorted'):console.log('The number are not Sorted');