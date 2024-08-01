const convertToCelsius = function(tempFahrenheit) {
	const tempCelsius = Number(((tempFahrenheit - 32) / (9 / 5)).toFixed(1));  // .toFixed() method returns a string, so we need to convert to number with the Number() function.
	return tempCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
	const tempFahrenheit = Number(((tempCelsius * 9 / 5 + 32)).toFixed(1));  // .toFixed() method returns a string, so we need to convert to number with the Number() function.
	return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
