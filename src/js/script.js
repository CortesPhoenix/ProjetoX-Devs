 const btnA = document.getElementById("btn-avancar")
 const btnV = document.getElementById("btn-voltar")
let cartaoAtual = 0
const cartoes = document.querySelectorAll(".cartao")

 btnA.addEventListener("click", function(){
   const ehPrimeiroCartao = cartaoAtual === cartoes.length - 1
    if(ehPrimeiroCartao) return
    escondercartaoselecionado()
    cartaoAtual++   
    mostrarcartaoselecionado()

 })


 btnV.addEventListener("click", function(){
   const ehUltimoCartao = cartaoAtual === 0
   if(ehUltimoCartao) return
   escondercartaoselecionado()
   cartaoAtual--   
   mostrarcartaoselecionado()
})

function mostrarcartaoselecionado() {
   cartoes[cartaoAtual].classList.add("selecionado")
}

function escondercartaoselecionado() {
   const cartaoSelecionado = document.querySelector(".selecionado")
   cartaoSelecionado.classList.remove("selecionado")
}
