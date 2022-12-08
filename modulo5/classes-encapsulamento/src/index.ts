import { ping } from './endpoints/ping'
import { createUser } from './endpoints/createUser'
import { getUsers } from './endpoints/getUsers'
import { createProduct } from './endpoints/createProduct'
import { getProducts } from './endpoints/getProducts'

import app from './app';
import { Carro } from './class/Carros'

app.get("/ping", ping)



const carro1=new Carro("Gol", "vermelho");
console.log(carro1)
// console.log(carro1.cor)

carro1.acelerar();

carro1.frear();

const carro2=new Carro("lamburguini", "amarela");

// console.log(carro2.marca);

carro2.frear();

// carro1.marca="fusca"

// console.log(carro1)

carro1.frear();

carro1.frear();

carro1.setMarca("Ferrari")
console.log(carro1.getMarca());

carro1.frear();



// Exercício 1 - Create users
app.post("/users", createUser)

// Exercício 2 - Get users
app.get("/users", getUsers)

// Exercício 3 - Create product
app.post("/products", createProduct)

// Exercício 4 - Get products
app.get("/products", getProducts)
