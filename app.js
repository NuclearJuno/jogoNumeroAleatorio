// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número Secreto !';

// let paragrafo = documento.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 a 10';
let randomNumber = randomNumberGenerator()

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do número Secreto !');
exibirTextoNaTela('p','Escolha um número entre 1 a 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == randomNumber)
}

function randomNumberGenerator() {
   return parseInt(Math.random() *10 + 1)
}