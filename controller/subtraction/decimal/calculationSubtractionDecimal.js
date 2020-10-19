const { subtraction } = require('../subtraction')

const calculationSubtractionDecimal = (values) => {

	// Converte a lista de numeros decimais para o padrao: (X - Y = Z)
	const standardDecimalList = values.join(" - ")
	const convertedList = `(${standardDecimalList} = ${subtraction(values)})`
	return convertedList;
}

module.exports = { calculationSubtractionDecimal };