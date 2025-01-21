let listaDeNumerosEscolhidos = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagemInial()



function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 50');
}

function verificarChute() {
    let mensagem = tentativas > 1 ? 'tentativas' : 'tentativas';
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        
        let mensagemTentativas = `Acertou com ${tentativas} ${mensagem}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o número secreto é menor!');
        }
        else {
            exibirTextoNaTela('p', 'o número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let quantidadeDeElementosNaLista = listaDeNumerosEscolhidos.length
    let numeroEscolhido =  parseInt(Math.random() * 50 + 1);

    if(quantidadeDeElementosNaLista == 50) {
        listaDeNumerosEscolhidos = [];
    }

    if (listaDeNumerosEscolhidos.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaDeNumerosEscolhidos.push(numeroEscolhido);
        console.log(numeroEscolhido);
        return numeroEscolhido;
        
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}