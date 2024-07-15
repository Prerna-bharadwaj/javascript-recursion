function exponent(base,exp){
    if(exp===0){
        return 1;
    }
    if(exp>0){
        return base*exponent(base, exp-1);
    }
    if(exp<0){    //negative exponent
     return 1/exponent(base, -exp);
    }
}
console.log(exponent(4,2));