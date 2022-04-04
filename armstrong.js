const prompt = require("prompt-sync")();
const num = prompt("Enter a positive integer: ");
const lenofnum = num.length;
let sum = 0;
let temp = num;
while (temp > 0) {
    let val = temp % 10;
    sum += val ** lenofnum;
    temp = parseInt(temp / 10); 
}
if (sum == num) {
    console.log(`${num} is an Armstrong number`);
}
else {
    console.log(`${num} is not an Armstrong number.`);
}