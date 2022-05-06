// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO


/* 
Exercício 1

a)
nome: "Amanda Rangel", apelido: "Mandi"
nome: "Laís Petra", apelido: Laura"
nome: "Letícia Chijo", apelido: "Chijo"
Será impresso no console todos dados contidos no array. No caso são objetos, com suas chaves e valores.

Exercício 2

["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
Os nomes estão sendo lidos separadamente, formando um array apenas com nomes.

Exercício 3

["Mandi, "Laura"]
Neste a negação !== Chijo elimina Chijo da Array C.

*/


// Exercício de Escrita de Código

// Exercício 1

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// a)
// let listaNomePets = pets.map((item, indice, Array) => {
//     return item.nome
// })
//     console.log(listaNomePets)


// b)
    // let listaPetSalsicha = pets.filter((item, indice, array) => {
    //     return item.raca === "Salsicha"
    // })
    //     console.log(listaPetSalsicha)

// c)

// let novaArray = pets.filter ((item, indice, array) => {
    
//    return item.raca==="Poodle"
        
//     })

// console.log (novaArray)

// const arrayNomePoodle = novaArray.map((item) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
// })
    
// console.log(arrayNomePoodle)




// Exercício 2


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a)

// let listaProdutos = produtos.map((item, indice, Array) => {
//     return item.nome
// })
//     console.log(listaProdutos)

// b) 

// const listaProdutosPrecos = produtos.map((item) => {     
//     return {
//         nome: item.nome, 
//         preco: item.preco*0.95
//     }            
//  })
//  console.log (listaProdutosPrecos)


 // c)
// let listaBebidas = produtos.filter((item, indice, array) => {
//         return item.categoria === "Bebidas"
//     })
//         console.log(listaBebidas)


// d) 

// const listaYpe = produtos.filter((item) => {
        
//     return item.nome.includes("Ypê")
//     })
    
//     console.log(listaYpe)



// // e)

// const imprimiFrase = listaYpe.map ((item) => {

//     return `Compre ${item.nome} por ${item.preco}.`

// })

// console.log (imprimiFrase)










// Praticando:

// const verificarPar = (numero, imprimir) => {
// if(numero % 2 === 0) {
//     const resultado = numero/2
//     imprimir(resultado)
// }


// const imprimeMensagem = () => {

//     console.log ("O resultado da sua conta é", numero, ".")
// }
// verificarPar(4, imprimeMensagem)


// const verificarPar = (numero, imprimir) => {
//     if(numero % 2 === 0) {
//         const resultado = numero/2
//         imprimir(resultado)
//          }
//     }
    
//     verificarPar(30, (valor) => {
//             console.log ("O resultado da sua conta é", valor, ".")
//     })
    

// Exercício 1

// function verificarImpar (numero, imprimir) {
//     if (numero %2!==){ 
//         imprimir ()
//     }
// }
// function imprimir () {
//     console.log ("Sim, é ímpar")
// }

// verificarImpar (33,imprimir)


// function calcula (n1, n2, operacao) {
//     console.log (operacao(n1,n2))
// }

// function soma (n1,n2) {
//     return n1 + n2
// }

// function subtracao (n1,n2) {
//     return n1 - n2
// }

// function multiplicacao (n1, n2) {
//     return n1*n2
// }

// calcula (4,5,soma)

// calcula (7,2, subtracao)

// calcula (3,3,multiplicacao)



// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//     ]
    

//     const nomeDosPokemons = pokemons.map((pokemon, indice, array) => {
//     return pokemon.nome
//     })

//     console.log (nomeDosPokemons)

//     const tipoDosPokemons = pokemons.map((pokemon, indice, array) => {
//         return pokemon.tipo
//     })

//     console.log(tipoDosPokemons)

// let numeros = [4,9,30,47,66,89, 92]

// function mensagem (valorAtual, indice) {
//     return `O elemento ${indice} é ${valorAtual}` 
// }

// const listaNova = numeros.map(mensagem)

// console.log (listaNova)

