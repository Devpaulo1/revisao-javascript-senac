/*
  EXERCÍCIO 12 — DESTRUCTURING E SPREAD
*/

const aluno = {
  nome: "Marina",
  idade: 22,
  curso: "Desenvolvimento Web",
  notas: [8, 7.0, 9.0],
  situacao: "Em análise",
};

// TODO:
// Extraia nome, curso e notas utilizando destructuring.
const {nome, idade, notas} = aluno;
const {notas: [nota1, nota2, nota3]} = aluno
console.log(notas)

// TODO:
// Calcule a média das notas.
const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;


// TODO:
// Crie um NOVO objeto chamado alunoAtualizado usando spread.
const novoAtualizado = {

  ...aluno,
  media: media,
  situacao: media>=6?'Aprovado':'Reprovado'
}

console.log('OBJETO ANTERIOR')
console.log(JSON.stringify(aluno, null, 2))

console.log('OBJETo PÓS EDIÇãO')
console.log(JSON.stringify(novoAtualizado, null, 2))

// alunoAtualizado deve:
// - manter os dados anteriores;
// - adicionar a propriedade media;
// - alterar a situacao.

// IMPORTANTE:
// Não modifique o objeto aluno diretamente.

// TODO:
// Exiba os dois objetos para comparação.
