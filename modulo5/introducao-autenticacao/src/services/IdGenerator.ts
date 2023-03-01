import { v4 } from "uuid"


export class IdGenerator {
    public generatedId = () => {
        return v4 ()
    }
}