let addtodobutton=document.getElementById('addtodo');
let todocon=document.getElementById('todocontain');
let entrybox=document.getElementById('entry');
addtodobutton.addEventListener('click',function()
{
    let para=document.createElement('p');
    para.innerText=entrybox.value;
    todocon.appendChild(para);
    entrybox.value="";
    let a=document.createElement('a');
    a.textContent='x';
    a.className="remove";
    para.appendChild('a');
});