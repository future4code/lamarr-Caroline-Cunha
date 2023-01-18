import { baseDataBase } from "./baseDataBase";
import { user } from "../types/user";



export class userDataBase extends baseDataBase {
    
    insertUser = async(input:any): Promise<void> => {
        try{
            await userDataBase.connection.insert(input).into('User_Arq')
        }catch (error:any) {
            throw new Error(error.message)
        }
    }

   async get(): Promise<user[]> {

        try {

            const users: user[] = [];

            const result = await userDataBase.connection()
                .select("*")
                .from('User_Arq');

						for(let user of result){
								users.push(user);
						}

            return users;

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    
    public async deleteUser(
        id: string
      ): Promise<void> {
        try {
          await userDataBase.connection
            .from('User_Arq')
            .where({ id })
            .delete()
            
        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }
}