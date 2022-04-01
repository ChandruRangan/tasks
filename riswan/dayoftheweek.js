// Day of the week

// 4. Program to find the birthday ( day of the week ) for the given input date time with Time Zone,


var prompt = require('prompt-sync')();

let muth  = prompt('Enter the Number: ');
const ris=new Date(muth);
var day=ris.getDay();
console.log(day);

switch (day) {
    case 0:
      console.log("sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
        console.log("Saturday");
        break;
    default:
      console.log ("No value found");
  } 
  

