const { listDecimalNumbers } = require('../../converter/romanToDecimal')
const { sum } = require('../sum')

const calculationSumDecimal = (values) => {

	// Converte a lista de numeros romanos para lista de numeros decimais
	const decimalNumbers = listDecimalNumbers(values);

	// Converte a lista de numeros decimais para o padrao: (X + Y = Z)
	const standardDecimalList = decimalNumbers.join(" + ")
	const convertedList = `(${standardDecimalList} = ${sum(decimalNumbers)})`

	return convertedList;
}

module.exports = { calculationSumDecimal };