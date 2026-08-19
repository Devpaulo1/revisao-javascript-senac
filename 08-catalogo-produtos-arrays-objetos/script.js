/*
  EXERCÍCIO 08 — CATÁLOGO DE PRODUTOS
*/

const produtos = [
  {
    id: 1,
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos",
    emEstoque: true
  },
  {
    id: 2,
    nome: "Mouse",
    preco: 120,
    categoria: "Periféricos",
    emEstoque: true
  },
  {
    id: 3,
    nome: "Teclado",
    preco: 250,
    categoria: "Periféricos",
    emEstoque: false
  },
  {
    id: 4,
    nome: "Monitor",
    preco: 1200,
    categoria: "Eletrônicos",
    emEstoque: true
  },
  {
    id: 5,
    nome: "Fone de Ouvido",
    preco: 180,
    categoria: "Áudio",
    emEstoque: true
  }
];

// TODO:
// Percorra o array com for, for...of ou forEach().

// IN - acessar os ìndices do array
for (prod in produtos) {
  console.log(prod)
} 
// OF - acessar os valores do array
for (prod of produtos) {
  console.log(prod.nome)
} 

//ForEach
//criei uma função para ser reutilizada o prod(element) em outro local
function showProducts(prod){
  console.log(prod)
}
produtos.forEach(showProducts)

// declarei direto no forEach
produtos.forEach(prod => {
  console.log(prod)
});



produtos.forEach(produto => {
  console.log(
    `Produto: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)} | Categoria: ${produto.categoria} | Em estoque: ${produto.emEstoque ? "Sim" : "Não"}`
  );
});

// TODO:
// Para cada item, mostre no console uma frase formatada
// contendo as informações do produto.
