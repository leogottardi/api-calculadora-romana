// Reference: https://www.mathsisfun.com/roman-numerals.html
const numberRoman = (value) => {

  const converterDecimal = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  
  // Converte o decimal para romano
  let numberRoman = "";
  for (let key in converterDecimal) {
    while (value >= converterDecimal[key]) {
      numberRoman += key;
      value -= converterDecimal[key]
    }
  }

  return numberRoman;
}


module.exports = { numberRoman }