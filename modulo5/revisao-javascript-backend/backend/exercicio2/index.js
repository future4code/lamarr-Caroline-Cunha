
//Inclusão de novo cliente

const listaClientes = [
    {id: 1, nome:"Fulano"},
    {id: 2, nome:"Ciclano"},
    {id: 3, nome:"Beltrano"},
    {id: 4, nome:"Fulana"},
]

    
let cadastro = (id, nome) => {

    let novaLista = [...listaClientes]
    novaLista.push({id,nome})
    console.log(novaLista)
}

    cadastro(5,"Luke Skywalker")

    

// Geração de tabuada

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const tabuada = () => {
//     for (let i=0; 1<10; i++)
         
//     return numeros*i

// }
// console.log (tabuada)