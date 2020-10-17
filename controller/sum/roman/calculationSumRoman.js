const { sum } = require('../sum')
const { listDecimalNumbers } = require('../../converter/romanToDecimal');
const { numberRoman } = require('../../converter/decimalToRoman')

const calculationSumRoman = (values) => {

	// Converte a lista de numeros romanos para lista de numeros decimais
	const decimalNumbers = listDecimalNumbers(values);

	const romanNumbers = values;

	// Converte a lista de numeros romanos para o padrao: (X + Y = Z)
	const standardDecimalList = romanNumbers.join(" + ")
	const convertedList = `(${standardDecimalList} = ${numberRoman(sum(decimalNumbers))})`

	return convertedList;
}

module.exports = { calculationSumRoman };