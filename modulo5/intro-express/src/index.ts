import express, {Request, Response} from "express"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


// Exercicio 1

app.get("/", (req:Request, res:Response) => {
    res.send("Hello from Express")
})


// Exercício 2

type TipoUser = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

// Exercício 3

    const user:TipoUser[] = [
        {
            id: 1,
            name: "Yoda",
            phone: 3333333,
            email:"mestreyoda@rebel.com",
            website: "www.starwars.com"
        },
        {
            id: 2,
            name: "Obi One",
            phone: 3333334,
            email:"mestrekenobi@rebel.com",
            website: "www.starwars.com"
        },
        {
            id: 3,
            name: "Luck Skywalker",
            phone: 3333335,
            email:"luckjedi@rebel.com",
            website: "www.starwars.com"
        },
        {
            id: 3,
            name: "Leia Organa",
            phone: 333336,
            email:"leia@rebel.com",
            website: "www.starwars.com"
        }
    ]

// Exercício 4

app.get("/user", (req:Request, res:Response) => {
    
   if (!user.length){
    res.status(401).send("Tente novamente")
   }
    res.status(201).send(user)
})

// Exercício 5

type TipoPosts={
    id: number,
    title: string,
    body: string,
    userId: number
}

// Exercício 6

const postagem:TipoPosts[] =[
    {
        id: 1,
        title: "Mestre Jedi",
        body: "Conselho de Jedis",
        userId: 1 
    },
    {
        id: 2,
        title: "Mestre Jedi",
        body: "Parte da rebelião",
        userId: 2 
    },
    {
        id: 3,
        title: "Aprendiz de Jedi",
        body: "Parte da rebelião",
        userId: 3  
    },

]
   




app.listen(3003, ()=>{
    console.log("Server is running in http://localhost:3003");
});