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