const { subtraction } = require('../subtraction');
const { numberRoman } = require('../../converter/decimalToRoman')

const calculationSubtractionRoman = (values) => {
	const romanNumbers = values;
	
	// Converte a lista de numeros romanos para o padrao: (X - Y = Z)
	const standartDecimalList = romanNumbers.join(" - ")

	let convertedList;
	
	if (subtraction(values) < 0) {
		convertedList = `(${standartDecimalList} = -${numberRoman(subtraction(values) * -1)})`
	} else {
		convertedList = `(${standartDecimalList} = ${numberRoman(subtraction(values))})`
	}

	return convertedList;
}

module.exports = { calculationSubtractionRoman };