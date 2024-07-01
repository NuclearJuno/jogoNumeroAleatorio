let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'ACERTOU');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemDeTentativas = `com ${tentativas} ${palavraTentativa}`;

        exibirTextoNaTela('p', `Você Descobriu ! ${mensagemDeTentativas}`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', `Seu Chute é maior que o numero secreto`);
        } else {
            exibirTextoNaTela('p', `Seu Chute é menor que o numero secreto`);
        }
        tentativas++
        limparCampo();

    }

}
    

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarjogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}










