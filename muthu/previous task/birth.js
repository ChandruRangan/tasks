
let inp_date= document.getElementById("date");
let inp_time= document.getElementById("time");
let display=document.getElementById("display");
 
function get(){
    
    let datetime= inp_date.value.toString() +' '+inp_time.value.toString(); 
    const birthday= new Date(datetime); 
    document.getElementById("display").innerText=birthday.getDay();
    let day = birthday.getDay(); 
    console.log(day);
    
    switch(day){
        case (0) :{
              display.innerText='Sunday';
              break;
        }
        case (1) :{
             display.innerText ="Monday";
             break;
        }
        case (2) :{
            display.innerText="Tuesday";
            break;
        }
        case (3):{
            display.innerText="Wednesday";
            break;
        }
        case (4): {
            display.innerText="Thursday";
            break;
        }
        case (5) :{
            display.innerText="Friday";
            break;
        }
        case (6) :{
            display.innerText="Saturday";
            break;
        }
    }

    
}