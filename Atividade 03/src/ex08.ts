function main(){
    const array = [1, 2, 3, 4, 5];

    const dobrados = array.map((numero) => numero * 2);
    
    const soma = dobrados.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

    console.log("Array dobrado:", dobrados);
    console.log("Soma dos elementos dobrados:", soma);

}