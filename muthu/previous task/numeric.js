let arr =[9,6,3,7,2,9,8];
let arr1= [1,2,3,4,5,8,69];

function isSort(a){
    let count =0;
   
    for (let i=0; i<a.length;i++){
        if(a[i]>a[i+1]){
            console.log(a,"is not sorted array");
            break;
        }
        else{
            count++;
        }
    }
    if(count==a.length){
        console.log(a, "is sorted array");
    }
}

isSort(arr);

isSort(arr1);