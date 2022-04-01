function binary(a,element){
    let b= a.sort();
    let mid =parseInt(b.length/2);
     if(b[mid]===element)
     {
         console.log("element is present");
     }
     else if(b[mid]>element){
         binary(b.slice(0,mid),element);
     }
     else if(b[mid]<element){
        
         binary(b.slice(mid+1),element);
     }
     else{
         console.log("element is not presented");
     }

}

let c =[1,2,3,4,8,10,11,15];
binary(c,15);