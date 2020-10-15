const { listDecimalNumbers } = require('../../converter/romanToDecimal')
const { sum } = require('../sum')

const calculationSumDecimal = (values) => {
	const decimalNumbers = listDecimalNumbers(values);

	// Converte a lista de numeros decimais para o padrao: (X + Y = Z)
	const standartDecimalList = decimalNumbers.join(" + ")
	const convertedList = `(${standartDecimalList} = ${sum(values)})`

	return convertedList;
}

module.exports = { calculationSumDecimal };