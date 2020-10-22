const listDecimalNumbers = (values, converter) => {

	// Converte os numeros romanos para decimal
	let listDecimalNumbers = [];
	values.forEach(value => {
		listDecimalNumbers.push(converter[value])
	});

	return listDecimalNumbers;
}

module.exports = { listDecimalNumbers };  