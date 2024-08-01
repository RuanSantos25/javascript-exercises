const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const sum = function(arraySum) {
	let sum = 0;
    arraySum.forEach((item) => {
        sum += item;
    });
    return sum;
};

const multiply = function(arrayMultiply) {
    let multiply = arrayMultiply[0];
    for (let i = 1; i <= arrayMultiply.length - 1; i++) {
        multiply *= arrayMultiply[i];
    }
    return multiply;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
	if (num === 0) return 1;
    return factorial(num - 1) * num;
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
