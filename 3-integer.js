function range(x,y){
    if(x>=y-1){
        return[];
    }
    return[x+1].concat(range(x+1,y));
}
console.log(range(2,9));