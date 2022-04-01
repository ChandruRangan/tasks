const prompt = require('prompt-sync')();
const text = prompt('Enter the string: ');

function sort(text){
    return text.split('').sort('').join('');
}
console.log("The sorted string: ",sort(text));

