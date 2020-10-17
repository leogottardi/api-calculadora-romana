const { listDecimalNumbers } = require('../../converter/romanToDecimal')
const { subtraction } = require('../subtraction')

const calculationSubtractionDecimal = (values) => {

	// Converte a lista de numeros romanos para lista de numeros decimais
	const decimalNumbers = listDecimalNumbers(values);

	// Converte a lista de numeros decimais para o padrao: (X - Y = Z)
	const standardDecimalList = decimalNumbers.join(" - ")
	const convertedList = `(${standardDecimalList} = ${subtraction(decimalNumbers)})`
	return convertedList;
}

module.exports = { calculationSubtractionDecimal };