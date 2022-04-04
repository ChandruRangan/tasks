let a=[];
let prompt = require('prompt-sync')();
 a=prompt('Enter the array Value').split(" ").sort();
 let b=prompt('Enter the Value');
 let f=0;
 let l=a.length-1;
 function bs(a,b){
     while(f<=l){
         let mid=Math.floor((f+l)/2);
         if(a[mid]==b){
             return b+' is here';
         }
         else if(a[mid]<b){
             f=mid+1;
         }
         else{
             l=mid-1;
         }
     }
     return b+" is Not exists";
 }
let ans=bs(a,b);
console.log(ans);

