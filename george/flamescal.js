let name1 = surya;
let name2 = jothika;
let flames = "flames";
for(i=0;i<name1.length;i++){
    for(j=0;j<name2.length;j++){
        if(name1.charAt(i)==name2.charAt(j)){
            name1= replaceAt(name1,i,'*');
            name2= replaceAt(name2,j,'*');
        }
    }
}
let countletter = 0;
for(i=0;i<name1.length;i++){
    if(name1(i)!='*'){
    countletter++;
    }
}
for(j=0;name2.length;j++){
    if(name2(j)!='*'){
        countletter++
    }
}
  if(countLetters>1){
    let flames="FLAMES";
    c=0;
    l=1;
    for(i=0;flames.length!=1;i++){
      if(l==countLetters)
      {
        if(c>=flames.length)
        {
          c=0;
        }
        flames=replaceAt(flames,c,'');
        l=1;
      }  
      if(c>=flames.length)
      {
        c=0;
      }        
      l++;
      c++;
    }
    
    switch(flames){
      case 'F':
        flames="Friend";
        break;
      case 'L':
        flames="Love";
        break;
      case 'A':
        flames="Affection";
        break;
      case 'M':
        flames="Marriage";
        break;
      case 'E':
        flames="Enemies";
        break;
      case 'S':
        flames="Sibling";
        break;
    }
  }
  if(countLetters==1){
    flames="Sibling";
  }
  if(countLetters==0){
    flames="Its Same Name";
  }

