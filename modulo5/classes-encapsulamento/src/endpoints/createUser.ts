import { Request, Response } from "express"
import connection from "../database/connection"
import { User } from "../models/User"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

        const newUser: User = {
            email,
            password
        }

        await connection("Labe_Users").insert({
            email: newUser.email,
            password: newUser.password
        })
        
        res.status(201).send({ message: "Usuário criado", user: newUser })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}