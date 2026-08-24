/*
  EXERCÍCIO 15 — TODO LIST
*/

// ============================================================
// 1. DADOS
// ============================================================

// TODO:
// Crie um array chamado tarefas.
// Cada tarefa deverá possuir:
// id
// titulo
// concluida

let tarefas = [];


// ============================================================
// 2. ELEMENTOS DO DOM
// ============================================================

// TODO:
// Selecione:
// formulário
// input
// lista
// contador de pendentes
// mensagem de lista vazia

const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list")
const pendingCount = document.querySelector("#pending-count");
const emptyMessage = document.querySelector("#empty-message")

// ============================================================
// 3. RENDERIZAÇÃO
// ============================================================

function renderTarefas() {
  // TODO:
  // Limpe a lista atual.
  taskList.innerHTML = "";

  // TODO:
  // Percorra o array tarefas e monte um <li> para cada item.

  tarefas.forEach((tarefa) => {
    
  // - checkbox ou botão para concluir;
    const concludeButton = document.createElement("button");
    concludeButton.textContent = tarefa.concluida ? "Desfazer" : "Concluir";
    concludeButton.addEventListener("click", () => {
      alternarConclusao(tarefa.id);
    });

  // - botão remover.
    const removeButton = document.createElement("button")
    removeButton.textContent = "Remover";

    removeButton.addEventListener("click", () => {
      removerTarefa(tarefa.id);
    });
  // O item deverá possuir:
    const item = document.createElement("li");

  // - título;
    const titulo = document.createElement("span");
    titulo.textContent = tarefa.titulo;
    titulo.style.textDecoration = tarefa.concluida ? "line-through" : "none";

    item.appendChild(concludeButton);
    item.appendChild(titulo);    
    item.appendChild(removeButton);
    taskList.appendChild(item);
  })

  // TODO:
  // Atualize o contador de pendentes.(Fiz com Arrow Function curto)
  const tarefasPendentes = tarefas.filter((tarefa) => tarefa.concluida === false);
  pendingCount.textContent = tarefasPendentes.length;

  // TODO:
  // Mostre/oculte a mensagem de lista vazia.
  emptyMessage.hidden = tarefas.length > 0;

}


// ============================================================
// 4. ADICIONAR
// ============================================================

function adicionarTarefa(titulo) {
  // TODO:
  // Crie um novo objeto.
  // Gere um id.
  const novaTarefa = {
    id: Date.now(),
    titulo,
    concluida: false  
  }
  // Adicione ao array.
  tarefas = [...tarefas, novaTarefa]
  // Renderize novamente.
  renderTarefas();
}


// ============================================================
// 5. CONCLUIR
// ============================================================


  // TODO:
function alternarConclusao(id) {  
  // Prefira map() para gerar um novo array.
  tarefas = tarefas.map((tarefa) => {
  // Atualize a tarefa correspondente.
    if (tarefa.id === id) {
      return {
        ...tarefa,
        concluida: !tarefa.concluida
      };
    }

    return tarefa;
  });

  renderTarefas();
}

// ============================================================
// 6. REMOVER
// ============================================================

function removerTarefa(id) {
  // TODO:
  // Utilize filter().
  tarefas = tarefas.filter((tarefa) => {
    return tarefa.id !== id;
  });

  renderTarefas();
}


// ============================================================
// 7. EVENTOS
// ============================================================

// TODO:
// Trate o submit do formulário.

// TODO:
// Trate os cliques da lista.
// Você pode usar delegação de eventos.

taskForm.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const titulo = taskInput.value.trim();

  if (titulo === "") {
    return;
  }

  adicionarTarefa(titulo);

  taskInput.value = "";
  taskInput.focus();
});


// TODO:
// Faça a primeira renderização.
renderTarefas();