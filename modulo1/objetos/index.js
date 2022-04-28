
// EXERCÍCIOS - OBJETOS

// Exercícios de interpretação

// Exercício 1

// a)
// Matheus Nachtergaele
// Virginia Cavendish
// canal: Globo, horario: 14h


// Exercício 2

// a) 
//
// nome: Juca
// idade: 3
// raca: SRD
// 
// nome: Juba
// idade: 3
// raca: SRD

// nome: Juco
// idade: 3
// raca: SRD

// b)
// a sintaxe de três pontos faz o spread/espalhamento, com cópia do arquivo citado depois dos pontos e possiblidade de manipulação deste arquivo.


// Exercício 3


// Caio backender: false
// Caio altura: undefined



//  EXERCÍCIOS DE ESCRITA DE CÓDIGO


// Exercício 1

// a)
// const pessoa = {

//     nome: "Isabela",
//     apelidos: ["Bel", "Nana", "Mãezinha"],

// }

// function minhaFuncao(){

//     const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`
    
//     return frase

// }
        
// console.log (minhaFuncao())

// // // console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]} .`)



// // // b)

// const pessoa1 = {
// ...pessoa,
// apelidos: ["Docinho de Mofo", "Isabelhinha", "Beloca"],
    
// }

// function minhaFuncao1(){

//     const frase = `Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa1.apelidos[0]}, ${pessoa1.apelidos[1]} ou ${pessoa1.apelidos[2]}.`

    
//     return frase

// }
        
// console.log (minhaFuncao1())

// console.log(`Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa1.apelidos[0]}, ${pessoa1.apelidos[1]} ou ${pessoa1.apelidos[2]}.`)


// Exercício 2 - com correção

// const trab1 = {
//     nome: "Rafael" ,
//     idade: 30,
//     profissão: "Professor"

// }
//  const trab2 = {
//             nome: "João" ,
//             idade: 38,
//             profissão: "Advogado"
        
//         }

// function imprimirDados (obj) {

//     let dados = [obj.nome, obj.nome.length, obj.idade, obj.profissão, obj.profissão.length]
    
//     return dados
    
//     }
    
//     console.log (imprimirDados(trab1))
//     console.log (imprimirDados(trab2))

    

// Exercício 2 - como havia sido realizado

// const trab1 = {
//     nome: "Rafael" ,
//     idade: 30,
//     profissão: "Professor"

// }

// function imprimir () {

//     const dados = [trab1.nome, trab1.nome.length-1, trab1.idade, trab1.profissão, trab1.profissão.length-1]
    
//     return dados
    
//     }
    
//     console.log (imprimir(trab1))
    

// const trab2 = {
//         nome: "João" ,
//         idade: 38,
//         profissão: "Advogado"
    
//     }

//     function imprimir1 () {

//         const dados = [trab2.nome, trab2.nome.length-1, trab2.idade, trab2.profissão, trab2.profissão.length-1]
        
//         return dados
        
//         }
        
        
//     console.log(imprimir1(trab2))

// console.log(trab1,trab2)


// Exercício 3 - com correção

    // const carrinho = []

    // const fruta1 =
    //       {nome: "tangerina",
    //       disponibilidade: true}
    
    // const fruta2 = {nome:"manga",
    //       disponibilidade: false}

    // const fruta3 = {nome: "uva",
    //       disponibilidade: true}
      
          
    // function incluir (fruta) {

    //     return carrinho.push(fruta)

    // }

    // incluir(fruta1)
    // incluir(fruta2)
    // incluir(fruta3)
    
   
    // console.log(carrinho)



    

// const carrinho = []
//    carrinho.push(fruta[0])
//    carrinho.push(fruta[1])
//    carrinho.push(fruta[2])
