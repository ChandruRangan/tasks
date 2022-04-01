//This program using inbuilt function

//1. Write a JavaScript program to sort the characters in a string alphabetically

function str(string)
{
    return string.split("").sort().join("");
}
console.log("Muthu:",str("muthu"));
console.log("Riswan:",str("riswan"));
