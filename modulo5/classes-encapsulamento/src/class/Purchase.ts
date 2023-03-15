export class Purchase {
   private id: string;
   private userId: string;
   public productId: string;
   public quantity: number;
   public totalPrice: number;

   constructor(id:string, userId: string, productId: string, quantity: number, totalPrice: number){
        this.id=id;
        this.userId=userId;
        this.productId=productId;
        this.quantity=quantity;
        this.totalPrice=totalPrice
   }

   public getId():string {
    return this.id;
    }
    public getUserId():string {
    return this.userId;
}
}