let prompt = require('prompt-sync')();
let name1 = prompt('Enter your name : ');
let name2 = prompt("Enter your crush name : ");


  let first = name1;
  let sec = name2;

  for(i=0;i<name1.length;i++)
  {
    sec = sec.replace(name1[i],'');

  }

  for(i=0;i<name2.length;i++)
  {
    first = first.replace(name2[i],"");
  }
  
  let final = first+sec;
  let l = final.length;
  let ar = new Array("F","L","A","M","E","S");
  let stp=1;

  for(let x=6; x>1; x--)
    {
    let g=((l%x)+stp)-1; 
    if(g>x)
    {
      g=g%x;
    }
    if(g==0)
    {
      g=ar.length;
    }
    ar.splice(g-1,1);
    stp=g;
                            
    }
    if(ar=="F")
    {
      console.log("Friends");
    }
    else if(ar=="L")
    {
      console.log("Lover");
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
      console.log("Sister and Brother")
    }