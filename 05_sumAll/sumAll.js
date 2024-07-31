const sumAll = function(...args) {
    numbers = args.sort();
    firstNumber = numbers[0];
    lastNumber = numbers[1];  
    if (firstNumber < 0 || lastNumber < 0) return "ERROR"; 
    if (Number.isInteger(firstNumber) && Number.isInteger(lastNumber)){
        let sum = 0;
        while (firstNumber <= lastNumber) {
            sum += firstNumber;
            firstNumber++;
        }
	    return sum;
    } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
