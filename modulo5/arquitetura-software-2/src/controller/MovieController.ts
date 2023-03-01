import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const input = { 
        title: req.body.title, 
        description:req.body.description, 
        durationInMinutes: req.body.durationInMinutes, 
        yearOfRelease: req.body.yearOfRelease 
      } ;
      
      const movieBusiness = new MovieBusiness();
      await movieBusiness.create(input);

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

}


//   getAll = async (req: Request, res: Response) : Promise<void> => {	
//     try {
//         const users = await new UserBusiness().get();

//         res.send(users).status(200);

//     } catch (error:any) {
//         res.send({ message: error.message }).status(error.status);
//     }
//   }