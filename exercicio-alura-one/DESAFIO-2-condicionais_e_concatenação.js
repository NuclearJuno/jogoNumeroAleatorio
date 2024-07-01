// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

var diaDaSemana = alert("Qual o dia da semana?");

if(diaDaSemana == "Sábado" || diaDaSemana == "Domingo"){
    alert("Bom fim de semana!");
}else{
    alert("Boa semana!");
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

var numero = prompt("Digite um numero");
if(numero > 0){
    alert("O numero é positivo");   
} else(numero < 0)
    alert("O numero é negativo");

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

var pontuação = prompt("Digite sua pontuação");
if(pontuação >= 100){
    alert("Parabéns, você venceu!");   
} else(pontuação < 0)
    alert("Tente novamente para ganhar.");


// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

var saldo = 1000;
var mensagem = `Seu saldo é de R$${saldo}`;

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

var nome = prompt("Qual o seu nome?");
alert(`Seja bem vindo ${nome}`);
