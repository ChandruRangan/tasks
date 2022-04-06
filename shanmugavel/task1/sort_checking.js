let numbers=[0.1,2,7,65,87];
console.log(numbers[0]);


let count=1;

for(let i=0;i<numbers.length-1;i++){
    if(numbers[i]<numbers[i+1]){
        
        count++;
    }
    else{
        console.log(" not sorted");
        break;
    }
}
console.log(count);
if(count==numbers.length){
    console.log("array sorted");
}

