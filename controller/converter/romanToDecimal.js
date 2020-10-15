const listDecimalNumbers = (values) => {
	
	const converterRoman = { 
		M: 1000,
		D: 500,
		C: 100,
		L: 50, 
		X: 10, 
		V: 5, 
		I: 1 
	}
	
	// Converte os numeros romanos para decimal
	let listDecimalNumbers = [];
	values.forEach(value => {
		listDecimalNumbers.push(converterRoman[value])
	});

	return listDecimalNumbers;
}

module.exports = { listDecimalNumbers };  