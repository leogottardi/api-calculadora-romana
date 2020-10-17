const { subtraction } = require('../subtraction');
const { numberRoman } = require('../../converter/decimalToRoman')
const { listDecimalNumbers } = require('../../converter/romanToDecimal');

const calculationSubtractionRoman = (values) => {
	const romanNumbers = values;

	// Converte a lista de numeros romanos para lista de numeros decimais
	const decimalNumbers = listDecimalNumbers(values);

	// Converte a lista de numeros romanos para o padrao: (X - Y = Z)
	const standardDecimalList = romanNumbers.join(" - ")

	let convertedList;

	if (subtraction(decimalNumbers) < 0) {
		convertedList = `(${standardDecimalList} = -${numberRoman(subtraction(decimalNumbers) * -1)})`
	} else {
		convertedList = `(${standardDecimalList} = ${numberRoman(subtraction(decimalNumbers))})`
	}

	return convertedList;
}

module.exports = { calculationSubtractionRoman };