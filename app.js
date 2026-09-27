//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
// Com o novo jeito de usar o codigo abaixo, poderemos deixar nosso código com boas práticas em dia e nao poluido com o msm comando

let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function exbirTextoNaTela(tag, texto) {
let paragrafo = document.querySelector(tag);
paragrafo.innerHTML = texto;
}

function exibirMensagemInicial() {

exbirTextoNaTela('h1', 'jogo do número secreto');
exbirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exbirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} `;
        exbirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
        exbirTextoNaTela('p', 'O número secreto é menor');
    } else {
        exbirTextoNaTela('p','O número secreto é maior');
    }
    tentativas ++;
    limparCampo();
}
 }  


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 +1);

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ' ';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}