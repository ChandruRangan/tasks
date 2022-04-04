let prompt = require('prompt-sync')();
let  title = prompt('enter title : ');

function Titlecase(title){
    let ip = title.toLowerCase().split(" ");
    for(let i=0; i<ip.length;i++){
        ip[i] = ip[i][0].toUpperCase()+ip[i].slice(1);

    }
    console.log(ip.join(" "));

}
Titlecase(title);