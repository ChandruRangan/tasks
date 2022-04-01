const prompt = require('prompt-sync')();
const string = prompt("Enter any string: ");
function sort(string){
    string = string.split('');
    for(i=0;i < string.length; i++){
        for(j=0; j < string.length; j++){
            if(string[j] > string[i]){
                temp = string[i];
                string[i] = string[j];
                string[j] = temp;
            }
        }
    }
    return string.join('');
}
console.log("The sorted string: ",sort(string));
