import { ping } from './endpoints/ping'
import { createUser } from './endpoints/createUser'
import { getUsers } from './endpoints/getUsers'
import { createProduct } from './endpoints/createProduct'
import { getProducts } from './endpoints/getProducts'

import app from './app';

app.get("/ping", ping)

// Exercício 1 - Create users
app.post("/users", createUser)

// Exercício 2 - Get users
app.get("/users", getUsers)

// Exercício 3 - Create product
app.post("/products", createProduct)

// Exercício 4 - Get products
app.get("/products", getProducts)
