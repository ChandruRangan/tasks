const prompt = require('prompt-sync')();
const mark = prompt('Enter the skill level of user: ');
if(mark == 1){
    console.log('The skill of the user is Low')
}else if(mark == 2){
    console.log(' The skill of the user is Mid')
}else if(mark == 3){
    console.log('The skill of the user is Average')
}else if(mark == 4){
    console.log('The skil of the Above average')
}else if(mark == 5){
    console.log('High')
}else{
    console.log('Invalid value')
}