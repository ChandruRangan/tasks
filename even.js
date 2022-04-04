const prompt = require('prompt-sync')();
const start = prompt("Enter the first value in range: ");
const end = prompt("Enter the last value in the range: ")
    for(i = start;i <= end;i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }

