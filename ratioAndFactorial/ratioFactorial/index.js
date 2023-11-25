const ratio = require("../ratio/index");
const factorial = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num) => {
  return {
    ratio: ratio(num1, num2),
    factorial: factorial(num),
  };
};
console.log(ratioAndFactorial(10, 5, 3));
module.exports = ratioAndFactorial;
