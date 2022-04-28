

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Exercício 1

// a) o código visa verificar se o número escolhido pelo usuário é par. Para isso ele utiliza um teste com condicionais,
//  analisando o número sugerido pelo Usuário por meio do prompt.
// a1. ao utilizar o resto da divisão, e o comparador igual, ele verifica se é par ou não. 
//     Desta forma, ele pergunta se o número divisível por 2 não tem resto (ou zero), sendo par;

//  b) números pares imprimem "Passou no teste";

//  c) números ímpares imprimem "Não passou no teste".


// Exercício 2

// a) O Este código, escrito em switch case, serve como um bloco, usado para simplificar 
//    a utilização das condicionais if/else. Só pode ser usado no caso de comparador de igualdade.

// b) mensagem impressa:
//    O preço da fruta maçã é R$ 2.25

// c) o break é a palavra que faz com que a execução do código saia do bloco em questão. 
//    Caso retire o break, o código continua buscando, e dará o valor errado, do posterior que tenha break.
//    Para o exercício, o valor dado seria R$ 5, especificado para frutas não citadas no bloco,
//    no lugar de dar o valor da pêra, que é R$ 5.5.

// Exercício 3

// a) A primeira linha cria uma variável constante, pedindo ao usuário para sugerir um número por meio do prompt.
//    Por ser resposta a um prompt, virá como string, e precisa se conververtido em número por meio do tipo Number.

// b) para 10 - mensagem: Esse número passou no texto.
//    para -10 - mensagem: nenhuma mensagem seria impressa

// c) Não há erro no console. O condicional if assume como true a condição especificada. Neste caso o número
//    indicado pelo usuário precisa necessariamente ser maior do que dez para o resultado ser verdadeiro.
//    Sendo falso, o console não executa o código e não aparece no console.
//    Em relação à variável mensagem, ela está dentro das chaves e precisa do return para permitir o 
//    acesso externo aos dados do bloco. 


// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// Exercício 1

// a), b), c)

// const idadeUsuario = Number(prompt("Qual sua idade?"))

// if (idadeUsuario>=18){

//     console.log("Você pode dirigir.")
// }else{

//     console.log("Você não pode dirigir.")
// }


// Exercício 2

// const turno = prompt("Indique o turno em que você estuda marcando M (matutino), V (vespertino) ou N (Noturno).")


//     if(turno==="M") {

//         console.log("Bom dia")
//     }
//     else if (turno==="V") {

//         console.log("Boa tarde")
//         }
//         else{
//             console.log("Boa noite")
//         }


// Exercício 3

// let turno = prompt("Indique o turno em que você estuda marcando M (matutino), V (vespertino) ou N (Noturno).")
// switch(turno){
//     case `M`:
//         console.log("Bom dia!")
//         break
//     case `V`:
//         console.log("Boa tarde!")
//         break
//     case `N`:
//         console.log("Boa noite!")
//         break
//     default:
//         console.log(`Por gentileza, defina o turno.`)
//         break
// }        

// Exercício 4

let genero = prompt("Qual o gênero deste filme?")
let valor = Number(prompt("Qual o valor do ingresso?"))

    if (genero ==="fanstasia" && valor<15) {
      
       console.log("Bom filme!")
    }
    else {
        console.log("Escolha outro filme :(")
    }

    

// DESAFIOS

// Exercício 1

// let genero = prompt("Qual o gênero deste filme?")
// let valor = Number(prompt("Qual o valor do ingresso?"))

// let escolhalanche = prompt("Qual destes lanches o Sr. (a) deseja:pipoca, chocolate, doces, etc?")


// if (genero ==="fanstasia" && valor<15) {
      
//     // console.log("Bom filme!", `Aproveite seu ${lanchinho}`)
           
//     }
//     else {
//         console.log("Escolha outro filme :(")
//     }