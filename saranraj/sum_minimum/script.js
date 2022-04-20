let arr=[1,3,4,10];
let possible=[];
function calc(a){
    
    
    for(let i=0;i<a.length;i++){
        genpossible(a,a[i]);
        genpossible(a,a[i]+a[i+1]);
        genpossible(a,a[i]+a[i+1]+a[i+2])
        
    }

    console.log(possible);
}
//calc(arr);
function genpossible(a,b){
    for(let i=0;i<a.length;i++){
        let sum=b;
        if(sum==a[i]){continue}
        else if(a[i]){continue}
        else{
            sum+=a[i];
        possible.push(sum)
        }
    }
}
for(let i=0;i<10;i++){
    if(arr[i]){
        console.log("true");
    }
    else{console.log("false")}
}