/*
  EXERCÍCIO 06 — ARROW FUNCTIONS
*/

// TODO:
// Reescreva as funções abaixo utilizando arrow functions.

const somar = (a, b) => a + b
console.log(somar(10,2))

const subtrair = (a, b) => a - b
console.log(subtrair(10,2))

const multiplicar = (a, b) => a * b

console.log(multiplicar(10,2))

const dividir = (a, b) => b === 0 ? "Não pode dividir por 0" : a / b
console.log(dividir(10, 2))

const operacoes = {
  somar: somar,
  subtrair: subtrair,
  multiplicar: multiplicar,
  dividir:dividir
}

const calcular = (a, b, operacao) => !(operacao in operacoes) ? "Operação não existe" : operacoes[operacao](a, b)

console.log(calcular(100, 2,""))
// TODO:
// Identifique quais funções podem utilizar retorno implícito.

// TODO:
// Crie uma arrow function calcular() mantendo o comportamento do exercício anterior.
