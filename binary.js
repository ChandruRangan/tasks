function binary(arr, x){
    let first = arr.length-1;
    let last = 0;
    let middle = 0;
    while (last <= first){
        middle = Math.floor((first+last)/2);
        if (arr[middle] === x){
            return arr[middle];
        }else if (x > arr[middle]){
            last = middle + 1;
        }else {
            first = middle - 1;
        }
    }return "There is no such value";
}
const array = [1,2,3,4,5,6,7,8,9,10];
let sort = array.sort(function (a, b) {return a-b});
let result = binary(sort,5);
console.log(`Value is founded ${result}`);