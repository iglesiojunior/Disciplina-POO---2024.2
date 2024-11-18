class Tringulo{
    lado1: number;
    lado2:number;
    lado3: number;
    constructor(lado1:number,lado2:number,lado3:number){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    eh_tringulo():boolean{
        return (this.lado1 + this.lado2 > this.lado3) && (this.lado1 + this.lado3 > this.lado2) && (this.lado2 + this.lado3 > this.lado1)
    }
    eh_equilatero():boolean{
        return this.lado1 == this.lado2 && this.lado2 == this.lado3
    }
    eh_isosceles():boolean{
        return this.lado1 == this.lado2 || this.lado1 == this.lado3 || this.lado2 == this.lado3
    }
    eh_escaleno():boolean{
        return this.lado1 != this.lado2 && this.lado1 != this.lado3 && this.lado2 != this.lado3
    }
    
}

function main(){
    let triangulo = new Tringulo(2,2,2)
    console.log(triangulo.eh_tringulo())
    console.log(triangulo.eh_equilatero())
    console.log(triangulo.eh_isosceles())
    console.log(triangulo.eh_escaleno())
}