import { baseDataBase } from "./baseDataBase";
import { user } from "../types/user";


export class userDataBase extends baseDataBase {
    insertUser = async(user:user): Promise<void> => {
        try{
            await userDataBase.connection.insert({
               id: user.id,
               name: user.name,
               nickname: user.nickname,
               email: user.email,
               password: user.password
            }).into('User')
        }catch (error:any) {
            throw new Error(error.message)
        }
    
    }
}