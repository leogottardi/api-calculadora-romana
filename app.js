const express = require('express');
const app = express();

const { calculationSumDecimal } = require('./controller/sum/decimal/calculationSumDecimal')
const { calculationSumRoman } = require('./controller/sum/roman/calculationSumRoman')

const { calculationSubtractionDecimal } = require('./controller/subtraction/decimal/calculationSubtractionDecimal');
const { calculationSubtractionRoman } = require('./controller/subtraction/roman/calculationSubtractionRoman');

app.use(express.json());

app.post('/sum', (req, res) => {
  const { values } = req.body;

  let resultSumDecimal = calculationSumDecimal(values)
  let resultSumRoman = calculationSumRoman(values)

  res.send([{ resultSumDecimal }, { resultSumRoman }]);
})


app.post('/subtraction', (req, res) => {
  const { values } = req.body;

  let resultSubtractionDecimal = calculationSubtractionDecimal(values)
  let resultSubtractionRoman = calculationSubtractionRoman(values)

  res.send([{ resultSubtractionDecimal }, { resultSubtractionRoman }]);
})


app.listen(3333, () =>
  console.log("Api Online")
)

