function fibonacci(n) {
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }
    let fib = fibonacci(n - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib;
}
console.log(fibonacci(10));
