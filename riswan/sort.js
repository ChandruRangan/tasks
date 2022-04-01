 // sort alphabetic without using inbuilt function

 //1. Write a JavaScript program to sort the characters in a string alphabetically
 
 
 function ris(s)
{
    s=s.split("");
    for(i=0;i<s.length;i++)
    {
        for(j=i+1;j<s.length;j++)
        {
            if(s[i]>s[j])
            {
                temp=s[i];
                s[i]=s[j];
                s[j]=temp;
            }
        }
    }
    return s.join("");
}
console.log(ris());

