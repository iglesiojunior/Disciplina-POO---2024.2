function odd_or_even(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
function main() {
    var numero = 120;
    var numero_analisado = odd_or_even(numero);
    console.log("O n\u00FAmero ".concat(numero, " \u00E9 ").concat(numero_analisado ? "par" : "ímpar"));
}
main();
