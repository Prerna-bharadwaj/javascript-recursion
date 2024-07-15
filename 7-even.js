function isEven(number) {
    if (number === 0) {
        return true;
    }
    if (number === 1) {
        return false;
    }
    return isEven(Math.abs(number - 2));
}


console.log(isEven(4)); 
console.log(isEven(7)); 
console.log(isEven(-6)); 
