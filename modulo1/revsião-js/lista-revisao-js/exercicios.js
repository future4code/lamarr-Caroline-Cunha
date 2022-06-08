// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

// const array = [3,2,1,4,7]

function retornaTamanhoArray(array) {
   
    return array.length
}

// console.log(retornaTamanhoArray(array))




// EXERCÍCIO 02

function retornaArrayInvertido(array) {
  
return array.reverse()

}
// console.log(retornaArrayInvertido(array))

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


function retornaNumerosPares (array) {
    function pares (array) {
     return array % 2 === 0
 }             
 
 let soNumerosPares = array.filter (pares)
 
 return soNumerosPares
 
 } 
  

// let array2 = [1,2,3,4,5,6,7,8]

// function retornaNumerosPares (valor) {
//     if (valor % 2 ===0)
//     return valor
// }

// let numerosPares = array2.filter(retornaNumerosPares)

// console.log ((numerosPares))

// 
 


// EXERCÍCIO 05


   function retornaNumerosParesElevadosADois (array) {
    
    let novaArray = []
    const soPares = array.filter((array) => {
        if (array % 2 ===0){
            for (let num of soPares) {
                let quadrado = num*num
                novaArray.push(quadrado)
            }
            return novaArray
        }
    })
    
}

retornaNumerosParesElevadosADois()

    
    //     for (let numero of array) {
    //         if (numero % 2 ===0){
               
    //         let novoArray = []
    //         novoArray.push(numero^2)  
                               
    //         }
    
    //     return novoArray
    //         }
    //     }
    //    retornaNumerosPares()
    


    
// EXERCÍCIO 06

let arrayDado = [1,2,3,4,5,6,7]
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

// function retornaMaiorNumero(array) {
// let maiorNumero = 0
// for (let i=0; i<array.length; i++){
//     let numeroDoArray=array[i]
//     if (numeroDoArray>maiorNumero) {
//         maiorNumero=array[i]
//     }
// }
// return maiorNumero
// }

// console.log(retornaMaiorNumero(arrayDado))



// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
        const objeto = {
            maiorNumero: Math.max(num1,num2),
            maiorDivisivelPorMenor: Math.max (num1,num2) % Math.min (num1,num2) === 0,
            diferenca: Math.max (num1,num2) - Math.min (num1,num2),
        }
           return objeto
       }
    


// EXERCÍCIO 08

function retornaNPrimeirosPares(n) {
    
        const numPar = []
        
        for (let i=0; numPar.length < n; i++) {
        
            if (i % 2 === 0) {
                numPar.push(i)
        }
        }     
        return numPar
    }
    


// EXERCÍCIO 09

function classificaTriangulo(ladoA, ladoB, ladoC) {

if (ladoA === ladoB && ladoB === ladoC){

    return ("Equilátero")

}else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {

    return ("Escaleno")

}else{

    return ("Isósceles")
}

}



// EXERCÍCIO 10

function retornaSegundoMaiorESegundoMenor(array) {
      
        let lista = array.sort(function(a,b) {
             return a-b})  
            let segundoMaiorESegundoMenor = []
            segundoMaiorESegundoMenor.push([lista[lista.length-2], lista[1]])
            return (segundoMaiorESegundoMenor)
        }
     



// EXERCÍCIO 11

function retornaChamadaDeFilme(filme) {
    const listaFilme = {
        nome: "O Diabo Veste Prada",
        ano: 2006,
        diretor: "David Frankel",
        atores: ["Meryl Streep"," Anne Hathaway"," Emily Blunt"," Stanley Tucci"]
    }
 return `Venha assistir ao filme ${listaFilme.nome}, de ${listaFilme.ano}, dirigido por ${listaFilme.diretor} e estrelado por ${listaFilme.atores}.`
}

// function retornaChamadaDeFilme(filme) {
//     const listaFilme = {
//         "nome": "O Diabo Veste Prada",
//         "ano": 2006,
//         "diretor": "David Frankel",
//         "atores": ["Maryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
//     }
//  return `Venha assistir ao filme ${listaFilme.nome}, de ${listaFilme.ano}, dirigido por ${listaFilme.diretor} e estrelado por ${listaFilme.atores[0]}, ${listaFilme.atores[1]}, ${listaFilme.atores[2]}, ${listaFilme.atores[3]}.`
// }
// retornaChamadaDeFilme()





// EXERCÍCIO 12

function retornaPessoaAnonimizada(pessoa) {

    const listaPessoa = {
        nome: " ",
        idade: " ",
        email: "",
        endereco: ""
    }
    const listaPessoa1 = {...listaPessoa,
        nome: "ANÔNIMO"
        
    }
}

retornaPessoaAnonimizada()



// EXERCÍCIO 13A

function retornaPessoasAutorizadas(pessoas) {
    
    const lista = [
        { nome: "Paula", idade: 12, altura: 1.8},
        { nome: "João", idade: 20, altura: 1.3},
        { nome: "Pedro", idade: 15, altura: 1.9},
        { nome: "Luciano", idade: 22, altura: 1.8},
        { nome: "Artur", idade: 10, altura: 1.2},
        { nome: "Soter", idade: 70, altura: 1.9}
    ]
            for (let lista of pessoas) {
                if (lista.altura >= 1.5 && lista.idade > 14 && lista.idade && lista.idade < 60) {
                    const visitAutorizados = lista.push((lista) =>{
                    return visitAutorizados
            })
        }
    }
    }  


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    
        let ordemAlfabeticaPacientes = consultas.sort ((a,b) => a - b)
      
        return ordemAlfabeticaPacientes
}


// EXERCÍCIO 15B

function retornaArrayOrdenadoPorData(consultas) {
   
   let datasConsultaPacientes = consultas.sort((a,b) => a - b)

return datasConsultaPacientes

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


// Exercício 6 - Arrays

// const listaCompras = ["batata", "cenoura", "beterraba"]

// console.log(listaCompras[1])
// console.log("Tamanho da lista é de", listaCompras.length)

// listaCompras.push("mandioca")

// console.log (listaCompras)

// console.log ("Há um item chamado cenoura?", listaCompras.includes("cenoura"))

// listaCompras.splice(1,1)

// console.log (listaCompras)


// Exercício 7 - funções

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

// Exercício 8 - Objetos

// const pessoa = {
//     nome:"Gustavo",
//     idade:"45",
//     generoMusical:"Blues",
// }

// const novaPessoa = {...pessoa,
//     nome:"Rafaela",
//     idade:"45",
//     generoMusical:"Blues",
// }

// console.log (`O nome da pessoa é ${novaPessoa.nome}, ela tem ${novaPessoa.idade} anos e gosta muito de ${novaPessoa.generoMusical}.`)


// Exercício 9 - Condicionais

// const numUsuario = Number(prompt("Digite um número."))

// function analisarPar (n) {
//     if (n % 2 === 0) {
//         return `é par`

//     }else{
//         return `é impar`
//     }
// }

// console.log(analisarPar(numUsuario))

// COM IF/ELSE

// const nomeBicho = prompt("Qual o seu bicho de estimação? cachorro, gato, vaca, ou que outro bicho?")

// function verSomBicho (bicho) {

//     if (bicho === "cachorro") {

//         console.log("Au au")

//     } if (bicho === "gato") {

//         console.log("Miau")

//     }else if (bicho === "vaca"){
//         console.log ("Muuu")

//     }else{
//         console.log("Sem barulho reconhecido :(")
//     }
// }

// verSomBicho(nomeBicho)

// COM SWITCH CASE

// const nomeBicho = prompt("Qual o seu bicho de estimação? cachorro, gato, vaca, ou que outro bicho?")

// switch (nomeBicho) {
//     case "cachorro":
//         console.log ("Au au")
//         break
//     case "gato":
//         console.log ("Miau")
//         break
//     case "vaca":
//         console.log ("Muuu")
//         break
//     default:
//         console.log ("Sem barulho reconhecido :(")
//         break  
// }


// function verSomBicho (bicho) {

// EXERCÍCIO 10 - LAÇOS


// const arrayNum = [11,15,18,14,12,13]
// let maior = -Infinity
// for (let i = 0; i < arrayNum.length; i++) {
//     if (arrayNum[i]> maior) {
//         maior = arrayNum[i]
//     }
// }

// console.log(`O maior número é ${maior}`)

// const arrayNum = [11,15,18,14,12,13, 54]

// let maior = -Infinity

// for (let numero of arrayNum) {
//     if (numero> maior) {
//         maior = numero
//     }
// }

// console.log(`O maior número é ${maior}`)


// const prof = {

//     nome: "Letícia Chijo",
//     idade: 27,
//     aulasFront: true,
//     aulasBack: false,
//     jogosFavoritos: ["Chrono Trigger", "Undertale", "Hollow Knight"],
//     contaPiada: () => console.log("É pave ou pacume?"),
//     pet: {
//         nome: "Polly",
//         especie: "cachorrinho",
//         raca: "Lhasa Apso",
//         snacksFavoritos: ["biscoito", "maçã", "frango"]
//     }
// }

// let aulasBack
// let aulasFront

// if (aulasFront) {
//     aulasFront = "Dou"
// }else{
//     aulasFront = "Não dou"
// }

// if (aulasBack) {
//     aulasBack = "Dou"
// }else{
//     aulasBack = "Não dou"
// }

// const frase = `Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos. ${prof.aulasFront} aula de front  e ${prof.aulasBack} aula de back. Meus jogos favoritos são ${prof.jogosFavoritos}. Tenho uma cachorrinha chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snacksFavoritos[1]} `
// console.log (frase)

// prof.contaPiada()


// EXERCÍCIO 11 - 

// Exercício WarmUp Números Primos
// function analisarNumPrimo (n) {
//     let primo = 1
//     for (let i = n; i >=1; i++)
//     primo = i
//     if (n/1 === n && n/n === 1 ) {
//         console.log( `É primo`)
//     } else {
//         console.log( `Não é primo`)
//     }
// }
// 
// function analisarNumPrimo (n) {
//       let divisores = 0
//         for (let i = 0; i <=n; i++)
    
//         if (n/1 === n && n/n === 1 ) {
//             console.log(`É primo`)
       
//         } else {
//             console.log( `Não é primo`)
//         }
//     }

//     console.log (analisarNumPrimo(20))

// function checaNumeroPrimo(n) {
//     let divisores = 0
    
//     for (let i = 1; i <= n; i++)
//     if (n % i == 0) {
//     divisores++;
//     }
    
//     if (divisores == 2){
//     return 'É primo';
//     } else {
//     return 'Não é primo';
//     }
//     }
    
//     checaNumeroPrimo(2)