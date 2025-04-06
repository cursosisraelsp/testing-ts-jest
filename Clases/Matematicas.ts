export class Matematicas{
    valor1: number
    valor2: number
    constructor(valor1:number,valor2:number){
        this.valor1 = valor1,
        this.valor2 = valor2
    }
    suma():Number{
        return this.valor1 + this.valor2
    }
}