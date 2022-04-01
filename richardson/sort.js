function sort(arr) 
{
    arr = arr.split("");
    for (i = 0; i < arr.length; i++) 
    {
        for (j = 0; j < arr.length; j++) 
        {
            if (arr[j] > arr[i]) 
            {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.join("");
}
console.log(sort("richardson"));