/*

OBJETIVO 1 - QUANDO O USUÁRIO CLICAR NA SETA AVANÇAR, IR PARA A PRÓXIMA CARTA 

    passo 1 - pegar o elemento HTML da seta avançar
    passo 2 - dar um jeito de identificar quando o usuário clicar na seta avançar
    passo 3 - mudar para a próxima carta da lista
    passo 4 - esconder a carta que estava selecionda

OBJETIVO 2 - QUANDO O USUÁRIO CLICAR NA SETA VOLTAR, IR PARA A CARTA ANTERIOR 

    passo 1 - pegar o elemento HTML da seta voltar
    passo 2 - dar um jeito de identificar quando o usuário clicar na seta voltar
    passo 3 - mudar para a carta anterior da lista
    passo 4 - esconder a carta que estava selecionda

*/

// passo 1 - pegar o elemento HTML da seta avançar

const btnAvancar = document.getElementById("seta-avancar");
const btnVoltar = document.getElementById("seta-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
  const cartaoSelecionado = document.querySelector(".selecionada");
  cartaoSelecionado.classList.remove("selecionada");

}

function mostrarCartaoSelecionado(){
  cartoes[cartaoAtual].classList.add("selecionada");
}



btnAvancar.addEventListener("click", function () {

  if (cartaoAtual === cartoes.length - 1) {
    return;
  }

  esconderCartaoSelecionado();

  cartaoAtual++;

  mostrarCartaoSelecionado();

});

btnVoltar.addEventListener("click", function () {

  if (cartaoAtual <= 0) {
    return;

  }
  
  esconderCartaoSelecionado();
  
  cartaoAtual--;

  mostrarCartaoSelecionado();


});
