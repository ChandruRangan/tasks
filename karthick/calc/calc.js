let show=document.getElementById("display");
let num1=0;
let num2=0;
let op="";
let res;
let myform=document.getElementById('myform');

function number(a){
    if(op=="")
    {
        num1=num1*10+a;
        display(num1);
    }
    else{
        num2=num2*10+a;
        display(num2);
    }
}

function display(a){
    let tlen=show.value.length;
    if(tlen<10){
        show.value=a;
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
    switch(op){
        case '+': {
            res = num1 + num2;
            /* num1=res;
            num2 = 0; */
            display(res);
            break
        }
        case '-':{
            res = num1 - num2;
            /* num1=res;
            num2 = 0; */
            display(res);
            break
        }
        case '*':{
            res = num1 * num2;
            /* num1=res;
            num2 = 0; */
            display(res);
            break
        }
        case '/':{
            if (num1==0 && num2==0)
            {
                show.value='Indeterminate form';
                break;
            }
            res = num1 / num2;
           /*  num1=res;
            num2 = 0; */
            display(res);
            break
        }
    }
    }
    else{
        alert('First Enter the Values');
    }
}

function clr(){
    if(!show.value==""){
        res = 0;
        num1 =0;
        op="";
        num2=0;
        myform.reset();
    }
    else{
        alert("The Textbox is Already Empty");
    }
}