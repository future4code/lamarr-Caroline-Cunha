// Exercício 1

// a)
// O acesso aos parâmetros passados na linha de comando é feito pelos índices,
//  podendo ser passados valores para os parâmetros do objeto.


// b)

const name = process.argv[2]
const age = Number(process.argv[3])


function today (name, age) {
    return (`Olá, ${name}! Você tem ${age} anos.`)
}

const todayAnswer = today("Carol", 47)
console.log(todayAnswer)


// c)

function plusSevenYears (name, age, newAge) {
    return (`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${newAge}.`)
}

const sevenYears=plusSevenYears("Carol", 47, 54)
console.log(sevenYears)

