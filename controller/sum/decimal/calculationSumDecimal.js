const { listDecimalNumbers } = require('../../converter/romanToDecimal')
const { sum } = require('../sum')

const calculationSumDecimal = (values) => {
	const decimalNumbers = listDecimalNumbers(values);

	// Converte a lista de numeros decimais para o padrao: (X + Y = Z)
	const standardDecimalList = decimalNumbers.join(" + ")
	const convertedList = `(${standardDecimalList} = ${sum(values)})`

	return convertedList;
}

module.exports = { calculationSumDecimal };