// Script para configuração de cores da página
// Botão para configurações de cores
const colorConfig = document.getElementById('cor-bnt')
colorConfig.addEventListener('click', function(){
    colorConfig.classList.toggle('ativo')
    
    const paginaConfiguracao = document.getElementById('page-color-config')
    paginaConfiguracao.classList.toggle('abrirConfiguracoes')
    paginaConfiguracao.addEventListener('mouseleave', function(){
        paginaConfiguracao.classList.remove('abrirConfiguracoes')
        colorConfig.classList.remove('ativo')
    })
})
// -------------------------------------------------------
// Cores de plano de fundo
function backgroundColor(cor){
    var corSelecionada = cor
    var corFundo = document.getElementById('html')
    // var corText = document.getElementById('html')
    
    if (cor == corFundo.style.color){
        alert('OPS! Cor de plano de fundo e cor do texto são iguais. Por favor escolha outra cor')
    } else {
        corFundo.style.background = corSelecionada
    }
}
// Cores do texto
function textColor(cor){
    var corSelecionada = cor
    var corText = document.getElementById('html')

    if (cor == corText.style.background){
        alert('OPS! Cor de plano de fundo e cor do texto são iguais. Por favor escolha outra cor')
    } else {
        corText.style.color = corSelecionada
    }
}
// -------------------------------------------------------
// Botão limpar tarefas

const bntLimpar = document.getElementById('bnt-clear-tarefas')
bntLimpar.addEventListener('click', function(){
    const valorInput = document.getElementById('titulo-tarefa')
    const valorText = document.getElementById('corpo-tarefa')

    // Limpando os dados da tela
    valorInput.value = ''
    valorText.value = ''
})

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
        
        blocoTarefa.classList.add('bloco-tarefa') // adicioan a class no elemento 'div'
        bTitulo.classList.add('bTitulo') // adiciona a classe no elemento 'h3'
        bCorpo.classList.add('bCorpo') // adiciona a classe no elemento 'p'
        bntExcluir.classList.add('bnt-excluir') // adiciona a classe no elemento 'button'
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
        corpo.style.textAlign = alinhamento
        corpo.style.fontWeight = negrito
        corpo.style.fontStyle = italico

        // Limpando os dados da tela
        valorInput.value = ''
        valorText.value = ''
    }
    // Excluir tarefas

    const bntExcluir = document.querySelector('.bnt-excluir')
    bntExcluir.addEventListener('click', function(){
        const blocoTarefa = document.querySelector('.bloco-tarefa')
        blocoTarefa.parentNode.removeChild(blocoTarefa)
    })
}
// -------------------------------------------------------

// botôes de estilização da tarefa
const bntNegrito = document.getElementById("bnt-negrito")
const bntItalico = document.getElementById("bnt-italico")
const bntJustificar = document.getElementById("bnt-justificar")
const bntCentralizar = document.getElementById("bnt-centralizar")
const bntEsquerda = document.getElementById("bnt-esquerda")
const bntDireita = document.getElementById("bnt-direita")
const corpoTarefa = document.getElementById("corpo-tarefa")
let alinhamento = ""
let negrito = ""
let italico = ""

bntNegrito.addEventListener("click", function(){
    if(corpoTarefa.style.fontWeight == "700") {
        corpoTarefa.style.fontWeight = "normal"
        negrito = 'normal'
    } else {
        corpoTarefa.style.fontWeight = "700"
        negrito = '700'
    }
})
bntItalico.addEventListener("click", function(){
    if(corpoTarefa.style.fontStyle == "italic"){
        corpoTarefa.style.fontStyle = "normal"   
        italico = "normal" 
    } else {
        corpoTarefa.style.fontStyle = "italic"
        italico = "italic"
    }
})
bntJustificar.addEventListener("click", function(){corpoTarefa.style.textAlign = 'justify'; alinhamento = 'justify'})
bntCentralizar.addEventListener("click", function(){corpoTarefa.style.textAlign = 'center'; alinhamento = 'center'})
bntEsquerda.addEventListener("click", function(){corpoTarefa.style.textAlign = 'left'; alinhamento = 'left'})
bntDireita.addEventListener("click", function(){corpoTarefa.style.textAlign = 'right'; alinhamento = 'right'})

