const { listDecimalNumbers } = require('../../converter/romanToDecimal')
const { subtraction } = require('../subtraction')

const calculationSubtractionDecimal = (values) => {
	const decimalNumbers = listDecimalNumbers(values);
	const standartDecimalList = decimalNumbers.join(" - ")

	// Converte a lista de numeros decimais para o padrao: (X - Y = Z)
	const convertedList = `(${standartDecimalList} = ${subtraction(values)})`
	return convertedList;
}

module.exports = { calculationSubtractionDecimal };