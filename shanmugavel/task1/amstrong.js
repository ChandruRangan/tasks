let x='153';
function armstrong(a){
    if(a==Math.pow(a[0],3)+Math.pow(a[1],3)+Math.pow(a[2],3)){
        console.log("it is Armstrong number");
    }
    else{
        console.log("it is not Armstrong number");
    }
}
armstrong(x);