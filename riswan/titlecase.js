var prompt = require('prompt-sync')();

let t=prompt("Enter the string");

function titleCase(title)
    {
        var sen= title.toLowerCase().split(" ");
        for(var i = 0; i< sen.length; i++)
    {
        sen[i] = sen[i][0].toUpperCase() + sen.slice(1);
    }
        console.log(sen.join(" "));
    }
        titleCase(t);