const { listDecimalNumbers } = require('../../converter/romanToDecimal')
const { subtraction } = require('../subtraction')

const calculationSubtractionDecimal = (values) => {
	const decimalNumbers = listDecimalNumbers(values);
	const standardDecimalList = decimalNumbers.join(" - ")

	// Converte a lista de numeros decimais para o padrao: (X - Y = Z)
	const convertedList = `(${standardDecimalList} = ${subtraction(values)})`
	return convertedList;
}

module.exports = { calculationSubtractionDecimal };