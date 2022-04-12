name1 = "riaa".toLowerCase();
name2 = "jia".toLowerCase();
name1 = name1.replace(" ", "");
name2 = name2.replace(" ", "");
for(let i=0; i < name1.length; i++){
    for(let j=0; j < name2.length; j++){
        if(name1[i] == name2[j]){
            name1 = name1.replace(name1[i],"*");
            name2 = name2.replace(name2[j],"*");
            break;
        }
    }
} 
// console.log(name1);
// console.log(name2);

let count = 0;
for(i=0;i<name1.length;i++){
    if(name1[i]!='*'){
        count++;
    }
}
for(i=0;i<name2.length;i++){
    if(name2[i]!='*'){
        count++;
    }};
    let list = ["F", "L", "A", "M", "E", "S"]
    let a=1;
   for(let j=6; j>1; j--)
   {
       let res=((count%j)+a)-1;
       if(res>j)
       {
           res=res%j;
       }
       if(res==0)
       {
           res=list.length;
       }
       list.splice(res-1,1);
       a=res;
   }
if(list=="F")
{
    console.log("Friends");
}
else if(list=="L")
{
    console.log("Love");
}
else if(list=="A")
{
    console.log("Affection");
}
else if(list=="M")
{
    console.log("Marriage");
}
else if(list=="E")
{
    console.log("Enemy");
}
else if(list=="S")
{
    console.log("Sister");
}