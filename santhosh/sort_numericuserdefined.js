 const prompt = require('prompt-sync')();
 const n = prompt("Enter the values: ");

for(i=0;i<n.length-1;i++){
    if(n[i]<n[i+1]){
        console.log("The given numeric array is sorted")
        break
    }
    else{
        console.log("The given numeric array is not sorted")
        break
    }
}
console.log(n)