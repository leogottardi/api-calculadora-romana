const { sum } = require('../sum')
const { numberRoman } = require('../../converter/decimalToRoman')

const calculationSumRoman = (values) => {
	const romanNumbers = values;
	const standartDecimalList = romanNumbers.join(" + ")

	// Converte a lista de numeros decimais para o padrao: (X + Y = Z)
	const convertedList = `(${standartDecimalList} = ${numberRoman(sum(values))})`
	return convertedList;
}

module.exports = { calculationSumRoman };