/*
  EXERCÍCIO 05 — CALCULADORA UTILIZANDO FUNÇÕES
*/

function somar(a, b) {
  return a + b
}

function subtrair(a, b) {
  return a - b
}

function multiplicar(a, b) {
  return a * b
}

function dividir(a, b) {
  if (b === 0 )
    return
} 

return a / b

function calcular(a, b, operacao) {

  if (operacao === 'soma') {
    return somar(a,b)
  }else if (operacao === 'subtrair') {
    return subtrair(a,b)
  }else if (operacao === 'dividir') {
    return dividir(a,b)
  }else if (operacao === 'multiplicar') {
    return multiplicar(a,b)
  } else{
    return "erro! Operação inválida"
  }

}

// TODO:
// Faça alguns testes com calcular().
