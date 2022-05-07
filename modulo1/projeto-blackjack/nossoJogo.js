/*
EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 
 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 
 */

//  MONTANDO O JOGO


console.log ("Boas vindas ao jogo de Blackjack!")

const respostaUsu = prompt("Quer iniciar uma rodada? Se sim, digite ok. Se não, digite cancel.")

const positivo = ok
const negativo = cancel 

if (confirm ("ok ou cancel")) {
 if (respostaUsu === ok)
   console.log ("Vamos iniciar uma nova rodada!")
}
else {
   console.log ("O jogo acabou.")
}
