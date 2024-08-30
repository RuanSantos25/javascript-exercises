// Method 1:
// const add = function(num1, num2) {
//     return num1 + num2;
// };

// Method 2 (using array method):
const add = function (...numbers) {
    return numbers.reduce((total, currentNumber) => (total + currentNumber));
};


// Method 1:
// const subtract = function(num1, num2) {
//     return num1 - num2;
// };

// Method 2 (using array method):
const subtract = function(...numbers) {
	return numbers.reduce((total, currentNumber) => (total - currentNumber));
};

// Method 1:
// const sum = function(arraySum) {
// 	let sum = 0;
//     arraySum.forEach((item) => {
//         sum += item;
//     });
//     return sum;
// };

// Method 2 (using array method):
const sum = function(array) {
    return array.reduce((total, currentNumber) => total + currentNumber, 0);
};


// Method 1:
// const multiply = function(arrayMultiply) {
//     let multiply = arrayMultiply[0];
//     for (let i = 1; i <= arrayMultiply.length - 1; i++) {
//         multiply *= arrayMultiply[i];
//     }
//     return multiply;
// };

// Method 2 (using array method):
const multiply = function(array) {
    return array.reduce((total, currentNumber) => total * currentNumber);
};


// Method 1:
// const power = function(base, exponent) {
// 	return Math.pow(base, exponent);
// };

// Method 2 (using array method):
const power = function(...numbers) {
    if (numbers.length === 2) {
        return numbers.reduce((previousNum, currentNumber) => previousNum ** currentNumber);
    } else return null;
};


// Method 1 recursive:
// const factorial = function(num) {
// 	if (num === 0) return 1;
//     return factorial(num - 1) * num;
// };

// Method 2 iterative:
const factorial = function(num) {
    if (num < 0) return null;
    if (num === 0 || num === 1) return 1;
    let fat = num;
    for (let i = num - 1; i > 1; i--) {
        fat *= i;  // 5*4=20, 20x3=60, 60x2=120 
    }
    return fat;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
