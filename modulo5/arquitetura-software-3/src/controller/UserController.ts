import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";

export class UserController {
   public createUser = async (req: Request,res: Response) => {
      try {
         const input = {
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password
         }
         const userBusiness = new UserBusiness()
         
         await userBusiness.createUser(input)

         res.status(201).send({ message: "Usuário criado!" })
      } catch (error: any) {
         res.status(400).send(error.message)
      }
   }

   public getUsers = async (req: Request, res: Response) => {
      try {

         const userBusiness = new UserBusiness()
         const users = await userBusiness.getUsers()

         res.status(201).send(users)
      } catch (error: any) {
         res.status(400).send(error.message)
      }
   }
}

