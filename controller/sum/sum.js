const { listDecimalNumbers } = require('../converter/romanToDecimal');
const sum = (values) => {

  // recebe os numeros convertidos para decimal
  const decimalNumbers = listDecimalNumbers(values);

  
  // Faz a soma dos números decimais
  let sum = 0;
  decimalNumbers.forEach(value => {
    sum += value
  });
  return sum;
}

module.exports = { sum };