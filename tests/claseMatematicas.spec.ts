import { Matematicas } from "../Clases/Matematicas";
describe("Probas da clase Matemáticas",()=>{
    test("Clase matematicas ",()=>{
        let instanciaMates = new Matematicas(2,3);
    
        expect(instanciaMates.suma()).toEqual(5)
    })
})
