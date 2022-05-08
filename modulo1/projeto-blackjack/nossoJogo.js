/*
EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 
 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 
 */

//  MONTANDO O JOGO

// console.log ("Boas vindas ao jogo de Blackjack!")

// const sim = true 

// const respostaUsu = prompt("Quer iniciar uma rodada? Se sim, digite sim. Se não, digite cancel.")

// if (confirm ("sim ou cancel")) {
//  if (sim)
//    console.log ("Vamos iniciar uma nova rodada!")
// }
// else {
//    console.log ("O jogo acabou.")
// }

// COMEÇANDO UMA RODADA



// Definindo as cartas

   const baralho = {
      texto: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "k"],
      naipe:["&spades", "&clubs", "&hearts", "&diams"]
   }
   
      
      function contarValor (valor) {
      let ponto
      switch (valor) {
         case 'A':
            ponto = 11,    
            break;
         case 'J':
            ponto = 10;
            break;
         case 'Q':
            ponto = 10;
            break;
         case 'K':
            ponto = 10,
            break;
         default:
            ponto = valorDoNumero  
         break;
      }
      ponto.push(ponto.toString())
      console.log(contarPonto)
      }
      
   const carta = comprarCarta ();

   let carta1Jogador = carta.texto
   let carta2Jogador = carta.texto
   let valorCarta1Jogador = carta.valor
   let valorCarta2Jogador = carta.valor
   
   console.log (carta.texto)
   console.log (carta.valor)

   let totalJogador = function (n1,n2,item) {
      const soma = carta1Jogador + carta2Jogador 
         if (soma <= 21){
            return soma
         }
   }
   console.log (totalJogador)

   let carta1Computador = carta.texto
   let carta2Computador = carta.texto
   let valorCarta1Computador = carta.valor
   let valorCarta2Computador = carta.valor
   
   let totalComputador = function (n1,n2,item) {
      const soma = carta1Computador + carta2Computador 
         if (soma <= 21){
            return soma
         }
   }
   console.log (totalComputador)

   console.log ('Usuário - cartas: ${carta1Jogador, carta2Jgador} - pontuação ${totalJogador}')
   console.log ('Computador - cartas ${carta1Computador, carta2Computador} - pontuação ${totalJogador}')


   let n1 = totalJogador
   let n2 = totalComputador
   
   function compararValorJogadores (n1, n2) {
         if (n1=n2){
            console.log("Empate!")

         }else if(n1>n2){
            console.log("O usuário ganhou!")

         }else{
            console.log ("O computador ganhou!")
         }
   }
   
   compararValorJogadores(totalJogador,totalComputador)   
   
   
   


   
//   function 

   

   

   // 
   


   // function definirCarta (texto, naipe) {
      
   // }

   // console.log (novaCarta)
// 
// let carta1Computador = carta.texto
// let carta2Computador = carta.valor
// let carta1Jogador = carta.texto
// let carta2Jogador = carta.valor

// function 
  

// console.log (comprarCarta(cartaJogo))


// 


// 
// const naipeOuro = [
//    {texto: "A$", valor:11},
//    {texto: "2$", valor: 2},
//    {texto: "3$", valor: 3},
//    {texto: "4$", valor: 4},
//    {texto: "5$", valor: 5},
//    {texto: "6$", valor: 6},
//    {texto: "7$", valor: 7},
//    {texto: "8$", valor: 8},
//    {texto: "9$", valor: 9},
//    {texto: "10$", valor:10},
//    {texto: "J$", valor:10},
//    {texto: "Q$", valor:10},
//    {texto: "k$", valor:10},
// ] 

// console.log(naipeOuro[2].valor)

// const naipePaus = [
//    {texto: "A@", valor:11},
//    {texto: "2@", valor: 2},
//    {texto: "3@", valor: 3},
//    {texto: "4@", valor: 4},
//    {texto: "5@", valor: 5},
//    {texto: "6@", valor: 6},
//    {texto: "7@", valor: 7},
//    {texto: "8@", valor: 8},
//    {texto: "9@", valor: 9},
//    {texto: "10@", valor:10},
//    {texto: "J@", valor:10},
//    {texto: "Q@", valor:10},
//    {texto: "k@", valor:10},
// ]   

// console.log(naipePaus[7].valor)

// const naipeCopas = [
//    {texto: "A*", valor:11},
//    {texto: "2*", valor: 2},
//    {texto: "3*", valor: 3},
//    {texto: "4*", valor: 4},
//    {texto: "5*", valor: 5},
//    {texto: "6*", valor: 6},
//    {texto: "7*", valor: 7},
//    {texto: "8*", valor: 8},
//    {texto: "9*", valor: 9},
//    {texto: "10*", valor:10},
//    {texto: "J*", valor:10},
//    {texto: "Q*", valor:10},
//    {texto: "k*", valor:10},
// ]   
// console.log(naipeCopas[12].texto)

// const naipeEspada = [
//    {texto: "A!", valor:11},
//    {texto: "2!", valor: 2},
//    {texto: "3!", valor: 3},
//    {texto: "4!", valor: 4},
//    {texto: "5!", valor: 5},
//    {texto: "6!", valor: 6},
//    {texto: "7!", valor: 7},
//    {texto: "8!", valor: 8},
//    {texto: "9!", valor: 9},
//    {texto: "10!", valor:10},
//    {texto: "J!", valor:10},
//    {texto: "Q!", valor:10},
//    {texto: "k!", valor:10},
// ]   
// console.log(naipeEspada[11].texto)


// ouro:{texto: "A$", valor:11,
//          texto: "2$", valor: 2,
//          texto: "3$", valor: 3,
//          texto: "4$", valor: 4,
//          texto: "5$", valor: 5,
//          texto: "6$", valor: 6,
//          texto: "7$", valor: 7,
//          texto: "8$", valor: 8,
//          texto: "9$", valor: 9,
//          texto: "10$", valor:10,
//          texto: "J$", valor:10,
//          texto: "Q$", valor:10,
//          texto: "k$", valor:10},
//       paus: {texto: "A@", valor:11,
//             texto: "2@", valor: 2,
//             texto: "3@", valor: 3,
//             texto: "4@", valor: 4,
//             texto: "5@", valor: 5,
//             texto: "6@", valor: 6,
//             texto: "7@", valor: 7,
//             texto: "8@", valor: 8,
//             texto: "9@", valor: 9,
//             texto: "10@", valor:10,
//             texto: "J@", valor:10,
//             texto: "Q@", valor:10,
//             texto: "k@", valor:10},
//       copas:{texto: "A*", valor:11,
//             texto: "2*", valor: 2,
//             texto: "3*", valor: 3,
//             texto: "4*", valor: 4,
//             texto: "5*", valor: 5,
//             texto: "6*", valor: 6,
//             texto: "7*", valor: 7,
//             texto: "8*", valor: 8,
//             texto: "9*", valor: 9,
//             texto: "10*", valor:10,
//             texto: "J*", valor:10,
//             texto: "Q*", valor:10,
//             texto: "k*", valor:10},
//       espada:{texto: "A!", valor:11,
//             texto: "2!", valor: 2,
//             texto: "3!", valor: 3,
//             texto: "4!", valor: 4,
//             texto: "5!", valor: 5,
//             texto: "6!", valor: 6,
//             texto: "7!", valor: 7,
//             texto: "8!", valor: 8,
//             texto: "9!", valor: 9,
//             texto: "10!", valor:10,
//             texto: "J!", valor:10,
//             texto: "Q!", valor:10,
//             texto: "k!", valor:10}