// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

const array = [3,2,1,4,7]

function retornaTamanhoArray(array) {
   
    return array.length
}

console.log(retornaTamanhoArray(array))

// EXERCÍCIO 02

function retornaArrayInvertido(array) {
  
return array.reverse()

}
console.log(retornaArrayInvertido(array))

// Desafio do Exercício 2

// function arrayInvertido (array) {

//     const primeiro = array [0];
//     const segundo = array [1];
//     const terceiro = array [2];
//     const quarto = array [3];
//     const quinto = array [4];

//     array [0] = quinto
//     array [1] = quarto
//     array [2] = terceiro
//     array [3] = segundo
//     array [4] = primeiro

//     return array
// }

// console.log (arrayInvertido(array))


// EXERCÍCIO 03

// const array1 = [36,12,56,7,3]

function retornaArrayOrdenado(array) {
  
     array.sort(function(a,b) {
         return a-b
     })

     return array
}

console.log (retornaArrayOrdenado(array))


// EXERCÍCIO 04

// let array2 = [1,2,3,4,5,6,7,8]

// function retornaNumerosPares (valor) {
//     if (valor % 2 ===0)
//     return valor
// }

// let numerosPares = array2.filter(retornaNumerosPares)

// console.log ((numerosPares))

function retornaNumerosPares (array) {
    function NumerosPares (array) {
   
        return array % 2 === 0
                 
  }
let soNumerosPares = array.filter (NumerosPares)

return soNumerosPares

}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    function NumerosPares (array) {
        return array % 2 === 0           
  }
let soNumerosPares = array.filter (NumerosPares)

    return soNumerosPares

    const paresAoQuadrado = function (valor, array) {
         
        
    }
}



// EXERCÍCIO 06

// let arrayDado = [1,2,3,4,5,6,7]
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for (let posicao = 0; posicao<array.length; posicao++){
        let numeroDoArray=array[posicao]
        if(numeroDoArray>maiorNumero) {
            maiorNumero=array[posicao]
        }
    }
    return maiorNumero
}

// console.log(retornaMaiorNumero(arrayDado))

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {


}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}


// Exercício 1

// const nomeProduto = prompt ("!Informe o nome do produto.")
// let precoProduto = Number(prompt ("Informe o preço do produto."))
// precoProduto = precoProduto - 1

// console.log (`O preço da ${nomeProduto} é R$ ${precoProduto} reais.`)


// Exercício 2

// let num1 = Number(prompt("Digite um número."));

// let num2 = Number(prompt("Digite outro número."))

// console.log ("soma", num1+num2)
// console.log ("subtração", num1-num2)
// console.log ("multiplicação", num1*num2)8
// console.log ("divisão", num1/num2)
// console.log ("resto", num1%num2)


// Exercício 3

// const numeroSorteado = 4
// let numeroRecebido = Number(prompt("Digite um número de 1 a 10."))

// console.log (`O número sorteado foi ${numeroSorteado}`)

// if (numeroRecebido===numeroSorteado){
//     console.log(`Seu número é igual ao número sorteado`)
// }
// else if (numeroRecebido > numeroSorteado) {
//     console.log("Seu número é maior que o número sorteado")
//     }else{
//         console.log ("Seu número é menor que o número sorteado")
//     }
// console.log ()


// Exercício 4

// const idade = Number(prompt("Qual a sua idade?"))
// const altura = Number(prompt("Informe sua altura."))
// const coracao = prompt("Você tem algum problema cardíaco? Responda s (sim) ou n (não).")

// if (idade >=18 && altura>=1.6 && coracao==="n") {

//     console.log("Você pode entrar no brinquedo radical.")
// } else{

//     console.log("Você não pode entrar no brinquedo radical.")
// }

// Exercício 5


// console.log (`Hoje vou comer cenoura, ebaaa`)

// const frase = " Hoje eu vou comer cenoura, ebaaa "

// console.log (frase, frase.length)
// console.log (frase.trim(), frase.length)
// console.log (frase.toLowerCase())
// console.log ("A palavra comer está presente?", frase.includes("comer"))
// console.log ("A palavra batata está presente?", frase.includes('batata'))

// const novaFrase = frase.replaceAll ('cenoura', 'batata')

// console.log(novaFrase)

// console.log ("A palavra comer está presente?", novaFrase.includes("comer"))
// console.log ("A palavra batata está presente?", novaFrase.includes('batata'))


// Exercício 6

// const listaCompras = ["batata", "cenoura", "beterraba"]

// console.log(listaCompras[1])
// console.log("Tamanho da lista é de", listaCompras.length)

// listaCompras.push("mandioca")

// console.log (listaCompras)

// console.log ("Há um item chamado cenoura?", listaCompras.includes("cenoura"))

// listaCompras.splice(1,1)

// console.log (listaCompras)


// Exercício 7

// const array = [6,7,8,9,10]

// function criarArray (arrayNumeros) {

//     const primeiroNumero = array[0]/2
//     const ultimoNumero = array[array.length-1]/2
    
//     array[0] = primeiroNumero
//     array[array.length-1] = ultimoNumero
//     return arrayNumeros
// }

// console.log(criarArray(array))

// let criarArray1 = function (arrayNumeros) {
//     const primeiroNumero = array[0]/2
//     const ultimoNumero = array[array.length-1]/2
    
//     array[0] = primeiroNumero
//     array[array.length-1] = ultimoNumero
//     return arrayNumeros
// }
// console.log(criarArray1(array))

// let criarArray2 = (arrayNumeros)=>{
//     const primeiroNumero = array[0]/2
//     const ultimoNumero = array[array.length-1]/2
    
//     array[0] = primeiroNumero
//     array[array.length-1] = ultimoNumero
//     return arrayNumeros
// }
// console.log(criarArray2(array))