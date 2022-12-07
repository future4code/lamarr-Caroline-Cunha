import { Request, Response } from "express"
import connection from "../database/connection"
import { Product } from "../models/Product"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        const newProduct: Product = {
            name,
            price
        }

        await connection("Labe_Products").insert({
            name: newProduct.name,
            price: newProduct.price
        })
        
        res.status(201).send({ message: "Produto criado", product: newProduct })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}