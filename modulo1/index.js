// Interpretação de código

// Exercício 1
/*
const bool1 = true;
const bool2 =false;
const bool3 = !bool2;

let resultado = bool1 && bool2;
console.log("a. ", resultado);
resposta - a. false

resultado = bool1 && bool2 && bool3);
console.log("b.", resultado);
resposta - b. false

resultado = !resultado && (bool1 || bool2);
console.log("c.", resultado);
resposta - c. true

console.log("d.", typeof resultado);
resposta - d. 
*/

// Exercício 2
/*
let primeiroNumero = prompt ("Digite um numero!");
let segundoNumero = prompt ("Digite outro numero!");

const soma = primeiroNumero + segundoNumero;

console.log(soma)

resposta - o prompt pergunta ao usuário algo, e os números deverão variar
de acordo com a pessoa que responder. Desta forma, a variável não deveria
ser const, e sim let
a soma que deverá aparecer não será constante.
*/

// Exercício 3

/* resposta - deverá trocar a declaração de const para let.*/



// Exercícios de escrita de código


// Exercício 1

let idadePessoa = prompt ("Qual é a sua idade?");
let idadeAmiga = prompt ("Amiga, qual a sua idade?");

console.log("Sua idade de", idadePessoa, "anos é >= que", idadeAmiga)

// Exercício 2

/*let numeroPar = prompt ("Indique um número par!");
let restoDivisao = (nuemeroPar / 2)
*/


// Exercício 3

let idade = prompt ("Qual a sua idade?");
let idadeMes = idade * 12
let idadeDias = idadeMes * 30
let idadeHoras = idadeDias * 24

console.log("Tenho", idade, "anos");
console.log("Esta idade em meses significa", idadeMes, "meses");
console.log("Já em dias esta idade correspoderia a", idadeDias, "dias");
console.log("Por fim, em horas esta idade correspoderia a", i52dadeHoras, "horas");


// Exercício 4

let valor1 = prompt ("Informe um número maior ou igual a 6.");
let valor2 = prompt ("Informe um número diferente do primeiro");

let resultado = (valor1 >= valor2);
let resultado1 = (valor1 === valor2);
// let resultado2 = (valor1 ) - buscar!! não sei fazer
// let resultado3 = buscar !! não sei fazer

console.log("O primeiro número é maior que o segundo?", resultado)
console.log("O primeiro número é igual ao segundo?", resultado)