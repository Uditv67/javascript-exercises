const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  for(let arr in array) {
    sum += array[arr];
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for(let arr in array) {
    product *= array[arr];
  }
  return product;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  let factorial = 1;
	while(num > 1){
    factorial *= num;
    num--;
  } 
  return factorial;
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
