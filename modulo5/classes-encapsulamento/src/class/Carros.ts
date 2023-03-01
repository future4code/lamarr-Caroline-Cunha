
export class Carro{
    private marca: string
    private cor: string
    constructor (marca:string, cor:string){
        this.marca=marca;
        this.cor=cor
    }

    public getMarca(){
        return this.marca;
    }

    public getCor(){
        return this.cor;
    }

    public setMarca(newMarca:string){
        this.marca=newMarca;
    }
    public setCor(newCor:string){
        this.cor=newCor;
    }
        

    public acelerar(){
        console.log(`O carro ${this.marca} da cor ${this.cor} está acelerando.`)
    }
    public frear(){
        console.log(`O carro ${this.marca} da cor ${this.cor} está freando.`)
    }
}
