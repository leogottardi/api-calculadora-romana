const { subtraction } = require('../subtraction');
const { numberRoman } = require('../../converter/decimalToRoman')

const calculationSubtractionRoman = (values) => {
	const romanNumbers = values;
	const standartDecimalList = romanNumbers.join(" - ")

	// Converte a lista de numeros decimais para o padrao: (X - Y = Z)
	let convertedList;
	if (subtraction(values) < 0) {
		convertedList = `(${standartDecimalList} = -${numberRoman(subtraction(values) * -1)})`
	} else {
		convertedList = `(${standartDecimalList} = ${numberRoman(subtraction(values))})`
	}

	return convertedList;
}

module.exports = { calculationSubtractionRoman };