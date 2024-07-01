alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}
// if(tentativas > 1){
//     alert(`isso ai você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`)
// } else{
//     alert(`isso ai você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`)
// }

let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`isso ai você descobriu o numero secreto ${numeroSecreto} com ${palavratentativa}`)