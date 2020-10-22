// Reference: https://www.mathsisfun.com/roman-numerals.html
const numberRoman = (value, converterList) => {

  // Converte o decimal para romano
  let numberRoman = "";
  for (let key in converterList) {
    while (value >= converterList[key]) {
      numberRoman += key;
      value -= converterList[key]
    }
  }

  return numberRoman;
}


module.exports = { numberRoman }