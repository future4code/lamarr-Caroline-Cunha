// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  
  return num1 + num2
}
console.log (soma (1,5))

// // EXERCÍCIO 0B
function imprimeMensagem() {
  
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo(altura,largura) {

    return altura*largura
 }


 // EXERCÍCIO 02


  let anoAtual = Number(prompt("Em que ano estamos?"))
  const anoNascimento = Number(prompt ("Qual seu ano de nascimento?"))

function imprimeIdade() {

  let idade = anoAtual - anoNascimento
  console.log (idade)
  // return anoAtual - anoNascimento

}




// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 
  console.log (calculaIMC)
  return peso/ (altura*altura)

}



// EXERCÍCIO 04


  const NOME = prompt("Digite seu nome:");
  const IDADE = prompt("Digite sua idade:")
  const EMAIL = prompt("Digite seu email:")


function imprimeInformacoesUsuario() {
  

  const frase = (`Meu nome é ${NOME}, tenho ${IDADE} anos, e o meu email é ${EMAIL}`)

  console.log (imprimeInformacoesUsuario(frase))

   
   // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}



// EXERCÍCIO 05


  const cor1 = prompt ("Digite sua cor favorita.")
  const cor2 = prompt ("Digite mais uma cor sem repetir a anterior.")
  const cor3 = prompt ("Digite uma terceira cor favorita, diferente das 2 anteriores")


function imprimeTresCoresFavoritas(coresFavoritas) {

    coresFavoritas = [cor1, cor2, cor3]

  console.log(coresFavoritas)
  
}


// EXERCÍCIO 06


function retornaStringEmMaiuscula(string) {
  
    console.log(oi)
  
  return string.toUppercase()

}




// EXERCÍCIO 07

function calculaIngressosEspetaculo(custo, valorIngresso) {
    return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
     return (string1.legth === string2.length)

}


// EXERCÍCIO 09

function retornaPrimeiroElemento(array) {

  return array (0)

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
    console.log(array.length) 
  
    return 


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

let str1 = string1.toUpperCase()
let str2 = string2.toUpperCase()

return (str1===str2)
}

// EXERCÍCIO 13

function checaRenovacaoRG() {
  
  let year = Number(prompt("Em que ano estamos?"))
  const birth = Number(prompt ("Qual seu ano de nascimento?"))
  let RG = Number(prompt("Informe o ano de impressão do seu RG:"))

  let age = year - birth 

  let renovAteDezenov = age <= 19
  let renovEntre = (age >= 20) && (age <= 50)
  let renovMaiorCinque = age > 50


  console.log (renovAteDezenov)
  console.log (renovEntre)
  console.log (renovMaiorCinque)
  
  }

// EXERCÍCIO 14

function checaAnoBissexto(ano) {




}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  
  let maiorDezoito = prompt ("Você tem mais de dezoito anos?")
  let escolaridade = prompt ("Você possui ensino médio completo?")
  let disponibilidade = prompt ("Você possui disponibilidade exclusiva durante os horários do curso?")

  let maioridade = maiorDezoito > 18
  
  let resultado = maioridade && escolaridade && disponibilidade

  console.log (resultado)

}