const listDecimalNumbers = (values) => {

	const converterRoman = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
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