let str ="i went to the tour yesterday";

sorting(str);
function sorting(a){
    let st = a.trim(); // to remove empty spaces at the start and end
     // console.log(st);
    let st1=st.split('');//to split the string and store into the array
   // console.log(st1);
    let sorted = st1.sort();// sorting the alphabets
  //  console.log(sorted);
     for (let i=0;i<sorted.length;i++){  // to remove empty spaces in the array
         if(sorted[i]==' '){

             sorted.splice(i,1)
             i=i-1;
            // console.log(i)
            // console.log(sorted)
         }
     }
     console.log(sorted);
}