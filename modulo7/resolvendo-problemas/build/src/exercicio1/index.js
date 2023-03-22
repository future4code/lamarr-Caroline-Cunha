"use strict";
/*
função recebe uma string

adicionar letra - push()
retirar letra - pop()
substituir uma letra por outra push+pop

comparar com palavra para ver se é onde edit

**código inicial
oneEdit (string)=>
push()
pop()
push(),pop()
checaOneEdit
return a comparação

*/
// 
function isOneEdit(strA, strB) {
    // Se a diferença de tamanho entre as duas é maior que 1, não é oneEdit
    if (Math.abs(strB.length - strA.length) > 1)
        return false;
    // Se uma é maior que a outra, a maior obrigatoriamente deve incluir a outra
    if (strA.length > strB.length)
        return strA.includes(strB);
    if (strB.length > strA.length)
        return strB.includes(strA);
    // Passando pelos ifs acima, significa que as duas têm o mesmo tamanho
    // Nesse caso, varremos as strings contando quantas letras diferentes tem
    let charsDiffCount = 0;
    for (let i = 0; i < strA.length; i++) {
        if (strA[i] !== strB[i])
            charsDiffCount++;
    }
    // Retorna true se a diferença é 1, false caso contrário
    return charsDiffCount === 1;
}
// testes
console.log("1", "expected true", isOneEdit("banana", "banan"));
console.log("2", "expected true", isOneEdit("banana", "bananak"));
console.log("3", "expected true", isOneEdit("banana", "panana"));
console.log("4", "expected false", isOneEdit("banana", "bananaaa"));
