export class Calculadora{
    protected num_1: number;
    protected num_2: number;

    constructor(num_1: number, num_2: number){
        this.num_1 = num_1;
        this.num_2 = num_2;
    }

    public soma(): number{
        return this.num_1 + this.num_2;
    }
}

