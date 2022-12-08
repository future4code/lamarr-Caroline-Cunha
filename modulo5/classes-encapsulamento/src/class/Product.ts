
export class Product {
    public name: string
    public price: number

    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }

    public getName():string {
        return this.name;
    }
    public getPrice():number {
        return this.price;
    }

    public setName(newName:string):void {
         this.name=newName;
    }

    public setPrice(newPrice:number) {
        this.price=newPrice;
   }
}
