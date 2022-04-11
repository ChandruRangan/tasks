var prompt=require('prompt-sync')();

var boy=prompt("Enter the Boy name");
var girl=prompt("Enter the Girl name");


var one=boy;
var two=girl;


for(let i=0;i<boy.length;i++)
{
   two=two.replace(boy[i],'');
}

for(let i=0;i<girl.length;i++)
{
   one=one.replace(girl[i],"");
}

let last=one+two;

let last_length=last.length;

let ar = new Array("F","L","A","M","E","S");
let faz=1;
   for(let j=6; j>1; j--)
   {
       let ris=((last_length%j)+faz)-1;
       if(ris>j)
       {
           ris=ris%j;
       }
       if(ris==0)
       {
           ris=ar.length;
       }
       ar.splice(ris-1,1);
       faz=ris;
   }

if(ar=="F")
{
    console.log("Friends");
}
else if(ar=="L")
{
    console.log("Love");
}
else if(ar=="A")
{
    console.log("Affection");
}
else if(ar=="M")
{
    console.log("Marriage");
}
else if(ar=="E")
{
    console.log("Enemy");
}
else if(ar=="S")
{
    console.log("Sister");
}
	
	
	
