// Reference: https://www.mathsisfun.com/roman-numerals.html
const numberRoman = (value, converter) => {

  // Converte o decimal para romano
  let numberRoman = "";
  for (let key in converter) {
    while (value >= converter[key]) {
      numberRoman += key;
      value -= converter[key]
    }
  }

  return numberRoman;
}


module.exports = { numberRoman }