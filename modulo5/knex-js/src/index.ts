import express from "express";
import cors from 'cors';


import { Request, Response} from "express";
import connection from "./dataBase/connection";


const app = express()

app.use(express.json())

app.use(cors())

console.log ("boa noite")


// Exercício 1 - Pegar ator com id

// const getActorById = async (id:string):Promise<any> => {
//     const result = await connection.raw(`
//         SELECT * FROM Actor
//         WHERE id ='${id}'
//     `)
//     return result [0] [0]
// }

// getActorById("001")
// .then(result => {
//     console.log(result)
// })
// .catch(err => {
//     console.log (err)
// });

// (async() => {
//     console.log(await getActorById("002"))
// })();

// app.get("/actor/:id", async (req:Request, res:Response):Promise<void> => {
//     try{
//         const id = req.params.id
//         console.log(await getActorById(id))
//         res.end()
//     }catch (error:any) {
//         console.log(error.message)
//         res.status(500).send("Unexpected error")
//     }
// })

const getActorByName = async (name:string):Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor
        WHERE name ='${name}'
    `)
    return result
}

getActorByName("Tony")
.then(result => {
    console.log(result)
})
.catch(err => {
    console.log (err)
});


// Porta

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});