var prompt = require('prompt-sync')();
var n = prompt('What is the skill : ');
switch(n){
    case '1':
    console.log('the skill of the user Low');
    break;
    case '2':
    console.log('Midium');
    break;
    case '3':
    console.log('Average');
    break;
    case '4':
    console.log('Above Average');
    break;
    case '5':
    console.log('high');
    break;
    default:
    console.log('Invalid value');
}