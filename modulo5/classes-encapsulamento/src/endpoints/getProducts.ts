import { Request, Response } from "express"
import { ProductDataBase } from "../class/ProductDataBase"
import connection from "../database/connection"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        
        // const result = await connection("Labe_Products").select()
        const productDB=new ProductDataBase(connection);
        const result = await productDB.getProduct();
        res.status(200).send({ products: result })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}