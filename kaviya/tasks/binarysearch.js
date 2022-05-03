function binary(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
        return "The value is found " + arr[mid];
    }

    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return "The value is not found";
}
const array = [2,8,9,11,12,13];
let sort = array.sort(function (a,b) {return a-b});
let result = binary(sort, 11);
console.log(result);
