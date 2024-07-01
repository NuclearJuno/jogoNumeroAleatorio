alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// se chute for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    
            if (chute == numeroSecreto) {
                alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
                } else {
                    if (chute < numeroSecreto) 
                        alert(`O numero secreto é maior que o ${chute}`);
                    } else {
                        alert(`o numero secreto é menor que o ${chute}`);
    }
    tentativas = tentativas + 1;
    tentativas++;

}