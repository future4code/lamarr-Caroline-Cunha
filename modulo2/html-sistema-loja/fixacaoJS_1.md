<!-- Exercício JS 1 -->


function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
let salario = 2000
let comissao = (100*qtdeCarrosVendidos) + (valorTotalVendas*0.05)
let salarioFinalMes= salario+comissao
return salarioFinalMes
}