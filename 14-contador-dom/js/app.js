/*
  EXERCÍCIO 14 — CONTADOR INTERATIVO
*/

// TODO:
// Selecione os elementos do DOM:
// - valor do contador;
const counterValue = document.querySelector('#counter-value');
// - botão incrementar;
const incrementButton = document.querySelector('#increment-button');
// - botão decrementar;
const decrementButton = document.querySelector('#decrement-button');
// - botão resetar;
const resetButton = document.querySelector('#reset-button');
// - área de mensagem.
const counterMessage = document.querySelector('#counter-message');
// TODO:
// Crie a variável que representa o valor atual do contador.
let contador = 0;
// TODO:
// Defina um valor mínimo e máximo.
const valorMinimo = 0;
const valorMaximo = 10;

// TODO:
// Crie uma função render() que atualize o número exibido.
function render() {
  counterValue.textContent = contador;

  // TODO:
  // Mostre uma mensagem quando o limite mínimo ou máximo for atingido. Usei ternário
  counterMessage.textContent = 
    contador === valorMaximo 
      ? "Limite maximo atingido!"
        : "";
}
// TODO:
// Ao incrementar, impeça que o valor ultrapasse o máximo.
function incrementar() {
  if(contador < valorMaximo) {
    contador++
  }
  render();
}
// TODO:
// Ao decrementar, impeça que o valor fique abaixo do mínimo.
function decrementar() {
  if(contador > valorMinimo) {
    contador--
  }

  render();
}
// TODO:
// Ao resetar, retorne ao valor inicial.
function resetar() {
  contador = 0;
    render()
  }

// TODO:
// Adicione os event listeners aos três botões.
incrementButton.addEventListener("click", incrementar);
decrementButton.addEventListener("click", decrementar);
resetButton.addEventListener("click", resetar);
render();