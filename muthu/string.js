let str ="yest erday";

sorting(str);
function sorting(a){
    let st = a.trim(); 
      console.log(st);
    let st1=st.split('');
    console.log(st1);
    let sorted = st1.sort();
    console.log(sorted);
     for (let i=0;i<sorted.length;i++){ 
         if(sorted[i]==' '){

             sorted.splice(i,1)
             i=i-1;
            console.log(sorted)
         }
     }
     console.log(sorted);
}