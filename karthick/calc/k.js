let show=document.getElementById('display');
let a=[];
let b;
let op;
let myform=document.getElementById('myform');
function check(){
    b=show.value;
    if(b.includes('+')){
      op='+';
    }
    else if(b.includes('-')){
        op='-';
    }
    else if(b.includes('*')){
        op='*';
    }
    else if(b.includes('/')){
        op='*';
    }
    else{
        alert('Invalid');
        show.value='';
    }
}
function ado(){
let regex=/[0-9]/;
    if(!show.value.match(regex)){
        show.value='';
    }
}

function valid(){
    if(!show.value==''){
    let res;
    check();
    switch(op){

        case '+':
            a=show.value.split("+");
            res=parseInt(a[0])+parseInt(a[1]);
            show.value=res;
            console.log(res);
            break;

        case '-':
            a=show.value.split("-");
            res=parseInt(a[0])-parseInt(a[1]);
            show.value=res;
            console.log(res);
            break;
        
        case '*':
            a=show.value.split("*");
            res=parseInt(a[0])*parseInt(a[1]);
            show.value=res;
            console.log(res);
            break;

        case '/':
            a=show.value.split("/");
            res=parseInt(a[0])/parseInt(a[1]);
            show.value=res;
            console.log(res);
            break;

        default:
            alert('Invalid Input');
            show.value='';
        }
    }else{
        alert('The fields are empty');
    }
}
    
function clr(){
    if(show.value==''){
        alert('The fields are already empty');
    }else{

        myform.reset();
    }
}