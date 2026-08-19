const tarefas = [
  { id: 1, titulo: "Estudar JavaScript", concluida: false },
  { id: 2, titulo: "Praticar arrays", concluida: false },
  { id: 3, titulo: "Revisar funções", concluida: true },
];

function adicionarTarefa(lista, novaTarefa) {
  return [...lista, novaTarefa];
}

function concluirTarefa(lista, id) {
  return lista.map((tarefa) =>
    tarefa.id === id
      ? { ...tarefa, concluida: true }
      : tarefa
  );
}

function removerTarefa(lista, id) {
  return lista.filter((tarefa) => tarefa.id !== id);
}

const comNovaTarefa = adicionarTarefa(tarefas, {
  id: 4,
  titulo: "Estudar",
  concluida: false,
});

const comTarefaConcluida = concluirTarefa(comNovaTarefa, 2);

const semPrimeiraTarefa = removerTarefa(comTarefaConcluida, 1);

console.log("Original:");
console.log(tarefas);

console.log("Com nova tarefa:");
console.log(comNovaTarefa);

console.log("Tarefa 2 concluída:");
console.log(comTarefaConcluida);

console.log("Tarefa 1 removida:");
console.log(semPrimeiraTarefa);