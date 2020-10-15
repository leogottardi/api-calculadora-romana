const { sum } = require('../sum')
const { numberRoman } = require('../../converter/decimalToRoman')

const calculationSumRoman = (values) => {
	const romanNumbers = values;
	
	// Converte a lista de numeros romanos para o padrao: (X + Y = Z)
	const standartDecimalList = romanNumbers.join(" + ")
	const convertedList = `(${standartDecimalList} = ${numberRoman(sum(values))})`
	
	return convertedList;
}

module.exports = { calculationSumRoman };