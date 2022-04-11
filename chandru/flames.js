 function result(){
let a=document.querySelector("#f").value;
let b=document.querySelector("#l").value;   
console.log(a);
console.log(b);
let d=document.getElementById("c").innerHTML=a+"&"+"<br>"+b;
for(let i=0;i<a.length;i++){
    for(let i=0;i<b.length;i++)
   {
   let e=a.charAt(i);
   let f=b.charAt(i); 
   console.log(e);  
    console.log(f);
if(e==f)
{

}
    }
}
 }
