import { Calculadora } from "./calculadora";

export class CalculadoraCientifica extends Calculadora{
    public exponenciar():number{
        return this.num_1**this.num_2;
    }
}