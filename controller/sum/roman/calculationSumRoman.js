const { sum } = require('../sum')
const { listDecimalNumbers } = require('../../converter/romanToDecimal');
const { numberRoman } = require('../../converter/decimalToRoman')

const calculationSumRoman = (values) => {

	// Converte a lista de numeros romanos para lista de numeros decimais

	const romanNumbers = values;

	// Converte a lista de numeros romanos para o padrao: (X + Y = Z)
	const standardDecimalList = romanNumbers.join(" + ")
	const convertedList = `(${standardDecimalList} = ${numberRoman(sum(values))})`

	return convertedList;
}

module.exports = { calculationSumRoman };