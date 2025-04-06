import { suma } from "../../src";

export const testSuma = ()=>{
    test("suma dous numeros",()=>{
        expect(suma(2,2)).toBe(4)
    })
}