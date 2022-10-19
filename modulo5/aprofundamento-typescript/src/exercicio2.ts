/*
a)
Entrada: array(precisa tipar com objeto)
Saída: objeto
*/

type Statistics = {
    maior: number,
    menor: number,
    media: number
}

// b) 

// soma - number
// num - number
// numerosOrdenados - objeto

function obterEstatisticas(numeros:number[]):Statistics {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type Amostra = {
    numeros:number[],
    obterEstatisticas:(numeros:number[])=>Statistics
    
}

const amostraIdade:Amostra={
    numeros:[21,18,65,44,15,18],
    obterEstatisticas: obterEstatisticas
}

console.log(amostraIdade.obterEstatisticas(amostraIdade.numeros))