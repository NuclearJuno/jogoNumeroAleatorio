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


// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calculoImc(altura, peso){
    let imc = peso / (altura *altura)
    return imc
}
calculoImc(1.73, 45)

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(n) {
    let resultado = 1;
    let i = 1;
  
    while (i <= n) {
      resultado *= i;                                                   //UM DIA EU ENTENDO
      i++;
    }
  
    console.log(resultado);
}
fatorial(5)

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.


function conversor(reais){
    let dolar = 4.80
    reais = reais / dolar
    console.log(reais)
}
conversor(60)

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function perimetroArea(altura, largura){
    area = altura * largura
   let perimetro = 2 * (altura * largura)
    console.log(`area: ${area} metros quadrados`)
    console.log(`perimetro: ${perimetro} metros`)
}
perimetroArea(3.5, 5.8)

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function circulo(raio){
    let pi = 3.14
    area = raio * pi
    perimetro = (2 * pi) * raio
    console.log(`Area de um circulo cujo o raio seja ${raio} é ${area}, e o perimetro é ${perimetro}`)
}
circulo(6)

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.



function tabuada(n){
    for (let index = 0; index < 11; index++) {
        multiplicador = n * index
        console.log(`${n} * ${index} = ${multiplicador}`)
    }
}
tabuada(10)






