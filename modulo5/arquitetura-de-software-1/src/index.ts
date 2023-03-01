import { app } from "./app";
import { UserController } from "./controller/UserController";
import { ping } from "./endpoints/ping";


const userController = new UserController()

app.post('/user', userController.createUser)

app.get('/user', userController.getAll)

app.delete('/user/:id', userController.deleteUser)





app.get("/ping",ping );