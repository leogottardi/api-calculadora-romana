const listDecimalNumbers = (values, converterList) => {

	// Converte os numeros romanos para decimal
	let listDecimalNumbers = [];
	values.forEach(value => {
		listDecimalNumbers.push(converterList[value])
	});

	return listDecimalNumbers;
}

module.exports = { listDecimalNumbers };  