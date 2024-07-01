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

// Criar uma função que exibe "Olá, mundo!" no console.

function saudacao(){
    console.log('Olá, Mundo');
}
saudacao()

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function saudacao(nome){
    console.log(`Olá, ${nome}`);
}
saudacao('junior')


// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobro(numero){
    let dobroDe = numero *2
    console.log(`o dobro de ${numero} é ${dobroDe}`);
}
dobro(3)

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(numero1, numero2, numero3){
    let mediaDeTres = (numero1 + numero2 + numero3) / 3
    console.log(`a média de ${numero1}, ${numero2}, ${numero3} é ${mediaDeTres}`);
}
media(3, 4, 6)


// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maior(numero1, numero2){
    if(numero1 > numero2){
        console.log(`o numero maior é o ${numero1}`)
    } else {
        console.log(`o numero maior é o ${numero2}`)
    }
}
maior(3, 4)

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function mult(numero1){
    let multiplicacao = numero1 * numero1
    console.log(`O numero ${numero1} elevado ao quadrado é ${multiplicacao}`)
}
mult(3)