import { ordenaDatas, removeDatasRepetidas } from "../service/data.js";
import { criaData } from "./criaData.js";

export const carregaTarefa = () => {
  
  //selecionando a ul no dom
  const lista = document.querySelector('[data-list]');

  //consultando as tarefas do local storage na chave "tarefas" e parseando para Array
  const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];

  //Limpando a lista no HTML para que não seja duplicada
  lista.innerHTML = " ";

  const datasUnicas = removeDatasRepetidas(tarefasCadastradas)

  ordenaDatas(datasUnicas)
  //para cada item do Array localStorage tarefa será executada a seguinte função
  datasUnicas.forEach((dia) => {
        
    lista.appendChild(criaData(dia));

  })

  
}