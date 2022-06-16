import { Tarefa } from './criaTarefas.js'

export const criaData = (data) => {
  
  //Consulta os itens do localStorage ou cria um array vazio caso localStorage esteja vazio
  const tarefas = JSON.parse(localStorage.getItem('tarefas'))||[];
  
  //Definindo o formato da data com a biblioteca moment
  const dataMoment = moment(data, 'DD/MM/YYYY')
  
  //Criando estrutura HTML que receberá o conteúdo
  const dataTopo = document.createElement('li');
  const conteudo = `<p class="content-data">${dataMoment.format('DD/MM/YYY')}</p>`
  dataTopo.innerHTML = conteudo;

  //Função que adiciona o conteúdo de cada item do Array
  tarefas.forEach((tarefa, id) => {
    const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY'); //Não entendi essa sintaxe
    const diff = dataMoment.diff(dia);

    if(diff === 0) {
      dataTopo.appendChild(Tarefa(tarefa, id))
    }

  })

  return dataTopo
}