import { Request, Response } from "express";
import { TaskBusiness } from "../business/TaskBusiness";


export class TaskController {

    public createTask = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { title, description, deadline, authorId } = req.body

            const input = {
                title,
                description,
                deadline,
                authorId
            }

            const taskBusiness = new TaskBusiness()

            await taskBusiness.createTask(input)
            
            res.status(201).send({ message: "Tarefa criada!" })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }


    public getTasks= async (req: Request,res: Response) => {
        try {
    
            const taskBusiness = new TaskBusiness()

            const allTasks= await taskBusiness.getTasks()
            
            res.status(201).send(allTasks)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}
