const { listDecimalNumbers } = require('../../converter/romanToDecimal')
const { subtraction } = require('../subtraction')

const calculationSubtractionDecimal = (values) => {
	const decimalNumbers = listDecimalNumbers(values);
	
	// Converte a lista de numeros decimais para o padrao: (X - Y = Z)
	const standartDecimalList = decimalNumbers.join(" - ")
	const convertedList = `(${standartDecimalList} = ${subtraction(values)})`
	
	return convertedList;
}

module.exports = { calculationSubtractionDecimal };