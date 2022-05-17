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


function imprimeIdade(anoAtual, anoNascimento) {

let anoAtual = Number(prompt("Em que ano estamosl?"))
const anoNascimento = Number(prompt ("Qual seu ano de nascimento?"))

return anoAtual-anoNascimento
console.log (imprimeIdade(2020,1990))
}




// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 
  console.log (calculaIMC)
  return peso/ (altura*altura)

}




// EXERCÍCIO 04


function imprimeInformacoesUsuario() {
  
  const NOME = Alice;
  const IDADE = Number(28);
  const EMAIL = alice@gmail.com;

  const frase = (`Meu nome é ${NOME}, tenho ${IDADE} anos, e o meu email é ${EMAIL}`)

  console.log (imprimeInformacoesUsuario(frase))
  return frase
 
   // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}




// EXERCÍCIO 05
function imprimeTresCoresFavoritas(coresFavoritas) {

  const cor1 = prompt ("Digite sua cor favorita.")
  const cor2 = prompt ("Digite mais uma cor sem repetir a anterior.")
  const cor3 = promot ("Digite uma terceira cor favorita")

  coresFavoritas = [cor1, cor2, cor3]

  return coresFavoritas
}


// EXERCÍCIO 06


function retornaStringEmMaiuscula(string) {
  
  console.log(retornaStringEmMaiuscula)
  return string.toUppercase()

}




// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}