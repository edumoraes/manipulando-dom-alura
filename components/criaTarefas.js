import BotaoConclui from "./components/concluiTarefea.js";
import BotaoDeleta from "./components/deletaTarefa.js";

let tarefas = [];

//A função handleNovoItem() trabalha apenas com dados
const handleNovoItem = (evento) => {
  evento.preventDefault()

  const lista = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const valor = input.value;
  

  /* Capturando o input na DOM */
  const calendario = document.querySelector('[data-form-date]');
  /* Capturando o conteúdo do input com a biblioteca moment */
  const data = moment(calendario.value);
  /* Alterando o formato do conteúdo do input */
  const dataFormatada = data.format('DD/MM/YYYY');
  
  //Armazena os parametros para a função criarTarefa()
  const dados = {
    valor,
    dataFormatada
  }

  //Armazena a execução da função criarTarefa()
  const criaTarefa = criarTarefa(dados)

  
  tarefas.push(dados);

  localStorage.setItem('tarefas', JSON.stringify(tarefas));


  //Adiciona o resultado de criaTarefa como elemento filho de lista que foi percorrida na DOM
  lista.appendChild(criaTarefa);
  //Após execução o input volta ao valor padrão
  input.value = "";
  
  carregaTarefa();
}


//A função criarTarefa() trabalha com a exibição dos dados de handleNovoItem()
const criarTarefa = ({ valor, dataFormatada }) => {
  
  
  const tarefa = document.createElement('li')
  tarefa.classList.add('task');
  //isso é uma template string
  const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`;
  
  tarefa.innerHTML = conteudo;
  
  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());

  return tarefa;
}

export default handleNovoItem;