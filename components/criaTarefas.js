import BotaoConclui from "./components/concluiTarefea.js";
import BotaoDeleta from "./components/deletaTarefa.js";

let tarefas = [];

const handleNovoItem = (evento) => {
  evento.preventDefault()

  const lista = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const valor = input.value;
  
  const calendario = document.querySelector('[data-form-date]');
  const data = moment(calendario.value);
  const dataFormatada = data.format('DD/MM/YYYY');
  
  const dados = {
    valor,
    dataFormatada
  }

  const criaTarefa = criarTarefa(dados)

  tarefas.push(dados);

  localStorage.setItem('tarefas', JSON.stringify(tarefas));



  lista.appendChild(criaTarefa);
  input.value = "";
}


const criarTarefa = ({valor, dataFormatada}) => {
  
  
  const tarefa = document.createElement('li')
  
  tarefa.classList.add('task');
  
  //isso é uma template string
  const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`;
  
  tarefa.innerHTML = conteudo;
  
  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());

  return tarefa;
}


