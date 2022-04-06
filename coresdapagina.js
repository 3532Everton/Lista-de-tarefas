// Script para configuração de cores da página
// Botão para configurações de cores
const colorConfig = document.getElementById('cor-bnt')
colorConfig.addEventListener('click', function(){
    colorConfig.classList.toggle('ativo')
    
    const paginaConfiguracao = document.getElementById('page-color-config')
    paginaConfiguracao.classList.toggle('abrirConfiguracoes')
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