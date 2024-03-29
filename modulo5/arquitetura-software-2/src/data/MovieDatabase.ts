import { BaseDatabase } from "./BaseDatabase";
import { Movie } from "../types/Movie";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create({ id, title, description, durationInMinutes, yearOfRelease }: any): Promise<void> {
    await MovieDatabase.connection
      .insert({
        id,
        title,
        description,
        duration_in_minutes: durationInMinutes,
        year_of_release: yearOfRelease
      })
      .into(MovieDatabase.TABLE_NAME);
  }
  async get(): Promise<Movie[]> {

    try {

        const movies: Movie[] = [];

        const result = await MovieDatabase.connection()
            .select("*")
            .from('LABEFLIX_MOVIE');

        for(let movie of result){
            movies.push(movie);
        }

        return movies;

    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
    }
}

}
