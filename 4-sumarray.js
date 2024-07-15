function sumarray(arr){
    if(arr.length===0){
        return 0;
    }
    return arr[0]+sumarray(arr.slice(1));
}
console.log(sumarray[1,2,3,4,5,6]);