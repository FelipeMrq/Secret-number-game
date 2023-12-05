let listaDeNumeroSorteados = [];
let numeroLimite = 100;
let numeroSecreto  = gerarNumeroAleatorio();
let tentativa = 1




function exibirTextoNaTela(tag,texto) {
    campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Famale', {rate:1.2});
}
function mensagemInicial() {
    exibirTextoNaTela ('h1', 'Jogo do numero Secreto');
    exibirTextoNaTela ('p', 'Escolha um numero de 1 a 100');

}

mensagemInicial()


function verificarChute () {
    let chute = document.querySelector ('input').value;
    console.log (numeroSecreto == chute);
     
    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1', 'Acertou');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativa = `Parabéns você acertou o numero secreto com ${tentativa} ${palavraTentativa}`
        exibirTextoNaTela ('p', mensagemTentativa);
        document.getElementById ('reiniciar').removeAttribute ('disabled')
        document.getElementById ('chute').setAttribute ('disabled',true)
        
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela ('p', 'O numero secreto é menor');
        }else{
            exibirTextoNaTela ('p', 'O numero secreto é maior')
        }
        tentativa++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumeroSorteados = [];
    }
    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeroSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
    
}
function limparCampo() {
    chute = document.querySelector ('input');
    chute.value = '';
    
}
function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    document.getElementById ('chute').removeAttribute ('disabled')
    document.getElementById ('reiniciar').setAttribute ('disabled', true)
    mensagemInicial()
}