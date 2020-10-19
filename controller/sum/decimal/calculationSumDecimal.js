const { sum } = require('../sum')

const calculationSumDecimal = (values) => {
	// Converte a lista de numeros romanos para lista de numeros decimais

	// Converte a lista de numeros decimais para o padrao: (X + Y = Z)
	const standardDecimalList = values.join(" + ")
	const convertedList = `(${standardDecimalList} = ${sum(values)})`

	return convertedList;
}

module.exports = { calculationSumDecimal };