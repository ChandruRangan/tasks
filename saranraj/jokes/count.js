let k=12326000055745000000;
let l=k.toString();
console.log(l)
let count=0;
for(let i=k.length;i>0;i--){
    if(k[i]=='0'){
        count=count+1;
    }
    else{
        break;
    }
}
console.log(count);