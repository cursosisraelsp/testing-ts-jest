import type { tipoFuncioSuma } from "../tipos/tiposFuncions";

export class ClaseTest{
    private operador1;
    private operador2;
    private resultado;
    constructor(operador1:number,operador2:number,resultado:number){
        this.operador1 = operador1;
        this.operador2 = operador2;
        this.resultado = resultado;
    }

    probaSuma(funcion:Function):void{
        describe("estou dentro dunha clase",()=>{
            test("sumo?",()=>{
                expect(funcion(this.operador1,this.operador2)).toBe(this.resultado)
            })
        })
    }
    probaSuma2(funcion:tipoFuncioSuma):void{
        describe("estou dentro dunha clase con funcion tipo",()=>{
            test("sumo?",()=>{
                expect(funcion(this.operador1,this.operador2)).toBe(this.resultado)
            })
        })
    }
}