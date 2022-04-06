var prompt=require('prompt-sync')();
let ris=[];
ris=prompt('Enter the array Value').split(" ").sort();
let val=prompt('Enter the Value');
let first=0;
let last=ris.length-1;

function faz(ris,val)
{
    while(first<=last)
    {
    middle=Math.floor(first+last/2);
    if(ris[middle]==val)
    {
        return val+ 'is Here';
    }
    else if(ris[middle]<=val)
    {
        first=middle+1;
    }
    else
    {
        last=middle-1;
    }
    return val+ 'is not exsist'; 
  }
}
final=faz(ris,val)
console.log(final)

            