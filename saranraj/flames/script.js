let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let btn = document.getElementById("btn");
let display=document.getElementById("display");

function calculate(){
    let flames=["Friend","Love","Affection","Marriage","Enemy","Sister"];
    let name1=n1.value.split("");
    let name2=n2.value.split("");
    let dif1=name1.filter(item=>!name2.includes(item));
    console.log(dif1)
    let dif2=name2.filter(item=>!name1.includes(item));
    console.log(dif2)
    let diff=dif1.length+dif2.length;
    console.log(diff)
     while(flames.length>1){
         
        
          let step= diff%flames.length
          flames.splice(step,1);
        
     }
     display.value=flames[0];
    

}
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    calculate();
})