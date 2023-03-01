import { task } from "../types/task";
import { BaseDatabase } from "./BaseDatabase";

export class TaskDatabase extends BaseDatabase {

    private taskTable = 'Architecture_Task'

    public insertTask = async (
        task: task
    ) => {
        try {
            TaskDatabase.connection.initialize()
            await TaskDatabase.connection(this.taskTable)
                .insert({
                    id: task.id,
                    title: task.title,
                    description: task.description,
                    deadline: task.deadline,
                    author_id: task.authorId
                })
        } catch (error: any) {
            throw new Error(error.message)
        }finally{
            console.log("conexão encerrada!");
            TaskDatabase.connection.destroy();
         }
    }
    
    public getTasks = async () => {
        try {
            TaskDatabase.connection.initialize()
            const allTasks=await TaskDatabase.connection.select().from(this.taskTable)
            return allTasks;
        } catch (error: any) {
            throw new Error(error.message)
        }finally{
            console.log("conexão encerrada!");
            TaskDatabase.connection.destroy();
         }
    }
}
