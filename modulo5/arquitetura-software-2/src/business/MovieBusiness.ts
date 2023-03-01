import { MovieDatabase } from "../data/MovieDatabase"
import { v4 as generateId } from 'uuid'
import { Movie } from "../types/Movie"

export class MovieBusiness {
  async create(input: any):Promise<void> {
    if (!input.title || !input.description || !input.durationInMinutes || !input.yearOfRelease) {
      throw new Error("Dados inválidos")
    }

    const id = generateId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
        id,
        title: input.title, 
        description:input.description, 
        durationInMinutes: input.durationInMinutes, 
        yearOfRelease: input.yearOfRelease
    })
  }

  async get(): Promise<Movie[]>  {
				
    return await new MovieDatabase().get();
}

}
