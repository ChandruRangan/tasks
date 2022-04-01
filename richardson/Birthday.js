let prompt = require('prompt-sync')();
let  ip= prompt('enter date : ');
let d = new Date(ip);
let t = d.getDay();
switch(t){
    case 0:
    console.log("it's Sunday");
    break;

    case 1:
    console.log("it's Monday");
    break;

    case 2:
    console.log("it's Tuesday");
    break;

    case 3:
    console.log("it's Wednesday");
    break;

    case 4:
    console.log("it's Thursday");
    break;

    case 5:
    console.log("it's Friday");
    break;

    case 6:
    console.log("it's Saturday");
    break;

    default:
        console.log("it's invalid");
}

