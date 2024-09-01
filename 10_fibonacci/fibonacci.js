// Iterative Method
// const fibonacci = function(number) {
//     number = Number(number);
//     if (number < 0) return "OOPS";
//     if (number === 1) return 1;
//     let fib = 0;
//     let f1 = 0;
//     let f2 = 1;
//     for (let i = 0; i < number - 1; i++) {
//         fib = f1 + f2;
//         f1 = f2;
//         f2 = fib;
//     }
//     return fib;
// };

// Recursive Method (memoized Fibonacci)
// const memo = {}
// const fibonacci = function(n) {
//     n = Number(n);
//     if (n < 0) return "OOPS";
//     if (n <= 1) return n;
//     else if (memo[n]) return memory[n];
//     else {
//         const result = fibonacci(n - 1) + fibonacci(n - 2);
//         memo[n] = result;
//         return result;
//     }
// }

// Recursive Method (slower)
const fibonacci = function(n) {
    n = Number(n);
    if (n < 0) return "OOPS";
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Do not edit below this line
module.exports = fibonacci;
