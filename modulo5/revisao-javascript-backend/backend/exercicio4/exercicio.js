
const listaA = [

    { nome: "Banana"},
    { nome: "Laranja"}
    
]

const listaB = [

    { nome: "Cebola"},
    { nome: "Laranja"}
    
]

const listaC = [{...listaA}, {...listaB}]

console.log(listaC);