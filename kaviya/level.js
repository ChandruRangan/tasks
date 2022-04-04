const prompt= require("prompt-sync")();
const level=prompt("enter your skill level:");
switch(level){
    case '1':
        console.log('low');
        break;
    case '2':
        console.log('medium');
        break;
    case '3':
        console.log('average');
        break;
    case '4':
        console.log('above average');
        break;
    case '5':
        console.log('high');
    default:
        console.log('undefined');
        break;
}