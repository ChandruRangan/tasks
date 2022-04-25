let show=document.getElementById("display");
let myform=document.getElementById('myform');

function number(a){
    if(show.value=='0'){
        alert('You Pressed Again Zero');
    }
    else{
        display(a);
    }
}

function display(a){
    let tlen=show.value.length;
    if(tlen<10){
        show.value+=a;
    }
    else{
        alert('You Reached maximum Value');
    }
}

function operator(a)
{
    if(a=='-'){
        show.value+=a;
    }
    else if(!show.value==''){
        op=a;
            show.value+=op;
    }
        else{
            alert('First Enter the Numbers');
        }
}

function equals(){
    if(!show.value==""){
    let res=eval(show.value);
    show.value=res;
    }
    else{
        alert('First Enter the Values');
    }
}

function clr(){
    if(!show.value==""){
        myform.reset();
    }
    else{
        alert("The Textbox is Already Empty");
    }
}

function nonzero(){
    if(show.value=='0'){
        alert('You Pressed Again Zero');
        show.value='';
    }
}