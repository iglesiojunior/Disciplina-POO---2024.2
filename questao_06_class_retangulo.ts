class Retangulo {
    l1: number = 0;
    l2: number = 0;

    calcularArea(): number{
        return this.l1* this.l2;
    }
    calcularPerimetro(): number{
        return (this.l1*2)+(this.l2*2);
    }
    verificacaoQuadrado(): boolean{
        if (this.l1 == this.l2){
            return true;
        }else{
            return false;
        }
    }
}
let retangulo = new Retangulo();
retangulo.l1 = 4;
retangulo.l2 = 6;

let area = retangulo.calcularArea();
let perimetro = retangulo.calcularPerimetro();

console.log(area);
console.log(perimetro);