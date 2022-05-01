// var even
const prompt= require("prompt-sync")();
const initial=prompt("enter initial number: ");
const final=prompt("enter final number: ");
// function even(){
    for(i=initial;i<=final;i++){
        if(i%2==0){
            console.log(i);
        }
    }
    // return nums;   
// }
// console.log(even());