export class Calculadora{
    private operando_01: number;
    private operando_02: number;

    constructor(operando_01: number, operando_02: number){
        this.operando_01 = operando_01;
        this.operando_02 = operando_02;
    }

    soma(): number{
        return this.operando_01+this.operando_02;
    }

    subtracao():number{
        return this.operando_01 - this.operando_02;
    }
}