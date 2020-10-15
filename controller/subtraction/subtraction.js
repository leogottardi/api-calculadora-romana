const { listDecimalNumbers } = require('../converter/romanToDecimal');

const subtraction = (values) => {

  // recebe os numeros convertidos para decimal
  const decimalNumbers = listDecimalNumbers(values);

  // REVER A SUBTRAÇÃO
  let subtraction = decimalNumbers[0] * 2;
  decimalNumbers.forEach(value => {
    subtraction -= value
  });

  return subtraction;
}

module.exports = { subtraction };