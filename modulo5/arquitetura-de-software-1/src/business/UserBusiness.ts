import { userDataBase } from "../dataBase/userDataBase"
import { user } from "../types/user"

export class UserBusiness {
    
    public createUser = async (input:any): Promise<void> => {

        try{
            const { name, email, password } = input

            if (!name || !email || !password ) {
                throw new Error('Preencha os campos "name", "email" e "password"')
            }

            if(email.indexOf("@") === -1){
                throw new Error("Email inválido")
            }
            if(password.length<6){
                throw new Error("A senha deve ter no mínimo 6 caracteres")
            }

            const id: string = Date.now().toString()

            const UserDataBase = new userDataBase()

            await UserDataBase.insertUser({
                     id,
                     name,
                     email,
                     password
                  })
            
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
   
    async get(): Promise<user[]>  {
				
        return await new userDataBase().get();
    }



    deleteUser = async (input: {id:string}) => {
				
        if(!input.id){
            throw new Error("Insira um id!")
        }

            return await new userDataBase().deleteUser(input.id);
        }
};


