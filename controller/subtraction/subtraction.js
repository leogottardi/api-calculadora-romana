// O primeiro valor da lista sempre será positivo
const subtraction = (values) => {
  // Insere o primeiro valor da lista de decimais na variavel
  let subtraction = values[0];

  // Subtrai o segundo valor pelo primeiro assim por diante
  for (let i = 1; i < values.length; i++) {
    subtraction -= values[i]
  }

  return subtraction;
}

module.exports = { subtraction };