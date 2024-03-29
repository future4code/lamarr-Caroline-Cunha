function obterEstatisticas(numeros) {
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    let soma = 0;
    for (let num of numeros) {
        soma += num;
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas;
}
const amostraIdade = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: obterEstatisticas
};
console.log(amostraIdade.obterEstatisticas(amostraIdade.numeros));
//# sourceMappingURL=exercicio2.js.map