import express, {Request, Response} from "express"
import { arrayProducts } from "./data"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

console.log ("oi")

// Exercício 1

app.get("/test", (req:Request, res:Response)=>{
    res.send("Servidor rodando na porta 3003!")
})

// Exercício 4

app.put("/addProduct", (req:Request, res:Response)=>{
    
    const {name, price} = req.body

    if( !name || !price) {
        res.status(400).send("Algo deu errado. Verifique se os parâmetros estão corretos.")
    }
    
    const findProduct = arrayProducts.find((element)=> {
        return element.name === name
    })

    if (findProduct){
        res.status(400).send("Este produto já existe.")
    }else{
        arrayProducts.push(
            {
                id: Date.now().toString(),
                name: name,
                price: price
            }
        )
    }
    res.status(200).send({arrayProducts})

})


// Exercício 5


app.get('/allProducts', (req:Request, res:Response)=>{
    res.status(200).send(arrayProducts)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});