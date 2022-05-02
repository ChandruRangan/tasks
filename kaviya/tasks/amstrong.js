var sum=0;
var n='54748';
let temp=n;
while(temp > 0){
    remainder=temp%10;
    // console.log(typeof remainder)
    sum +=remainder**n.length;
    temp=parseInt(temp/10);
}
if(sum==n){
    console.log('amstrong number');
}
else{
    console.log('not amstrong number');
}