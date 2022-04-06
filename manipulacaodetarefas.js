// indentificador de tarefas 
var tarefaIdentificador = 0
// Script para manipular as tarefas as tarefas
function manipularTarefas(){
    // Recebendo o valores do titulo e corpo
    const valorInput = document.getElementById('titulo-tarefa')
    const tituloTarefa = valorInput.value
    const valorText = document.getElementById('corpo-tarefa')
    const corpoTarefa = valorText.value
    const addTarefas = document.getElementById('tarefas')

    // Verificando se há algo para adicionar
    if (tituloTarefa === "" && corpoTarefa === ""){
        alert("Por favor, digite o titulo e a mensagem")
    } else if (tituloTarefa === "" || corpoTarefa === ""){
        alert("Por favor, adicione um titulo ou uma mensagem!")
    } else {

        // Adicionando tarefa
        var tarefa = {
            titulo: `${tituloTarefa}`,
            corpo: `${corpoTarefa}`
        }

        const blocoTarefa = document.createElement("div") // cria o elemento 'div'
        const bTitulo = document.createElement("h3") // cria o elemento 'h3'
        const bCorpo = document.createElement('p') // cria o elemento 'p'
        const bntExcluir = document.createElement('button') // cria o elemento 'button'
        const iconLixo = document.createElement('i') // cria o elemento 'i'
        
        blocoTarefa.classList.add('bloco-tarefa') // adiciona a classe no elemento 'div'
        blocoTarefa.setAttribute('id', `tarefa${tarefaIdentificador}`) // adiciona o id no elemento 'div'
        bTitulo.classList.add('bTitulo') // adiciona a classe no elemento 'h3'
        bCorpo.classList.add('bCorpo') // adiciona a classe no elemento 'p'
        bntExcluir.classList.add('bnt-excluir') // adiciona a classe no elemento 'button'
        bntExcluir.setAttribute('onclick', `excluirTarefa(${tarefaIdentificador})`) // adiciona o envento 'onclick' no elemento 'button'
        iconLixo.classList.add('fa', 'fa-trash') // adiciona a classe no elemento 'i'

        addTarefas.insertAdjacentElement("afterbegin", blocoTarefa) // adiciona a div na div.tarefas
        blocoTarefa.insertAdjacentElement('afterbegin', bTitulo) // adiciona o elemento 'h3' com o titulo na div
        blocoTarefa.insertAdjacentElement('beforeend', bCorpo) // adiciona o elemento 'p' com o corpo na div
        blocoTarefa.insertAdjacentElement('beforeend', bntExcluir) // adiciona o elemento 'button' com a função de excluir no div
        bntExcluir.insertAdjacentElement('beforeend', iconLixo) // adiciona o elemento 'i' com o icone de lixeira

        const titulo = document.querySelector('.bTitulo')
        titulo.innerHTML = tarefa.titulo // adiciona o texto do titulo
        
        const corpo = document.querySelector('.bCorpo')
        corpo.innerHTML = tarefa.corpo // adiciona o texto do corpo
        corpo.style.textAlign = alinhamento // alinha o texto de acordo com o alinhamento selecionando em ./estilizacao.js
        corpo.style.fontWeight = negrito // recebe o valor da variável 'negrito' de ./estilizacao.js
        corpo.style.fontStyle = italico // recebe o valor da variável 'italico' de ./estilizacao.js

        // Limpando os dados da tela
        valorInput.value = ''
        valorText.value = ''
        tarefaIdentificador += 1
    }
}
function excluirTarefa(identificador){
    // Excluir tarefas
    const blocoTarefa = document.getElementById(`tarefa${identificador}`)
    blocoTarefa.parentNode.removeChild(blocoTarefa)
}
// -------------------------------------------------------
// Botão limpar dados

const bntLimpar = document.getElementById('bnt-clear-tarefas')
bntLimpar.addEventListener('click', function(){
    const valorInput = document.getElementById('titulo-tarefa')
    const valorText = document.getElementById('corpo-tarefa')

    // Limpando os dados da tela
    valorInput.value = ''
    valorText.value = ''
})