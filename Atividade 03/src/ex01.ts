function odd_or_even(numero: number): Boolean{
    if(numero%2 == 0){
        return true;
    }else{
        return false;
    }
}

function main(){
    let numero: number = 120
    let numero_analisado: Boolean = odd_or_even(numero);
    console.log(`O número ${numero} é ${numero_analisado ?"par":"ímpar" }`)
}

main()