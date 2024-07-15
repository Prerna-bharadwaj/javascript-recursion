function gcd(a, b) {
   
    if (b === 0) {
        return a;
    }
   
    return gcd(b, a % b);
}

//let num1 = ;
//let num2 = ;
console.log(gcd(48,18));