let c='371';
function isarm(a){
    if(a==Math.pow(a[0],3)+Math.pow(a[1],3)+Math.pow(a[2],3)){
        console.log("it is Armstrong number");
    }
    else{
        console.log("it is not Armstrong number");
    }
}
 isarm(c);