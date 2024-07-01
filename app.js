alert("Boas Vindas ao jogo do Número secreto!");    
let numeroSecreto = 29;
let chute = prompt("Escolha um Numero entre 1 a 30");
if (numeroSecreto == chute) {
    console.log(`Você acertou! O NUMERO SECRETO É REALMENTE ${numeroSecreto}`);
} else {
    console.log("Você errou!");
}