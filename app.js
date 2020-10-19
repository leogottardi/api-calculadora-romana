const express = require('express');
const app = express();

const { calculationSumDecimal } = require('./controller/sum/decimal/calculationSumDecimal')
const { calculationSumRoman } = require('./controller/sum/roman/calculationSumRoman')

const { calculationSubtractionDecimal } = require('./controller/subtraction/decimal/calculationSubtractionDecimal');
const { calculationSubtractionRoman } = require('./controller/subtraction/roman/calculationSubtractionRoman');

const { listDecimalNumbers } = require('./controller/converter/romanToDecimal')

app.use(express.json());

app.post('/sum', (req, res) => {
  const { values } = req.body;
  const decimalNumbers = listDecimalNumbers(values);

  let resultSumDecimal = calculationSumDecimal(decimalNumbers)
  let resultSumRoman = calculationSumRoman(decimalNumbers)

  res.send([{ resultSumDecimal }, { resultSumRoman }]);
})


app.post('/subtraction', (req, res) => {
  const { values } = req.body;
  const decimalNumbers = listDecimalNumbers(values);

  let resultSubtractionDecimal = calculationSubtractionDecimal(decimalNumbers)
  let resultSubtractionRoman = calculationSubtractionRoman(decimalNumbers)

  res.send([{ resultSubtractionDecimal }, { resultSubtractionRoman }]);
})


app.listen(3333, () =>
  console.log("Api Online")
)

