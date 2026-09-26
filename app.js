//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
// Com o novo jeito de usar o codigo abaixo, poderemos deixar nosso código com boas práticas em dia e nao poluido com o msm comando

let numeroSecreto = gerarNumeroAleatorio();

function exbirTextoNaTela(tag, texto) {
let paragrafo = document.querySelector(tag);
paragrafo.innerHTML = texto;
}

exbirTextoNaTela('h1', 'jogo do número secreto');
exbirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 +1);
    
}