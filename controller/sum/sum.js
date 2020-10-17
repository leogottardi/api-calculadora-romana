const sum = (values) => {

  // Faz a soma dos números decimais
  let sum = 0;
  values.forEach(value => {
    sum += value
  });

  return sum;
}

module.exports = { sum };