import { Tarefa } from "./criaTarefas.js";

export const carregaTarefa = () => {
  
  //selecionando a ul no dom
  const lista = document.querySelector('[data-list]');

  //consultando as tarefas do local storage na chave "tarefas" e parseando para Array
  const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];

  //Limpando a lista no HTML para que não seja duplicada
  lista.innerHTML = " ";

  //para cada item do Array localStorage tarefa será executada a seguinte função
  tarefasCadastradas.forEach((tarefa) => {
    lista.appendChild(Tarefa(tarefa))
  });

  
}