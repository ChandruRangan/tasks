// n=[3,0,17,1,75,8,5]
n=[0,3,5,8,17,75]
// n = [3, 1, 213, 12, 4, 0]     
// n = [0, 1, 3, 4, 12, 213]  
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