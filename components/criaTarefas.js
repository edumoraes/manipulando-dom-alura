import { carregaTarefa } from "./carregaTarefa.js";
import BotaoConclui from "./concluiTarefa.js";
import BotaoDeleta from "./deletaTarefa.js";

//A função handleNovoItem() trabalha apenas com dados
export const handleNovoItem = (evento) => {
  evento.preventDefault()

  /*
  O argumento 'tarefas' é a chave do item que queremos pegar
  JSON.parse transforma string em objeto
  ||[] indica que se não houver algum dado, é iniciado um array vazio
  */
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

  
  const input = document.querySelector('[data-form-input]');
  const valor = input.value;
  

  /* Capturando o input de data na DOM */
  const calendario = document.querySelector('[data-form-date]');
  /* Capturando o conteúdo do input usando a biblioteca moment */
  const data = moment(calendario.value);

  const horario = data.format('HH:mm')
  /* Alterando o formato do conteúdo do input */
  const dataFormatada = data.format('DD/MM/YYYY');
  
  const concluida = false

  //Armazena os parametros para a função criarTarefa() em um Objeto
  const dados = {
    valor,
    dataFormatada,
    horario,
    concluida
  }

  //Criando o Array que será iterado no localStorage
  //pega dados do localStorage 'tarefas' e insere 'dados' no localStorage
  const tarefasAtualizadas = [...tarefas, dados];

  
  //Atualiza o localStorage
  localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));


  //Após execução o input volta ao valor padrão
  input.value = "";

  carregaTarefa();

}


//A função criarTarefa() trabalha com a exibição dos dados de handleNovoItem()
export const Tarefa = ({ valor, horario, concluida }, id) => {
  
  
  const tarefa = document.createElement('li')
  //isso é uma template string
  const conteudo = `<p class="content">${horario} * ${valor}</p>`;
  
  if(concluida) {
    tarefa.classList.add('done');

  }

  tarefa.classList.add('task');
  
  tarefa.innerHTML = conteudo;

  
  tarefa.appendChild(BotaoConclui(carregaTarefa, id));
  tarefa.appendChild(BotaoDeleta(carregaTarefa, id));

  return tarefa;
}