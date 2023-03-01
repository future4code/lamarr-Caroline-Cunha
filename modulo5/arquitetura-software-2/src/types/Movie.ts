export class Movie {
  constructor(
        public id: string,
        public title: string,
        public description: string,
        public durationInMinutes: number,
        public yearOfRelease: number
      ) { }
      
      getId() {
        return this.id
      }
    
      getTitle() {
        return this.title
      }
    
      getDescription() {
        return this.description
      }
    
      getDurationInTime() {
        return this.durationInMinutes
      }
    
      getYearOfRelease() {
          return this.yearOfRelease
        }
    
      setId(newId: string) {
        this.id = newId
      }
    
      setTitle(newTitle: string) {
        this.title = newTitle
      }
    
      setDescription(newDescription: string) {
        this.description = newDescription
      }
    
      setDurationInMinutes(newDurationInMinutes: number) {
        this.durationInMinutes = newDurationInMinutes
      }
    
      setYearOfRelease(newYearOfRelease: number) {
          this.yearOfRelease = newYearOfRelease
        }  
  }


  // id: string,
  // title: string,
  // description: string,
  // duration_in_time: number,
  // year_of_release: number